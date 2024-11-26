<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('masjid', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('nama');
            $table->string('password');
            $table->text('deskripsi');
            $table->string('provinsi');
            $table->string('kota');
            $table->string('kecamatan');
            $table->string('alamat');
            $table->text('alamat_map');
            $table->string('kode_pos');
            $table->string('tahun_berdiri');
            $table->string('luas_tanah');
            $table->string('luas_bangunan');
            $table->string('bank');
            $table->string('no_rekening');
            $table->string('atas_nama');
            $table->string('no_telepon');
            $table->string('email')->unique();
            $table->string('instagram')->nullable();
            $table->string('facebook')->nullable();
            $table->string('website')->nullable();
            $table->string('nama_yayasan');
            $table->string('foto');
            $table->string('logo');
            $table->enum('status', ['diajukan', 'ditolak', 'diterima'])->default('diajukan');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('masjid');
    }
};
