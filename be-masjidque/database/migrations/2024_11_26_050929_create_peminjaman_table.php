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
        Schema::create('peminjaman', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('nama');
            $table->string('no_telepon');
            $table->integer('jumlah');
            $table->date('tanggal_peminjaman');
            $table->date('tanggal_pengembalian');
            $table->unsignedBigInteger('aset_id');
            $table->unsignedBigInteger('masjid_id');
            $table->enum('status', ['diajukan', 'disetujui', 'ditolak'])->default('diajukan');

            $table->foreign('masjid_id')->references('id')->on('masjid')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('peminjaman');
    }
};
