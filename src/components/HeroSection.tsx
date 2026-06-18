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
        >
          <source
            src="https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content" />
    </section>
  );
}
