<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AsetMasjid;
use App\Models\Peminjaman;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class InventarisController extends Controller
{
    public function asetMasjid()
    {
        $akunMasjid = Auth::guard('masjid')->user();
        $idMasjid = $akunMasjid->id;

        $listAsetMasjid = AsetMasjid::where('masjid_id', $idMasjid)->get();

        if ($listAsetMasjid->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'Belum ada data barang.'
            ]);
        }

        return response()->json([
            'success' => true,
            'dataBarang' => $listAsetMasjid
        ]);
    }

    public function store(Request $request)
    {
        $akunMasjid = Auth::guard('masjid')->user();
        $idMasjid = $akunMasjid->id;

        $validator = Validator::make($request->all(), [
            'nama_barang' => 'required',
            'jumlah' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        AsetMasjid::create([
            'nama_aset' => $request->input('nama_barang'),
            'quantity' => $request->input('jumlah'),
            'status_peminjaman' => 'tersedia',
            'masjid_id' => $idMasjid
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Berhasil menambahkan aset masjid.'
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nama_barang' => 'required',
            'jumlah' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $aset = AsetMasjid::find($id);

        if (!$aset) {
            return response()->json([
                'success' => false,
                'message' => 'Data tidak ditemukan',
            ], 404);
        }

        $aset->update([
            'nama_aset' => $request->input('nama_barang'),
            'quantity' => $request->input('jumlah'),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Berhasil mengubah data aset masjid.'
        ]);
    }

    public function destroy($id)
    {
        $aset = AsetMasjid::find($id);

        if (!$aset) {
            return response()->json([
                'success' => false,
                'message' => 'Data tidak ditemukan',
            ], 404);
        }

        $aset->delete();

        return response()->json([
            'success' => true,
            'message' => 'Berhasil menghapus data aset masjid.'
        ]);
    }

    public function pengajuanPeminjaman()
    {
        $akunMasjid = Auth::guard('masjid')->user();
        $idMasjid = $akunMasjid->id;

        $peminjaman = Peminjaman::where('masjid_id', $idMasjid)->where('status', 'diajukan')->get();

        $pengembalian = Peminjaman::where('masjid_id', $idMasjid)->where('status', 'disetujui')->get();

        return response()->json([
            'success' => true,
            'peminjaman' => $peminjaman,
            'pengembalian' => $pengembalian
        ]);
    }

    public function setujuiPeminjaman($id)
    {
        $peminjaman = Peminjaman::find($id);

        if (!$peminjaman) {
            return response()->json([
                'success' => false,
                'message' => 'Pengajuan peminjaman tidak ditemukan.'
            ]);
        }

        $barang = AsetMasjid::find($peminjaman->aset_id);
        $jumlahBarangTersedia = $barang->quantity;

        if ($peminjaman->jumlah > $jumlahBarangTersedia) {
            return response()->json([
                'success' => false,
                'message' => 'Jumlah yang dipinjam melebihi jumlah yang tersedia.'
            ]);
        }

        $jumlahBarangSetelahDipinjam = $jumlahBarangTersedia - $peminjaman->jumlah;

        $barang->update([
            'quantity' => $jumlahBarangSetelahDipinjam,
            'status' => 'dipinjamkan'
        ]);

        $peminjaman->update([
            'status' => 'disetujui'
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Pengajuan peminjaman barang berhasil disetujui.'
        ]);
    }

    public function tolakPeminjaman($id)
    {
        $peminjaman = Peminjaman::find($id);

        if (!$peminjaman) {
            return response()->json([
                'success' => false,
                'message' => 'Pengajuan peminjaman tidak ditemukan.'
            ]);
        }

        $peminjaman->update([
            'status' => 'ditolak'
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Pengajuan peminjaman berhasil ditolak'
        ]);
    }

    public function pengembalianPeminjaman($id)
    {
        $peminjaman = Peminjaman::find($id);

        if (!$peminjaman) {
            return response()->json([
                'success' => false,
                'message' => 'Pengajuan peminjaman tidak ditemukan.'
            ]);
        }

        $barang = AsetMasjid::find($peminjaman->aset_id);
        $jumlahBarang = $barang->quantity;
        $jumlahPeminjaman = $peminjaman->jumlah;

        $jumlahBarangSetelahDikembalikan = $jumlahBarang + $jumlahPeminjaman;

        if (Peminjaman::where('aset_id', $barang->id)->exist()) {
            $barang->update([
                'quantity' => $jumlahBarangSetelahDikembalikan,
                'status' => 'dipinjamkan'
            ]);
        } else {
            $barang->update([
                'quantity' => $jumlahBarangSetelahDikembalikan,
                'status' => 'tersedia'
            ]);
        }

        $peminjaman->update([
            'status' => 'selesai'
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Pengembalian peminjaman berhasil dikonfirmasi.'
        ]);
    }
}
