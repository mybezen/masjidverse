<?php

namespace App\Http\Controllers;

use App\Models\AsetMasjid;
use App\Models\Masjid;
use App\Models\KegiatanMasjid;
use App\Models\KeuanganInfaq;
use App\Models\Peminjaman;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MasjidDetailController extends Controller
{
    public function index($id)
    {
        $masjid = Masjid::find($id);
        return response()->json([
            'nama' => $masjid->nama,
            'foto' => $masjid->foto,
            'id' => $masjid->id
        ]);
    }

    public function profile($id)
    {
        $masjid = Masjid::find($id);
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
        $sudahDilaksanakan = $kegiatan->tanggal <= now()->toDateString();

        return response()->json([
            'kegiatan' => $kegiatan,
            'sudahDilaksanakan' => $sudahDilaksanakan,
        ]);
    }

    public function keuangan($id, Request $request)
    {

        // Validasi input tanggal (jika diperlukan)
        $validated = $request->validate([
            'bulan' => 'required|date_format:Y-m' // Contoh: '2024-12'
        ]);

        $masjid = Masjid::with('keuanganInfaq')->find($id);

        // Ambil bulan dari request
        $bulan = $validated['bulan'];
        $startDate = \Carbon\Carbon::parse($bulan)->startOfMonth();
        $endDate = \Carbon\Carbon::parse($bulan)->endOfMonth();

        // Filter data keuangan berdasarkan rentang tanggal
        $keuangan = $masjid->keuanganInfaq()
            ->whereBetween('tanggal', [$startDate, $endDate])
            ->get();

        // Hitung pemasukan dan pengeluaran untuk bulan tersebut
        $pemasukan = $keuangan->where('jenis_transaksi', 'debit')->sum('nominal');
        $pengeluaran = $keuangan->where('jenis_transaksi', 'kredit')->sum('nominal');

        // Hitung saldo awal (sebelum bulan ini)
        $saldoAwal = $masjid->keuanganInfaq()
            ->where('tanggal', '<', $startDate)
            ->where('jenis_transaksi', 'debit')
            ->sum('nominal');
        $masjid->keuanganInfaq()
            ->where('tanggal', '<', $startDate)
            ->where('jenis_transaksi', 'kredit')
            ->sum('nominal');

        // Hitung saldo akhir untuk bulan tersebut
        $saldoAkhir = $saldoAwal + $pemasukan - $pengeluaran;

        // Siapkan data untuk grafik jika diperlukan
        $dataGrafik = $keuangan->groupBy(function ($item) {
            return \Carbon\Carbon::parse($item->tanggal)->format('d'); // Group by day of the month
        })->map(function ($group) {
            return [
                'pemasukan' => $group->where('jenis_transaksi', 'debit')->sum('nominal'),
                'pengeluaran' => $group->where('jenis_transaksi', 'kredit')->sum('nominal'),
            ];
        });

        return response()->json([
            'laporan' => [
                'saldoAwal' => $saldoAwal,
                'totalPemasukan' => $pemasukan,
                'totalPengeluaran' => $pengeluaran,
                'saldoAkhir' => $saldoAkhir,
            ],
            'grafik' => $dataGrafik,
        ]);
    }

    public function aset($id)
    {
        $masjid = Masjid::find($id);
        $asetMasjid = $masjid->asetMasjid;

        return response()->json([
            'asetMasjid' => $asetMasjid
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
            'success' => true
        ]);
    }

    public function organisasi($id)
    {
        $masjid = Masjid::find($id);
        $strukturOrganisasi = $masjid->strukturOrganisasi;

        return response()->json([
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
        $validated = $request->validate([
            'nama_lengkap' => 'required|string|max:255',
            'nomor_telepon' => 'required|string|max:20',
            'barang' => 'required|string|max:255',
            'jumlah' => 'required|integer|min:1',
            'tanggal_mulai' => 'required|date|after_or_equal:today',
            'tanggal_selesai' => 'required|date|after_or_equal:tanggal_mulai',
            'aset_id' => 'required'
        ]);

        Peminjaman::create([
            'masjid_id' => $id,
            'nama_lengkap' => $validated['nama_lengkap'],
            'nomor_telepon' => $validated['nomor_telepon'],
            'barang' => $validated['barang'],
            'jumlah' => $validated['jumlah'],
            'tanggal_mulai' => $validated['tanggal_mulai'],
            'tanggal_selesai' => $validated['tanggal_selesai'],
            'aset_id' => $validated['aset_id'],
            'status' => 'diajukan',
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Berhasil membuat peminjaman aset.'
        ]);
    }
}
