<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('masjid', function (Blueprint $table) {
            $table->timestamp('password_last_updated_at')->nullable()->after('password');
        });
    }

    public function down(): void
    {
        Schema::table('masjid', function (Blueprint $table) {
            $table->dropColumn('password_last_updated_at');
        });
    }
};
