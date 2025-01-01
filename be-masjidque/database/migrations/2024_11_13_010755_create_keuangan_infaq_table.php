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
        Schema::create('keuangan_infaq', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->date('tanggal');
            $table->string('keterangan');
            $table->integer('nominal');
            $table->unsignedBigInteger('masjid_id');
            $table->enum('jenis_transaksi', ['debit', 'kredit'])->default('debit');
            $table->enum('status_transaksi', ['diajukan', 'disetujui', 'ditolak'])->default('diajukan');
            $table->string('bukti_transfer')->nullable();

            $table->foreign('masjid_id')->references('id')->on('masjid')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('keuangan_infaq');
    }
};
