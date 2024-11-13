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
        Schema::create('aset_masjid', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            //
            $table->string('nama_aset');
            $table->string('masjid_id');
            $table->string('foto');
            $table->Integer('quantity');
            $table->enum('status_peminjaman', ['dipinjamkan','tersedia' ])->default('tersedia');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('aset_masjid');
    }
};
