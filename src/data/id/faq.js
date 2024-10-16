import { setCurrency } from '@helpers/methods/currency';

const general = [
  {
    title: 'Apa itu pendanaan berbasis peer-to-peer?',
    description:
      'Pendanaan Peer-to-peer adalah layanan pendanaan suatu proyek secara digital dengan menggunakan sebuah platform internet untuk menghubungkan antara Pemberi Pendanaan dan Mitra Proyek sebagai Penerima Pendanaan.',
  },
  {
    title:
      'Apakah perbedaan Pendanaan Peer-to-Peer Syariah <span class="text-primary-main dark:text-primary-surface">ETHIS</span> dengan pendanaan digital lain?',
    description:
      'Pendanaan Peer-to-peer Syari’ah di <span class="text-primary-main dark:text-primary-surface">ETHIS</span> menggunakan landasan kontrak (Akad) berbasis prinsip Syariah dan tidak berpedoman pada suku bunga (Riba). Uang pendanaan juga disalurkan ke proyek yang membawa dampak sosial dalam skala lebih besar. Peer-to-peer juga merupakan aktifitas pengumpulan dana dengan tujuan khusus. Pengaju pendanaan wajib menyatakan alasan diperlukannya dana pada saat pengajuan.',
  },
  {
    title:
      'Apa saja manfaat dari layanan peer-to-peer <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      'Peer-to-peer <span class="text-primary-main dark:text-primary-surface">ETHIS</span> memberikan layanan kepada para Penggunanya untuk memaksimalkan keuangannya ataupun dapat mengajukan Pendanaan untuk mengembangkan usahanya. Semua layanan yang tersedia di <span class="text-primary-main dark:text-primary-surface">ETHIS</span> sudah berdasarkan konsep Syari’ah yang mengutamakan keadilan dalam pendanaan dan memberikan dampak sosial.',
  },
  {
    title:
      'Ada berapa kontrak (Akad) Syariah yang digunakan <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      'Saat ini <span class="text-primary-main dark:text-primary-surface">ETHIS</span> menggunakan akad Musyarakah / Kerjasama dalam sistem Bagi Hasil antara Pemberi Pendanaan dan Mitra Proyek dan juga akad Wakalah untuk <span class="text-primary-main dark:text-primary-surface">ETHIS</span> sebagai perwakilan atau penyelenggara yang mempertemukan dua pihak dalam satu website.',
  },
  {
    title:
      'Bagaimana cara <span class="text-primary-main dark:text-primary-surface">ETHIS</span> “menghubungkan”  kesepakatan antara pihak-pihak yang terlibat?',
    description:
      'Semua kontrak / perjanjian akan dikirimkan melalui aplikasi penandatanganan digital ke alamat email Pemberi Pendanaan yang terdaftar di <span class="text-primary-main dark:text-primary-surface">ETHIS</span>. Penandatanganan yang dilakukan secara elektronik atau dengan sistem digital ini memiliki kekuatan hukum yang sama.',
  },
  {
    title: 'Apakah pengguna dapat memiliki lebih dari satu akun?',
    description:
      'Setiap pendanaan hanya dibolehkan menggunakan satu akun di platform <span class="text-primary-main dark:text-primary-surface">ETHIS</span>. Hal ini bertujuan untuk keamanan transaksi sesuai regulasi yang telah ditetapkan pemerintah.',
  },
];

const funding = (minimumInvestment = 0) => [
  {
    title:
      'Pendanaan apa saja yang ditawarkan oleh <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      'Saat ini kami membuka pendanaan untuk konstruksi & pengembangan properti, infrastruktur dan pengembangan UKM.',
  },
  {
    title:
      'Siapa  dan apa saja persyaratan untuk mengajukan Pendanaan <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      'Individu yang sudah terdaftar sebagai Pengguna layanan <span class="text-primary-main dark:text-primary-surface">ETHIS</span> dapat mengajukan pendanaan kepada <span class="text-primary-main dark:text-primary-surface">ETHIS</span>. Adapun persyaratannya yaitu melampirkan data diri, perusahaan, dan surat-surat perizinan menyangkut perusahaan juga proyek yang diajukan.',
  },
  {
    title:
      'Proyek seperti apakah yang layak menerima pendanaan oleh <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      'Hingga saat ini, untuk pendanaan UKM kami menerima proyek dari berbagai sektor yang telah memiliki pengalaman atau rekam jejak yang baik dalam usaha yang dikembangkan. Sedangkan pada proyek properti, kami berfokus kepada pengembangan perumahan sederhana sebagai upaya mendorong jumlah penyediaan perumahan untuk kalangan masyarakat menengah – kebawah.',
  },
  {
    title:
      'Bagaimana cara mengirimkan aplikasi pendanaan ke <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      'Pengajuan pendanaan dapat dilakukan secara online dengan memilih menu Ajukan Pendanaan, setelah terdaftar sebagai Pengguna Layanan <span class="text-primary-main dark:text-primary-surface">ETHIS</span>. Pilih jenis usaha anda yang sesuai, lalu isi data secara lengkap yang terdapat pada Formulir Pre-Onboarding sebagai bahan analisa Tim Bisnis dan Analis <span class="text-primary-main dark:text-primary-surface">ETHIS</span>. Selanjutnya, Anda akan dihubungi oleh tim terkait untuk hasil uji kelayakan tersebut.',
  },
  {
    title:
      'Berapa lama proses aplikasi saya mendapat persetujuan untuk pendanaan?',
    description:
      'Proses seleksi proyek berkisar antara 2 – 4 minggu dengan dokumen dan syarat-syarat yang sesuai kemudian untuk  durasi pengumpulan dana yang dibutuhkan maksimal 45 hari.',
  },
  {
    title:
      'Apakah ada sekuritas jaminan untuk pendanaan <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      'Selain hasil analisa proyek yang ketat dari tim pengamat resiko <span class="text-primary-main dark:text-primary-surface">ETHIS</span>, Mitra Proyek bekerjasama dengan memberikan beberapa jaminan yang disetujui oleh <span class="text-primary-main dark:text-primary-surface">ETHIS</span> dan <span class="text-primary-main dark:text-primary-surface">ETHIS</span> bekerjasama dengan salah satu pihak ketiga untuk proteksi kredit syari’ah.',
  },
  {
    title:
      'Adakah biaya yang dikenakan oleh <span class="text-primary-main dark:text-primary-surface">ETHIS</span> untuk jasa pengumpulan dana melalui website yang digunakan untuk memenuhi dana kebutuhan Mitra Proyek?',
    description:
      '<span class="text-primary-main dark:text-primary-surface">ETHIS</span> mengenakan biaya penyelenggaran pendanaan berbeda-beda sesuai nilai proyek dan jangka waktu pelunasan, ditambah margin keuntungan yang akan diberikan kepada Pemberi Pendanaan.',
  },
  {
    title: 'Adakah denda yang dikenakan saat keterlambatan pengembalian uang?',
    description:
      'Tidak ada. Syariah tidak membenarkan adanya tambahan biaya denda dalam hutang dan pendanaan. Jaminan yang diberikan oleh pemilik proyek sudah kami hitung nilainya berdasarkan dana yang dibutuhkan dan bisa digunakan untuk menyelesaikan hutang piutang. Apabila nilai jual melebihi, maka sisa tersebut akan kami kembalikan ke pihak penerima pendanaan. Jika masalah berkelanjutan, perjanjian kerjasama yang memiliki kekuatan hukum akan diselesaikan dengan semestinya.',
  },
  {
    title:
      'Apakah Pendanaan <span class="text-primary-main dark:text-primary-surface">ETHIS</span> bisa untuk modal pribadi seperti Pinjol (Pinjaman Online)?',
    description:
      'Tidak, <span class="text-primary-main dark:text-primary-surface">ETHIS</span> hanya melayani pendanaan untuk Properti atau usaha UKM yang mana juga harus memiliki dokument - dokument perusahaan yang valid.',
  },
  {
    title:
      'Bagaimana cara menjadi pendana di <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      'Untuk menjadi pendana di <span class="text-primary-main dark:text-primary-surface">ETHIS</span>, silakan daftarkan diri  pada website ini terlebih dahulu dan lengkapi profil yang sesuai. Jika akun sudah berhasil terverifikasi, maka anda sudah bisa memulai mendanai proyek yang tersedia pada dasbor pengguna.',
  },
  {
    title: 'Apakah ada batasan usia untuk menjadi pendana?',
    description:
      '<span class="text-primary-main dark:text-primary-surface">ETHIS</span> memberikan kemudahan untuk  menjadi pendana, dimana semua kalangan yang sudah memiliki KTP bisa ikut serta mendanai proyek di <span class="text-primary-main dark:text-primary-surface">ETHIS</span>.',
  },
  {
    title: 'Adakah syarat dokumen yang wajib dimiliki calon Pendana?',
    description:
      'Untuk menjadi pendana diwajibkan memiliki KTP dan NPWP yang masih aktif dan berlaku di Wilayah  Indonesia.',
  },
  {
    title:
      'Adakah minimal pendanaan dan bagaimana jika dana ingin di refund saat proyek sudah/masih berjalan?',
    description: `Sejauh ini <span class="text-primary-main dark:text-primary-surface">ETHIS</span> memberikan minimal pendanaan minimal sebesar ${setCurrency(
      minimumInvestment
    )} dan untuk pengembalian dana sebelum jatuh tempo tenor, dalam peer-to-peer, pendanaan langsung disalurkan ke penerima (pengaju pendanaan). Pendanaan yang sudah dilakukan tidak bisa dikembalikan sampai jatuh tempo pengembalian yang berlaku atau proyek pembangunan telah selesai.`,
  },
  {
    title: 'Bagaimana Pendana bisa memantau perkembangan proyek?',
    description:
      'Pendana bisa memonitor perkembangan proyek pada dashboard proyek tersebut setiap bulannya paling sedikit, terkhusus jika ada perkembangan yang signifikan.',
  },
];

const riskManagement = [
  {
    title:
      'Apakah pendanaan proyek properti / UKM secara peer-to-peer memiliki resiko?',
    description:
      'Penting untuk dipahami bahwa semua penyelenggara dalam bentuk pendanaan termasuk peer-to-peer di pendanaan pengembangan real estate ataupun UKM memiliki kemungkinan akan kehilangan modal. Dianjurkan untuk melakukan pendanaan menggunakan tabungan tambahan, dan diversifikasi pendanaan di berbagai publikasi proyek',
  },
  {
    title:
      'Mungkinkah saya kehilangan uang yang digunakan untuk pendanaan melalui <span class="text-primary-main dark:text-primary-surface">ETHIS</span>?',
    description:
      'Dalam keadaan buruk, modal yang diberikan ke proyek pendanaan mungkin saja tidak dapat diperoleh kembali. Jika terjadi kegagalan total, semua pendanaan anda berkemungkinan hilang.',
  },
  {
    title:
      'Bagaimana <span class="text-primary-main dark:text-primary-surface">ETHIS</span> mengelola atau meminimalisir suatu resiko?',
    description:
      'Fungsi keuangan syari’ah adalah berdasarkan pembagian resiko, bukan transfer resiko. Bagaimanapun, jaminan dalam pendanaan akan kuat jika pihak yang memberikan jaminan juga kuat. <span class="text-primary-main dark:text-primary-surface">ETHIS</span> memiliki proses penyaringan yang ketat dan teliti untuk mengurangi resiko pihak pemberi pendanaan dan proyek, serta resiko pasar dan eksternal. <span class="text-primary-main dark:text-primary-surface">ETHIS</span> menggalakkan uji kelayakan sebelum melakukan publikasi pengumpulan dana proyek dalam website.',
  },
];

const socialImpact = [
  {
    title:
      'Bagaimana memberikan pendanaan untuk proyek properti dan UKM dapat memberikan dampak sosial kepada masyarakat?',
    description:
      'Selain untuk meningkatkan ekonomi Indonesia melalui pendanaan UKM, <span class="text-primary-main dark:text-primary-surface">ETHIS</span> juga memberi kesempatan untuk pemberi pendanaan memasuki pasar real estate atau properti yang terbilang memiliki aset nyata dan aman. Bagi mereka yang berpenghasilan rata-rata, sektor properti bisa dijangkau melalui penyelenggara peer-to-peer seperti <span class="text-primary-main dark:text-primary-surface">ETHIS</span>. Dengan jumlah kecil, pendanaan kepada sektor properti terpilih di <span class="text-primary-main dark:text-primary-surface">ETHIS</span> juga merupakan mengutamakan proyek yang memberikan dampak sosial dalam skala besar seperti rumah sederhana, atau rumah subsidi. Maka dari itu, Pemberi Pendanaan yang tergabung di website kami dapat menikmati keuntungan sekaligus memberi manfaat untuk sosial.',
  },
  {
    title:
      'Apakah <span class="text-primary-main dark:text-primary-surface">ETHIS</span> termasuk perusahaan yang bergerak di bidang sosial?',
    description:
      '<span class="text-primary-main dark:text-primary-surface">ETHIS</span> adalah penyelenggara finansial teknologi dengan tujuan mempercepat realisasi dampak sosial di masyarakat. Dana dari komunitas Pemberi biaya akan kami salurkan langsung ke pemilik usaha properti dan UKM yang membutuhkan dana untuk mempercepat pengembangan usaha milik mereka sehingga ekonomi sosial terus bergerak semestinya.',
  },
  {
    title:
      'Mengapa <span class="text-primary-main dark:text-primary-surface">ETHIS</span> juga membiayai proyek properti yang biasa dikenal awam memiliki market eksklusif/kelas menengah atas?',
    description:
      'Di <span class="text-primary-main dark:text-primary-surface">ETHIS</span>, pendanaan untuk sektor properti berfokus pada proyek yang memiliki dampak sosial. Terutama untuk perumahan yang terjangkau di Indonesia, yang diperkirakan masih memerlukan penyediaan rumah dalam jumlah besar. Dengan bangga, kami dapat berada di antara mereka untuk membantu warga berpenghasilan rendah, mengubah status mereka sebagai penyewa menjadi pemilik rumah. Dalam hal ini, uang peer-to-peer kami hanya digunakan untuk membiayai pengembang properti dan kontraktor real estate.',
  },
];

const shariaBase = [
  {
    title: "Apa itu Syari'ah? Dan apa yang dimaksud dengan Keuangan Syari'ah?",
    description:
      'Islam bukan hanya sekedar agama; tapi juga pedoman hidup yang mengandung kode hukum dan etika yang berhubungan dengan masalah sosial, ekonomi dan politik. Muslim diharuskan untuk hidup sesuai dengan Syari’ah di semua aspek kehidupan. Syari’ah menentukan batasan pada semua jenis keuangan dan pendanaan yang diperbolehkan untuk komunitas Muslim. Keuangan Islam dapat didefinisikan sebagai badan kontrak keuangan dan aturan yang telah diadopsi dari kekayaan warisan penelitian ilmiah dalam Fiqh Muamalat (hukum transaksi Islam) dan dimodifikasi untuk mematuhi peraturan perbankan modern, namun tetap sesuai dengan prinsip-prinsip Syari’ah. Dalam Islam, uang harus digunakan secara produktif, dan hasil keuntungan harus dilakukan melalui perdagangan dan cara pendanaan yang sah menurut Islam. Pendanaan secara berkelompok harus mencakup elemen pembagian risiko dan idealnya harus dipastikan bahwa penerima pendanaan akan menggunakan uang dengan cara yang diperbolehkan dalam Islam. Jika terdapat bunga pada hasil pendanaan maka dianggap sebagai penyalahgunaan akad dan sepenuhnya dilarang dalam Islam. Syari’ah juga tidak mengizinkan perdagangan atau pendanaan dalam industri atau komoditas yang tidak etis, seperti: senjata, perjudian, alkohol, perbankan atau asuransi konvensional, makanan atau minuman non-halal, hiburan non-halal, dan banyak lagi.',
  },
  {
    title:
      "Apakah <span class='text-primary-main dark:text-primary-surface'>ETHIS</span> sudah sesuai dengan prinsip syari'ah?",
    description:
      'Seluruh kontrak yang digunakan <span class="text-primary-main dark:text-primary-surface">ETHIS</span> dilandasi oleh aturan-aturan syari’ah. Dokumentasi kami disiapkan oleh petugas legal yang telah mempunyai pengalaman dalam aturan-aturan syari’ah dan kami memiliki dewan pengawas syari’ah yang tersertifikasi oleh Dewan Syari’ah Nasional Majelis Ulama Indonesia (DSN-MUI). <span class="text-primary-main dark:text-primary-surface">ETHIS</span> juga telah memegang sertifikasi DSN-MUI sebagai penyelenggara pendanaan peer-to-peer berbasis teknologi.',
  },
  {
    title: "Apakah perbedaan pendanaan syari'ah dengan pendanaan konvensional?",
    description:
      'Salah satu tujuan utama dalam prinsip syari’ah adalah menciptakan keadilan / keseimbangan sosial. Sistem syari’ah lebih memperhatikan dampak dari kegiatan pendanaan yang berfokus pada ekonomi, masyarakat dan lingkungan. Dalam hal ini, <span class="text-primary-main dark:text-primary-surface">ETHIS</span> memperhatikan segala aktivitas yang dilakukan mempunyai aspek-aspek tersebut. Lain halnya dengan sistem keuangan konvensional yang kurang mempertimbangkan nilai etika, lingkungan, atau sosial karena tujuan utamanya adalah memaksimalkan laba.',
  },
  {
    title:
      'Apakah memberi pendanaan syariah lebih beresiko daripada pendanaan konvensional?',
    description:
      'Setiap pendanaan pasti mempunyai resiko. Sama seperti konvensional, pendanaan berbasis syari’ah membutuhkan evaluasi karena menggunakan metode manajemen resiko seperti: menganalisa perencanaan bisnis pada suatu proyek, mengelola keuangan dari penerima pendanaan, mengamati riwayat pembayaran utang, dan hal-hal terkait lainnya. Namun, agar pendanaan sesuai dengan syarat syari’at Islam, hal ini memerlukan beberapa analisa tambahan yang harus dilakukan untuk memastikan proyek bisnis yang membutuhkan pendanaan patuh pada prinsip-prinsip syari’ah. Pendanaan dalam bidang industri atau komoditi yang tidak sesuai syari’ah, seperti: perdagangan/produksi senjata, perjudian, perdagangan alkohol, perbankan atau asuransi konvensional, makanan dan minuman non-halal, hiburan non-halal, dan sejenisnya tidak diperbolehkan dalam syari’ah.',
  },
];

const other = [
  {
    title:
      'Bagaimana jika proyek yang dibiayai menerapkan prinsip syariah ketika tahap pendanaan, tetapi setelah pengembalian modal usaha proyek tersebut menjadi tidak berprinsip syariah?',
    description:
      'Setelah pengembalian modal dan pembagian hasil, pendana tidak memiliki hubungan apapun atau kepemilikan proyek tersebut. Penerapan prinsip syariah menjadi tanggung jawab penuh pemberi pendanaan.',
  },
  {
    title:
      'Mengapa <span class="text-primary-main dark:text-primary-surface">ETHIS</span> tidak menunjuk seorang atau pihak ketiga untuk mengawasi dan memastikan developer tidak melarikan diri?',
    description:
      'Untuk saat ini, <span class="text-primary-main dark:text-primary-surface">ETHIS</span>i bekerjasama dengan partner perusahaan developer, yaitu perusahaan terafiliasi yang menjadikan kami sebagai co-developer sehingga dapat masuk langsung ke dalam proyek tersebut dan memiliki fungsi yang sama dengan kustodian.',
  },
  {
    title:
      'Kenapa penerima pendanaan lebih memilih untuk mengajukan pendanaan ke <span class="text-primary-main dark:text-primary-surface">ETHIS</span> daripada ke bank?',
    description:
      'Proses pengajuan aplikasi dan pelayanan kami lebih cepat dan praktis daripada bank, begitu juga syarat dan ketentuannya (lihat pertanyaan sebelumnya).',
  },
];

const faq = (minimumInvestment) => [
  {
    label: 'Umum',
    data: general,
  },
  {
    label: 'Pendanaan',
    data: funding(minimumInvestment),
  },
  {
    label: 'Manajemen Resiko',
    data: riskManagement,
  },
  {
    label: 'Dampak Sosial',
    data: socialImpact,
  },
  {
    label: 'Basis Sya’riah',
    data: shariaBase,
  },
  {
    label: 'Lainnya',
    data: other,
  },
];

export default faq;
