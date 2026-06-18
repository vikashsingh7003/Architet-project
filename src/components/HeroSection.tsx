export function HeroSection() {
  return (
    <section className="hero-section" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true">
        <video
          className="hero-bg-img"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80&auto=format&fit=crop"
        >
          <source
            src="https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80&auto=format&fit=crop"
            alt=""
            aria-hidden="true"
          />
        </video>
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content" />
    </section>
  );
}
