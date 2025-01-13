<?php

namespace App\Http\Controllers;

use App\Models\AsetMasjid;
use App\Models\Masjid;
use App\Models\KegiatanMasjid;
use App\Models\KeuanganInfaq;
use App\Models\Peminjaman;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class MasjidDetailController extends Controller
{
    public function index($id)
    {
        $masjid = Masjid::find($id);

        if (!$masjid) {
            return response()->json([
                'success' => false,
                'message' => 'Akun masjid tidak ditemukan.'
            ]);
        }

        return response()->json([
            'nama' => $masjid->nama,
            'foto' => $masjid->foto,
            'id' => $masjid->id
        ]);
    }

    public function profile($id)
    {
        $masjid = Masjid::find($id);

        if (!$masjid) {
            return response()->json([
                'success' => false,
                'message' => 'Akun masjid tidak ditemukan.'
            ]);
        }

        return response()->json([
            'masjid' => $masjid->only([
                'id',
                'nama',
                'deskripsi',
                'provinsi',
                'kota',
                'alamat',
                'tahun_berdiri',
                'instagram',
                'facebook',
                'website',
                'nama_yayasan',
                'foto',
                'logo',
                'status'
            ])
        ]);
    }

    public function kegiatan($id)
    {
        $masjid = Masjid::find($id);

        if (!$masjid) {
            return response()->json([
                'success' => false,
                'message' => 'Akun masjid tidak ditemukan.'
            ]);
        }

        $kegiatanTerbaru = KegiatanMasjid::where('masjid_id', $masjid->id)
            ->whereDate('tanggal', '<=', now())
            ->orderBy('tanggal', 'desc')
            ->limit(3)
            ->get();

        $kegiatanAkanDatang = KegiatanMasjid::where('masjid_id', $masjid->id)
            ->whereDate('tanggal', '>', now())
            ->orderBy('tanggal', 'asc')
            ->limit(3)
            ->get();

        return response()->json([
            'kegiatanTerbaru' => $kegiatanTerbaru,
            'kegiatanAkanDatang' => $kegiatanAkanDatang,
        ]);
    }

    public function kegiatanDetail($id)
    {
        $kegiatan = KegiatanMasjid::find($id);

        if (!$kegiatan) {
            return response()->json([
                'success' => true,
                'message' => 'Kegiatan tidak ditemukan.'
            ]);
        }

        $sudahDilaksanakan = $kegiatan->tanggal <= now()->toDateString();

        return response()->json([
            'kegiatan' => $kegiatan,
            'sudahDilaksanakan' => $sudahDilaksanakan,
        ]);
    }

    public function keuangan($id)
    {
        $masjid = Masjid::find($id);

        if (!$masjid) {
            return response()->json([
                'success' => false,
                'message' => 'Akun masjid tidak ditemukan.'
            ]);
        }

        $bank = $masjid->bank;
        $nomorRekening = $masjid->no_rekening;
        $atasNama = $masjid->atas_nama;

        $totalPengeluaran = KeuanganInfaq::where('masjid_id', $id)
            ->where('jenis_transaksi', 'kredit')
            ->whereMonth('tanggal', date('m'))
            ->whereYear('tanggal', date('Y'))
            ->sum('nominal');

        $totalPemasukan = KeuanganInfaq::where('masjid_id', $id)
            ->where('jenis_transaksi', 'debit')
            ->where('status_transaksi', 'disetujui')
            ->whereMonth('tanggal', date('m'))
            ->whereYear('tanggal', date('Y'))
            ->sum('nominal');

        $tahun = date('Y');

        $pengeluaranBulanan = KeuanganInfaq::selectRaw('MONTH(tanggal) as bulan, SUM(nominal) as total_pengeluaran')
            ->whereYear('tanggal', $tahun)
            ->where('masjid_id', $id)
            ->where('jenis_transaksi', 'kredit')
            ->where('status_transaksi', 'disetujui')
            ->groupByRaw('MONTH(tanggal)')
            ->orderBy('bulan')
            ->get()
            ->pluck('total_pengeluaran', 'bulan');

        $listPengeluaranBulanan = [];
        for ($bulan = 1; $bulan <= 12; $bulan++) {
            $listPengeluaranBulanan[$bulan] = $pengeluaranBulanan->get($bulan, 0);
        }

        $pemasukanBulanan = KeuanganInfaq::selectRaw('MONTH(tanggal) as bulan, SUM(nominal) as total_pemasukan')
            ->whereYear('tanggal', $tahun)
            ->where('masjid_id', $id)
            ->where('jenis_transaksi', 'debit')
            ->where('status_transaksi', 'disetujui')
            ->groupByRaw('MONTH(tanggal)')
            ->orderBy('bulan')
            ->get()
            ->pluck('total_pemasukan', 'bulan');

        $listPemasukanBulanan = [];
        for ($bulan = 1; $bulan <= 12; $bulan++) {
            $listPemasukanBulanan[$bulan] = $pemasukanBulanan->get($bulan, 0);
        }

        return response()->json([
            'totalPemasukan' => $totalPemasukan,
            'totalPengeluaran' => $totalPengeluaran,
            'listPengeluaranBulanan' => $listPengeluaranBulanan,
            'listPemasukanBulanan' => $listPemasukanBulanan,
            'bank' => $bank,
            'nomorRekening' => $nomorRekening,
            'atasNama' => $atasNama
        ]);
    }

    public function donasi($id, Request $request)
    {
        $validated = $request->validate([
            'atas_nama' => 'required|string|max:64',
            'nominal' => 'required|numeric|min:5000',
            'bukti_transfer' => 'nullable|file|mimes:jpg,png,jpeg|max:4096'
        ]);

        $buktiTransfer = $request->file('bukti_transfer');

        $donasi = KeuanganInfaq::create([
            'masjid_id' => $id,
            'atas_nama' => $validated['atas_nama'],
            'nominal' => $validated['nominal'],
            'bukti_transfer' => $buktiTransfer ? $buktiTransfer->store('bukti_transfer') : null,
            'jenis_transaksi' => 'debit',
            'status_transaksi' => 'diajukan',
            'tanggal' => now(),
            'keterangan' => 'Donasi sebesar Rp. ' . $validated['nominal']
        ]);

        if (!$donasi) {
            return response()->json(['message' => 'Gagal menambahkan donasi'], 422);
        }

        return response()->json([
            'success' => true,
            'message' => 'Berhasil membuat donasi baru. Menunggu pengurus masjid untuk menyetujui donasi ini.'
        ]);
    }

    public function aset($id)
    {
        $masjid = Masjid::find($id);

        if (!$masjid) {
            return response()->json([
                'success' => false,
                'message' => 'Akun masjid tidak ditemukan.'
            ]);
        }

        $asetMasjid = $masjid->asetMasjid;

        return response()->json([
            'asetMasjid' => $asetMasjid
        ]);
    }

    public function organisasi($id)
    {
        $masjid = Masjid::find($id);

        if (!$masjid) {
            return response()->json([
                'success' => false,
                'message' => 'Akun masjid tidak ditemukan.'
            ]);
        }

        $strukturOrganisasi = $masjid->strukturOrganisasi;

        return response()->json([
            'success' => true,
            'strukturOrganisasi' => $strukturOrganisasi
        ]);
    }

    public function peminjamanAsetShow($id)
    {
        $aset = AsetMasjid::where('masjid_id', $id)->get();

        return response()->json([
            'success' => true,
            'aset' => $aset
        ]);
    }

    public function peminjamanAset($id, Request $request)
    {
        $masjid = Masjid::find($id);

        if (!$masjid) {
            return response()->json([
                'success' => false,
                'message' => 'Akun masjid tidak ditemukan.'
            ]);
        }

        $idAset = $request->input('aset_id');
        $jumlahAset = AsetMasjid::find($idAset)->jumlah;

        $validator = Validator::make($request->all(), [
            'nama_lengkap' => 'required|string|max:255',
            'nomor_telepon' => 'required|string|max:20',
            'jumlah' => 'required|integer|min:1|max:' . $jumlahAset,
            'tanggal_mulai' => 'required|date|after_or_equal:today',
            'tanggal_selesai' => 'required|date|after_or_equal:tanggal_mulai',
            'aset_id' => 'required|integer|exists:aset_masjid,id'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ]);
        }

        $peminjaman = Peminjaman::create([
            'masjid_id' => $id,
            'nama' => $request->input('nama_lengkap'),
            'no_telepon' => $request->input('nomor_telepon'),
            'jumlah' => $request->input('jumlah'),
            'tanggal_peminjaman' => $request->input('tanggal_mulai'),
            'tanggal_pengembalian' => $request->input('tanggal_selesai'),
            'aset_id' => $request->input('aset_id'),
            'status' => 'diajukan',
        ]);

        if (!$peminjaman) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal membuat peminjaman barang.'
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Berhasil membuat peminjaman aset.'
        ]);
    }
}
