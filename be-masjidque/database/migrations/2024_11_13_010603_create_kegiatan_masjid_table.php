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
            Schema::create('kegiatan_masjid', function (Blueprint $table) {
                $table->id();
                $table->timestamps();
                $table->date('tanggal');
                $table->time('waktu');
                $table->string('nama_kegiatan');
                $table->string('penceramah');
                $table->string('foto');
                $table->text('deskripsi');
                $table->string('lokasi');
                $table->unsignedBigInteger('masjid_id');
                $table->enum('status_laporan', ['normal','diajukan', 'disetujui', 'ditolak', 'ditinjau'])->default('normal');



                $table->foreign('masjid_id')->references('id')->on('masjid')->onDelete('cascade');
            });
        }

        /**
         * Reverse the migrations.
         */
        public function down(): void
        {
            Schema::dropIfExists('kegiatan_masjid');
        }
    };
