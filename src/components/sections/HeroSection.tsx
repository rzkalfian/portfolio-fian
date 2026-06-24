export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1>
            Halo, <span>Saya Fian</span>
          </h1>

          <p>
            Saya adalah seorang Frontend Developer yang
            membangun produk digital modern dan
            berfokus pada pengalaman pengguna.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">
              Mari Berdiskusi
            </button>

            <button className="btn-secondary">
              Lihat Profil Saya
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/profile.png"
            alt="Fian"
          />
        </div>
      </div>
    </section>
  );
}