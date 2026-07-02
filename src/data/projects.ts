import cms20Mefree from "../assets/images/projects/CMS-20Mefree.png";
import cmsAppsBioris from "../assets/images/projects/CMS-Apps-Bioris.png";
import cmsOrbitDigilib from "../assets/images/projects/CMS-Orbit-Digilib.png";
import cmsWebMasjidIstiqlal from "../assets/images/projects/CMS-Web-Masjid-Istiqlal.png";
import dataCenterApi from "../assets/images/projects/Data-Center-Api.png";
import landing20Mefree from "../assets/images/projects/Landing-20Mefree.png";
import orbitDigilibApps from "../assets/images/projects/Orbit-Digilib-Apps.png";
import prototypeMyQalbu from "../assets/images/projects/Prototype-My-Qalbu.png";
import redesignWebsitePII from "../assets/images/projects/Redesign-Website-PII.png";
import stevorExpressApps from "../assets/images/projects/Stevor-Express-Apps.png";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  description: string;
  about: string;
  tags: string[];
  link: string;
  figmaLink?: string;
  repoLink?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "cms-20mefree",
    title: "CMS 20Mefree",
    subtitle: "CMS 20Mefree memudahkan pengelolaan produk, konten, pesanan, pengguna, laporan, promosi, serta informasi website secara terpusat dan efisien.",
    client: "Ethos Indonesia (20Mefree)",
    description:
      "Sistem manajemen konten untuk platform 20Mefree dengan fitur pengelolaan artikel, media, dan pengguna.",
    about:
      "CMS 20Mefree merupakan sistem manajemen konten yang dirancang untuk mempermudah pengelolaan seluruh informasi pada website 20Mefree. Administrator dapat mengelola produk, kategori, banner, hingga konten promosi melalui satu dashboard yang terintegrasi. Antarmuka yang sederhana membuat proses pengelolaan data menjadi lebih cepat dan efisien. Sistem juga mendukung pembaruan informasi secara real-time tanpa memerlukan perubahan langsung pada kode aplikasi.\n\nMelalui CMS ini, admin dapat menambahkan, mengubah, maupun menghapus data produk beserta informasi pendukung seperti harga, deskripsi, gambar, dan stok. Pengelolaan artikel, FAQ, testimoni, serta berbagai konten pemasaran juga dapat dilakukan dengan mudah melalui fitur yang tersedia. Hak akses pengguna dapat diatur sesuai peran sehingga keamanan dan pengelolaan sistem tetap terjaga. Seluruh data tersimpan secara terpusat untuk memastikan konsistensi informasi pada website.\n\nCMS 20Mefree dilengkapi dengan fitur monitoring dan pelaporan yang membantu administrator memantau aktivitas pengelolaan website secara lebih efektif. Sistem dirancang agar fleksibel sehingga mudah dikembangkan ketika terdapat kebutuhan fitur atau modul baru di masa mendatang. Desain yang responsif memungkinkan pengelolaan website dilakukan melalui berbagai perangkat, baik desktop maupun tablet. Dengan CMS 20Mefree, proses administrasi website menjadi lebih praktis, terstruktur, aman, dan mendukung operasional bisnis secara optimal.",
    tags: ["Vue Js", "TypeScript", "Tailwind CSS"],
    link: "#",
    image: cms20Mefree,
  },
  {
    id: "cms-apps-bioris",
    title: "CMS & Apps Bioris",
    subtitle: "CMS dan POS Bioris mengelola transaksi penjualan, stok, laporan, cabang, pengguna, serta monitoring operasional secara terpusat dan real-time.",
    client: "Bioris",
    description:
      "Panel administrasi untuk aplikasi mobile Bioris dengan manajemen data pengguna dan konten dinamis.",
    about:
      "POS Bioris merupakan aplikasi kasir yang digunakan oleh setiap cabang perusahaan untuk mendukung proses penjualan produk secara cepat dan akurat. Sistem ini memudahkan kasir dalam melakukan transaksi, mengelola data pelanggan, serta mencatat seluruh aktivitas penjualan secara otomatis. Selain itu, aplikasi juga membantu pengelolaan stok produk sehingga ketersediaan barang dapat dipantau dengan lebih baik. Antarmuka yang sederhana membuat proses transaksi menjadi lebih efisien dan mudah digunakan oleh seluruh pengguna.\n\nCMS Bioris berfungsi sebagai pusat pengelolaan dan monitoring seluruh aktivitas POS yang berjalan di setiap cabang perusahaan. Administrator dapat memantau transaksi penjualan, stok produk, data pengguna, serta performa masing-masing cabang melalui satu dashboard yang terintegrasi. Seluruh data dari aplikasi POS dikirim secara real-time sehingga informasi yang ditampilkan selalu diperbarui. Sistem juga menyediakan laporan yang membantu manajemen dalam melakukan evaluasi dan pengambilan keputusan bisnis.\n\nIntegrasi antara CMS dan POS Bioris menciptakan ekosistem penjualan yang terpusat, aman, dan mudah dikelola. Hak akses pengguna diatur berdasarkan peran sehingga setiap aktivitas operasional dapat dikontrol dengan baik. Arsitektur sistem yang fleksibel memungkinkan penambahan cabang maupun fitur baru tanpa mengganggu operasional yang sudah berjalan. Dengan solusi ini, perusahaan dapat meningkatkan efisiensi operasional, mempercepat proses bisnis, serta memperoleh data penjualan yang akurat untuk mendukung pertumbuhan usaha.",
    tags: ["React", "REST API", "Tailwind CSS"],
    link: "#",
    image: cmsAppsBioris,
  },
  {
    id: "cms-orbit-digilib",
    title: "CMS Orbit Digilib",
    subtitle: "Sistem manajemen terpusat perpustakaan digital untuk mengelola aplikasi mobile DIGILIB, mengintegrasikan peran penerbit dan distribusi buku secara profesional dan efisien.",
    client: "Orbit Digilib",
    description:
      "Sistem manajemen konten untuk perpustakaan digital Orbit dengan katalog buku dan manajemen anggota.",
    about:
      "CMS Digital Library hadir sebagai solusi manajemen konten terpusat yang dirancang khusus untuk mengelola seluruh ekosistem aplikasi mobile perpustakaan digital secara efisien. Platform ini berfungsi sebagai tulang punggung operasional yang memungkinkan pengelola perpustakaan mengatur distribusi koleksi buku digital secara sistematis dan real-time. Dengan integrasi yang kuat, CMS ini memastikan bahwa setiap konten yang tersaji di aplikasi mobile selalu mutakhir dan selaras dengan kebijakan pengelolaan perpustakaan modern yang berbasis pada kemudahan akses.\n\nSistem ini menerapkan manajemen peran yang kompleks untuk menjaga integritas ekosistem literasi digital, mulai dari pihak penerbit hingga pustakawan. Penerbit memiliki ruang khusus untuk mengelola hak cipta dan mengunggah koleksi terbaru, sementara administrator perpustakaan dapat mengontrol kurasi buku yang akan ditampilkan kepada pengguna. Struktur ini menciptakan alur kerja yang transparan dan profesional, di mana setiap aset digital dapat dilacak keberadaannya serta dipastikan kualitasnya sebelum dapat dinikmati oleh pembaca melalui perangkat seluler mereka.\n\nMelalui arsitektur yang fleksibel, CMS ini mampu menangani ribuan judul buku dengan berbagai format digital tanpa hambatan teknis yang berarti. Fokus utama pengembangan platform ini adalah pada optimalisasi pengolahan data buku, mulai dari metadata, kategori, hingga statistik peminjaman yang akurat. Dengan dukungan manajemen backend yang solid, aplikasi mobile Digital Library dapat menyajikan pengalaman membaca yang mulus, responsif, dan terorganisir dengan baik, menciptakan standar baru dalam pengelolaan perpustakaan masa kini.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
    image: cmsOrbitDigilib,
  },
  {
    id: "cms-web-masjid-istiqlal",
    title: "CMS Website Masjid Istiqlal",
    subtitle: "Pusat kendali digital Masjid Istiqlal untuk manajemen konten, berita, agenda, dan transparansi amal guna memperkuat profil lembaga serta pelayanan umat secara profesional.",
    client: "Masjid Istiqlal",
    description:
      "CMS untuk website resmi Masjid Istiqlal dengan pengelolaan berita, kegiatan, dan informasi fasilitas.",
    about:
      "CMS Masjid Istiqlal dirancang sebagai pusat kendali digital yang komprehensif untuk mengelola seluruh ekosistem informasi dan operasional Masjid Nasional secara terpadu. Platform ini berfungsi sebagai tulang punggung utama dalam pemutakhiran konten pada website company profile, memastikan profil resmi masjid tersaji dengan standar profesional yang tinggi. Dengan sistem manajemen yang terpusat, pengurus dapat dengan mudah mengatur narasi sejarah, visi-misi, hingga dokumentasi fasilitas masjid agar selalu relevan bagi pengunjung mancanegara maupun lokal.\n\nSistem ini memiliki fitur khusus untuk pengelolaan dinamika kegiatan harian, mulai dari publikasi berita terkini hingga penjadwalan agenda masjid yang sangat padat. Pengguna dapat menginput rincian kegiatan ibadah, kajian rutin, hingga acara besar kenegaraan secara sistematis agar dapat diakses publik dengan cepat. Selain itu, terdapat modul khusus untuk manajemen kepengurusan yang memungkinkan pemetaan struktur organisasi dan tugas personil secara transparan, menciptakan alur birokrasi internal yang lebih rapi dan terdokumentasi dengan baik.\n\nTransparansi dan kemudahan umat menjadi prioritas melalui integrasi fitur manajemen amal dan donasi di dalam CMS ini. Pengelola dapat memantau arus masuk dana sosial, mengelola kampanye kemanusiaan, serta menyajikan laporan pertanggungjawaban publik secara akurat melalui dashboard yang intuitif. Melalui transformasi digital ini, Masjid Istiqlal tidak hanya sekadar tempat ibadah, tetapi juga menjadi pusat informasi Islam yang modern, akuntabel, dan mudah dijangkau oleh seluruh masyarakat melalui teknologi yang mumpuni.",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    link: "#",
    image: cmsWebMasjidIstiqlal,
  },
  {
    id: "data-center-api",
    title: "Data Center API",
    subtitle: "Wadah data - data penting platform terpusat yang menyediakan endpoint API perusahaan, mengelola data, autentikasi, integrasi aplikasi, monitoring, keamanan, dokumentasi, serta akses real-time terpercaya.",
    client: "Freelance Project",
    description:
      "Layanan API terpusat untuk pengelolaan, transformasi, dan distribusi data antar sistem.",
    about:
      "Web Data API merupakan platform terpusat yang berfungsi sebagai penyedia data bagi berbagai aplikasi di lingkungan perusahaan. Seluruh endpoint API dikelola dalam satu sistem sehingga pertukaran data menjadi lebih terstruktur dan mudah dipelihara. Dengan konsep single source of truth, setiap aplikasi memperoleh informasi yang konsisten dan selalu diperbarui. Pendekatan ini membantu meningkatkan efisiensi pengembangan sekaligus mengurangi duplikasi data antar sistem.\n\nPlatform ini menyediakan manajemen API Credential, autentikasi, dan pengaturan hak akses untuk memastikan keamanan setiap proses komunikasi data. Setiap aplikasi atau layanan yang terhubung memiliki identitas akses tersendiri sehingga aktivitas penggunaan API dapat dikontrol dengan lebih baik. Dokumentasi endpoint yang lengkap memudahkan developer dalam melakukan integrasi maupun pengembangan fitur baru. Seluruh layanan dirancang agar dapat diakses secara cepat, stabil, dan aman melalui koneksi HTTPS.\n\nSelain berfungsi sebagai penyedia data, Web Data API juga dilengkapi dengan fitur monitoring untuk membantu memantau performa dan ketersediaan layanan secara real-time. Arsitektur sistem yang fleksibel memungkinkan penambahan endpoint maupun integrasi dengan aplikasi baru tanpa mengganggu layanan yang sudah berjalan. Platform ini mendukung berbagai jenis aplikasi, mulai dari web, mobile, desktop, hingga layanan pihak ketiga yang membutuhkan akses data perusahaan. Dengan solusi yang terpusat, perusahaan dapat membangun ekosistem aplikasi yang lebih terintegrasi, aman, dan mudah dikembangkan sesuai kebutuhan bisnis.",
    tags: ["Node.js", "Express", "REST API", "JWT"],
    link: "#",
    image: dataCenterApi,
  },
  {
    id: "landing-20mefree",
    title: "Landing Page 20Mefree",
    subtitle: "Landing page 20Mefree memperkenalkan produk skincare premium dengan informasi lengkap, katalog, manfaat, testimoni, FAQ, serta kemudahan pemesanan online.",
    client: "20Mefree",
    description:
      "Landing page modern untuk platform 20Mefree dengan animasi menarik dan alur konversi yang dioptimalkan.",
    about:
      "Landing page 20Mefree dirancang sebagai media digital untuk memperkenalkan seluruh rangkaian produk skincare kepada calon pelanggan. Halaman ini menyajikan informasi produk secara lengkap, mulai dari manfaat, kandungan, hingga cara penggunaan yang tepat. Tampilan yang modern dan responsif memberikan pengalaman pengguna yang nyaman baik melalui perangkat desktop maupun mobile. Dengan navigasi yang sederhana, pengunjung dapat menemukan informasi yang dibutuhkan secara cepat dan mudah.\n\nSelain menampilkan katalog produk, website juga menyediakan berbagai informasi pendukung seperti testimoni pelanggan, pertanyaan yang sering diajukan (FAQ), serta promo yang sedang berlangsung. Setiap produk dilengkapi dengan deskripsi yang jelas sehingga membantu calon pembeli memahami keunggulan dan manfaatnya. Desain visual yang menarik memperkuat identitas merek sekaligus meningkatkan kepercayaan pengunjung terhadap produk 20Mefree. Seluruh informasi disusun secara terstruktur agar mudah dipahami oleh berbagai kalangan pengguna.\n\nLanding page 20Mefree juga berfungsi sebagai sarana pemasaran digital yang menghubungkan pelanggan dengan berbagai kanal pembelian secara praktis. Website dioptimalkan untuk memberikan performa yang cepat, responsif, dan mudah diakses dari berbagai perangkat maupun browser. Integrasi dengan media sosial dan layanan komunikasi memudahkan pelanggan memperoleh informasi terbaru serta melakukan konsultasi sebelum membeli produk. Dengan konsep yang informatif, interaktif, dan profesional, landing page ini mampu meningkatkan pengalaman pengguna sekaligus mendukung pertumbuhan penjualan produk 20Mefree.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    link: "#",
    image: landing20Mefree,
  },
  {
    id: "orbit-digilib-apps",
    title: "Orbit Digilib Apps",
    subtitle: "Platform literasi digital sekolah dan umum dengan sistem poin untuk akses buku, memudahkan distribusi ilmu pengetahuan serta meningkatkan minat baca secara modern.",
    client: "Orbit Digilib",
    description:
      "Aplikasi mobile untuk mengakses koleksi perpustakaan digital Orbit dengan fitur baca online dan unduh.",
    about:
      "Digital Library hadir sebagai platform literasi modern yang dirancang khusus untuk memenuhi kebutuhan perpustakaan di lingkungan sekolah maupun masyarakat umum secara fleksibel. Aplikasi ini membawa koleksi buku fisik ke dalam genggaman, memungkinkan siswa dan pembaca publik mengakses ribuan literatur berkualitas kapan saja melalui perangkat seluler. Dengan antarmuka yang ramah pengguna, perpustakaan kini tidak lagi terbatas oleh sekat ruang dan waktu, menciptakan ekosistem belajar yang lebih inklusif dan adaptif terhadap perkembangan teknologi digital saat ini.\n\nKeunggulan utama aplikasi ini terletak pada sistem koin atau poin yang inovatif untuk mengatur akses pembacaan buku secara adil dan terukur. Pengguna dapat mengumpulkan poin melalui berbagai aktivitas literasi atau melakukan pengisian koin untuk meminjam buku-buku premium yang disediakan oleh perpustakaan. Mekanisme ini tidak hanya memberikan pengalaman membaca yang menyenangkan seperti bermain game, tetapi juga membantu pengelola perpustakaan dalam memantau sirkulasi buku serta tingkat antusiasme pembaca terhadap koleksi tertentu secara lebih akurat.\n\nSelain sebagai media baca, aplikasi ini berfungsi sebagai jembatan interaksi antara pembaca dengan dunia literasi yang lebih luas melalui fitur rekomendasi cerdas. Siswa dapat dengan mudah menemukan referensi tugas sekolah, sementara pengguna umum dapat mengeksplorasi genre favorit mereka dengan sistem navigasi yang intuitif. Melalui integrasi teknologi ini, perpustakaan sekolah dan umum bertransformasi menjadi pusat pengetahuan digital yang dinamis, mendorong minat baca masyarakat sekaligus mempermudah distribusi ilmu pengetahuan secara masif dan efisien. Mengenai design pada aplikasi Orbit Digilib ini juga digunakan pada aplikasi Istiqlal Digilib.",
    tags: ["React Native", "TypeScript", "REST API"],
    link: "#",
    image: orbitDigilibApps,
  },
  {
    id: "prototype-my-qalbu",
    title: "Prototype My Qalbu",
    subtitle: "My Qolbu adalah aplikasi Muslim penyedia konten Islami, Al-Qur'an, kajian, sedekah, dan pengingat sholat dengan fitur monitoring ibadah harian yang lengkap dan interaktif.",
    client: "Personal Project",
    description:
      "Prototipe aplikasi mobile untuk ibadah dan refleksi spiritual harian dengan fitur pengingat dan jurnal.",
    about:
      "My Qolbu hadir sebagai platform digital Islami komprehensif yang dirancang untuk menemani perjalanan spiritual umat Muslim di era modern. Aplikasi ini berfungsi sebagai pusat konten Islami yang edukatif, di mana pengguna dapat mengakses berbagai literatur dakwah serta berpartisipasi langsung dalam aksi sosial melalui fitur campaign dan sedekah online. Dengan integrasi sistem donasi yang transparan, My Qolbu memudahkan pengguna untuk berbagi kebaikan dan memperluas kebermanfaatan kepada sesama hanya dalam satu genggaman, mempererat ukhuwah melalui kontribusi nyata bagi umat.\n\nUntuk mendukung pendalaman ilmu agama, My Qolbu menyediakan akses eksklusif ke berbagai kajian melalui platform pengajian live yang interaktif maupun informasi kegiatan kajian offline. Selain itu, aplikasi ini dilengkapi dengan fitur esensial harian seperti Al-Qur'an digital yang praktis serta pengingat waktu sholat yang akurat berdasarkan lokasi pengguna. Kombinasi fitur ini memastikan bahwa kebutuhan akan bimbingan spiritual dan informasi ibadah wajib dapat terpenuhi kapan saja dan di mana saja, menjadikan belajar agama terasa lebih dekat dan mudah dijangkau.\n\nLebih dari sekadar aplikasi informasi, My Qolbu berperan sebagai asisten pribadi dalam meningkatkan disiplin ibadah melalui fitur monitoring ibadah yang mendalam. Pengguna dapat membiasakan diri menjaga sholat lima waktu, mencatat aktivitas zakat, hingga memantau perkembangan tilawah Al-Qur'an secara rutin. Melalui sistem pelacakan mandiri ini, pengguna diajak untuk lebih konsisten dalam beribadah dan melakukan evaluasi spiritual harian, sehingga proses transformasi menjadi pribadi yang lebih bertaqwa dapat berjalan lebih terukur dan bermakna.",
    tags: ["Figma", "UI/UX", "Design Thinking"],
    link: "#",
    image: prototypeMyQalbu,
  },
  {
    id: "redesign-website-pii",
    title: "Redesign Website PII",
    subtitle: "Wadah digital modern Persatuan Insinyur Indonesia untuk meningkatkan kualitas layanan profesi, memperkuat konektivitas anggota, serta mempermudah akses informasi penting.",
    client: "Persatuan Insinyur Indonesia",
    description:
      "Redesain website PII dengan tampilan modern, navigasi yang lebih baik, dan pengalaman pengguna yang ditingkatkan.",
    about:
      "Persatuan Insinyur Indonesia (PII) merupakan organisasi wadah profesi insinyur di Indonesia yang berperan penting dalam meningkatkan kompetensi dan profesionalisme para anggotanya. Untuk menjawab tantangan digital saat ini, PII melakukan langkah strategis dengan melakukan redesign total pada platform web resminya. Transisi ini bertujuan untuk bermigrasi dari sistem berbasis WordPress yang konvensional menuju arsitektur website yang lebih modern. Dengan mengimplementasikan teknologi berbasis JavaScript, platform baru ini dirancang agar jauh lebih ringan, memiliki waktu pemuatan yang sangat cepat, serta memberikan fleksibilitas tinggi dalam pengembangan fitur-fitur interaktif di masa depan.\n\nPengembangan aplikasi ini berfokus pada integrasi data yang lancar dan pengalaman pengguna yang lebih dinamis melalui penggunaan API. Dengan beralih dari struktur monolitik ke pendekatan yang lebih modular, sistem dapat menangani lalu lintas data yang besar tanpa membebani kinerja browser. Hal ini sangat krusial bagi organisasi sebesar PII yang memerlukan sinkronisasi data real-time, mulai dari verifikasi keanggotaan hingga pembaruan sertifikasi. Penggunaan ekosistem JavaScript memungkinkan antarmuka yang lebih responsif, memastikan setiap elemen visual dan fungsional bekerja secara harmonis demi mendukung kebutuhan teknis para insinyur di seluruh Indonesia.\n\nSelain aspek teknis, transformasi ini juga mengedepankan sisi estetika dan kemudahan akses melalui desain antarmuka yang intuitif. Navigasi telah disederhanakan agar informasi mengenai regulasi, kegiatan profesi, dan layanan anggota dapat ditemukan dengan sekali klik. Visual yang modern digabungkan dengan performa yang gesit menciptakan identitas digital baru yang mencerminkan profesionalisme PII sebagai organisasi yang adaptif terhadap perkembangan teknologi. Melalui aplikasi web yang lebih segar dan efisien ini, PII berkomitmen untuk memberikan layanan prima yang dapat diandalkan oleh para profesional teknik dalam menjalankan peran mereka bagi bangsa.",
    tags: ["React", "Tailwind CSS", "UI/UX"],
    link: "#",
    image: redesignWebsitePII,
  },
  {
    id: "stevor-express-apps",
    title: "Stevor Express Apps",
    subtitle: "Layanan ojek online Surabaya bertarif flat dengan fitur pengantaran barang, makanan, serta manajemen kasir toko untuk memberikan solusi mobilitas dan ekonomi digital terjangkau.",
    client: "Stevor Express",
    description:
      "Aplikasi mobile untuk layanan ekspedisi Stevor Express dengan fitur pelacakan paket real-time dan pemesanan pickup.",
    about:
      "Stevor Express hadir sebagai solusi transportasi daring lokal yang dirancang khusus untuk melayani kebutuhan mobilitas masyarakat di kawasan Surabaya secara lebih efisien. Aplikasi ini mengintegrasikan dua platform utama, yaitu aplikasi khusus driver dan aplikasi untuk penumpang, dengan model bisnis yang menawarkan harga flat yang lebih terjangkau dibandingkan kompetitor lainnya. Dengan fokus pada keterjangkauan biaya, Stevor Express berkomitmen menjadi mitra perjalanan andalan bagi warga Surabaya yang menginginkan transparansi tarif tanpa fluktuasi harga yang memberatkan di jam sibuk.\n\nSelain layanan transportasi penumpang atau ojek online, Stevor Express memperluas jangkauan layanannya melalui fitur pengantaran barang dan pemesanan makanan yang terintegrasi. Pengguna dapat dengan mudah mengirimkan paket atau memesan kuliner favorit dari berbagai gerai lokal di Surabaya dengan sistem distribusi yang cepat dan aman. Keberagaman layanan ini menjadikan Stevor Express bukan sekadar aplikasi transportasi, melainkan ekosistem logistik harian yang membantu memperlancar arus barang dan jasa di tingkat kota melalui teknologi yang responsif.\n\nInovasi utama yang membedakan Stevor Express adalah adanya fitur manajemen kasir atau pengelolaan toko bagi para mitra pengusaha lokal. Fitur ini memungkinkan pemilik bisnis untuk mengatur transaksi, memantau stok, dan mengintegrasikan penjualan mereka langsung dengan sistem pengantaran aplikasi. Dengan menggabungkan layanan mobilitas, logistik, dan sistem poin penjualan (POS), Stevor Express bertransformasi menjadi platform pemberdayaan ekonomi digital yang komprehensif bagi seluruh pelaku usaha dan pengguna di wilayah Surabaya. Aplikasi ini dibuat 2 aplikasi untuk Aplikasi Stevor Express Driver dan Aplikasi Stevor Express Penumpang.",
    tags: ["React Native", "TypeScript", "REST API", "Push Notification"],
    link: "#",
    image: stevorExpressApps,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

// ─── Featured projects (FeaturedProjectsSection di HomePage) ─────────────────

export type FeaturedProject = {
  title: string;
  description: string;
  tags: string[];
  gradient?: string;
  featured?: boolean;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "E-Commerce Dashboard",
    description:
      "Dashboard manajemen toko online dengan fitur analitik real-time, manajemen produk, laporan penjualan, dan sistem notifikasi. Dibangun dengan React dan TypeScript.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    gradient: "from-[#014AEB]/30 to-[#1CC8B7]/10",
    featured: true,
  },
  {
    title: "Landing Page SaaS",
    description:
      "Halaman pemasaran modern untuk produk SaaS dengan animasi scroll dan section pricing interaktif.",
    tags: ["Next.js", "Framer Motion"],
    gradient: "from-purple-500/20 to-pink-500/10",
  },
  {
    title: "Aplikasi Manajemen Tugas",
    description:
      "Aplikasi produktivitas harian dengan fitur drag & drop dan notifikasi real-time.",
    tags: ["React", "Zustand", "DnD Kit"],
    gradient: "from-emerald-500/20 to-teal-500/10",
  },
];
