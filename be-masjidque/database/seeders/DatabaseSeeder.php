<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Masjid;
use App\Models\Peminjaman;
use App\Models\AsetMasjid;
use App\Models\KegiatanMasjid;
use App\Models\KeuanganInfaq;
use App\Models\StrukturOrganisasi;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Seed SuperAdmin User
        User::create([
            'name' => 'Super Admin',
            'email' => 'superadmin@gmail.com',
            'password' => bcrypt('password123'),
            'role' => 'superadmin',
        ]);

        // Seed Masjid
        $masjid = Masjid::create([
            'nama' => 'Masjid Al-Falah',
            'password' => bcrypt('password123'),
            'deskripsi' => 'Masjid dengan fasilitas lengkap untuk masyarakat sekitar.',
            'provinsi' => 'Jawa Barat',
            'kota' => 'Bandung',
            'kecamatan' => 'Sukajadi',
            'alamat' => 'Jl. Raya No. 1',
            'alamat_map' => 'https://goo.gl/maps/example',
            'kode_pos' => '40231',
            'tahun_berdiri' => '1990',
            'luas_tanah' => '500 m2',
            'luas_bangunan' => '300 m2',
            'bank' => 'Bank Mandiri',
            'no_rekening' => '1234567890',
            'saldo_kas' => 10000000,
            'atas_nama' => 'Yayasan Al-Falah',
            'no_telepon' => '08123456789',
            'email' => 'contact@masjidalfalah.com',
            'instagram' => '@masjidalhuda',
            'facebook' => 'facebook.com/masjidalhuda',
            'website' => 'http://masjidalfalah.com',
            'nama_yayasan' => 'Yayasan Al-Falah',
            'foto' => 'path/to/foto.jpg',
            'logo' => 'path/to/logo.png',
            'status' => 'diajukan',
        ]);

        $masjid = Masjid::create([
            'nama' => 'Masjid Al-Huda',
            'password' => bcrypt('password123'),
            'deskripsi' => 'Masjid modern yang melayani masyarakat dengan berbagai fasilitas.',
            'provinsi' => 'Jawa Tengah',
            'kota' => 'Semarang',
            'kecamatan' => 'Tembalang',
            'alamat' => 'Jl. Masjid No. 2',
            'alamat_map' => 'https://goo.gl/maps/example',
            'kode_pos' => '50275',
            'tahun_berdiri' => '1985',
            'luas_tanah' => '600 m2',
            'luas_bangunan' => '400 m2',
            'bank' => 'Bank BRI',
            'no_rekening' => '9876543210',
            'saldo_kas' => 15000000,
            'atas_nama' => 'Yayasan Al-Huda',
            'no_telepon' => '08223456789',
            'email' => 'contact@masjidalhuda.com',
            'instagram' => '@masjidalhuda',
            'facebook' => 'facebook.com/masjidalhuda',
            'website' => 'http://masjidalhuda.com',
            'nama_yayasan' => 'Yayasan Al-Huda',
            'foto' => 'path/to/foto.jpg',
            'logo' => 'path/to/logo.png',
            'status' => 'diterima',
        ]);

        // Ambil ID masjid
        $masjidId = $masjid->id;

        // Seed Aset Masjid
        AsetMasjid::create([
            'nama_barang' => 'Kursi Plastik',
            'jumlah' => 100,
            'status_peminjaman' => 'Tersedia',
            'masjid_id' => $masjidId,
        ]);

        AsetMasjid::create([
            'nama_barang' => 'Sound System',
            'jumlah' => 10,
            'status_peminjaman' => 'Tersedia',
            'masjid_id' => $masjidId,
        ]);

        // Seed Peminjaman
        Peminjaman::create([
            'nama' => 'Ali Bin Abi',
            'no_telepon' => '08234567890',
            'jumlah' => 20,
            'tanggal_peminjaman' => now()->subDays(1),
            'tanggal_pengembalian' => now()->addDays(3),
            'aset_id' => 1,
            'masjid_id' => $masjidId,
            'status' => 'diajukan'
        ]);

        Peminjaman::create([
            'nama' => 'Aisyah Binti Abu',
            'no_telepon' => '08145678901',
            'jumlah' => 5,
            'tanggal_peminjaman' => now()->subDays(3),
            'tanggal_pengembalian' => now()->subDay(),
            'aset_id' => 1, // Pastikan aset ID yang valid
            'masjid_id' => $masjidId,
            'status' => 'diajukan'
        ]);

        // Seed Kegiatan Masjid
        KegiatanMasjid::create([
            'tanggal' => now()->subDays(1),
            'waktu' => '18:00:00',
            'nama_kegiatan' => 'Kajian Subuh',
            'penceramah' => 'Ustadz Abdul Somad',
            'foto' => 'path/to/kajian_subuh.jpg',
            'deskripsi' => 'Kajian tafsir Al-Quran bersama Ustadz Abdul Somad.',
            'lokasi' => 'Masjid Al-Falah',
            'masjid_id' => $masjidId, // Gunakan ID masjid
            'status_laporan' => 'diajukan',
        ]);

        // Seed Keuangan Infaq: Debit (Pemasukan)
        KeuanganInfaq::create([
            'tanggal' => now(),
            'keterangan' => 'Infaq Jumat Berkah',
            'nominal' => 500000,
            'jenis_transaksi' => 'debit',
            'status_transaksi' => 'diajukan',
            'masjid_id' => $masjidId,
            'bukti_transfer' => 'path/to/example_transfer1.jpg',
        ]);

        KeuanganInfaq::create([
            'tanggal' => now()->subDays(5),
            'keterangan' => 'Sumbangan Khusus',
            'nominal' => 200000,
            'jenis_transaksi' => 'debit',
            'status_transaksi' => 'disetujui',
            'masjid_id' => $masjidId,
            'bukti_transfer' => 'path/to/example_transfer2.jpg',
        ]);

        // Seed Keuangan Infaq: Kredit (Pengeluaran)
        KeuanganInfaq::create([
            'tanggal' => now()->subDays(3),
            'keterangan' => 'Pembelian Alat Kebersihan',
            'nominal' => 150000,
            'jenis_transaksi' => 'kredit',
            'status_transaksi' => 'disetujui',
            'masjid_id' => $masjidId,
            'bukti_transfer' => 'path/to/example_transfer3.jpg',
        ]);

        KeuanganInfaq::create([
            'tanggal' => now()->subDays(1),
            'keterangan' => 'Biaya Listrik',
            'nominal' => 100000,
            'jenis_transaksi' => 'kredit',
            'status_transaksi' => 'disetujui',
            'masjid_id' => $masjidId,
            'bukti_transfer' => 'path/to/example_transfer4.jpg',
        ]);

        // Seed Struktur Organisasi
        StrukturOrganisasi::create([
            'nama' => 'Ustadz Ahmad',
            'jabatan' => 'Ketua',
            'no_telepon' => '08123456789',
            'masjid_id' => $masjidId,
        ]);

        StrukturOrganisasi::create([
            'nama' => 'Ustadz Adi',
            'jabatan' => 'Wakil Ketua',
            'no_telepon' => '08198765432',
            'masjid_id' => $masjidId,
        ]);
    }
}