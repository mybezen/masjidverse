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
            $table->string('alamat');
            $table->string('no_telepon');
            $table->string('website');
            $table->string('email')->unique();
            $table->text('alamat_map');
            $table->string('foto');
            $table->string('logo');
            $table->string('password');
            $table->string('no_rekening');
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
