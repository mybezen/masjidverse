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
                //
                $table->string('masjid_id');
                $table->date('tanggal');
                $table->string('nama_kegiatan');
                $table->string('foto');
                $table->text('deskripsi');
                $table->string('lokasi');

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
