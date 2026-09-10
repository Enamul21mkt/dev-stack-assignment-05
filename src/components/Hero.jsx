function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="eyebrow">DEVELOPER TOOLKIT</span>
          <h1>
            Build Your Ideal
            <span>Development Stack</span>
          </h1>
          <p>
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="hero-actions">
            <a className="gradient-button" href="#technologies">
              Explore Technologies
            </a>
            <a className="outline-button" href="#about">Learn More</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />
          <img
            src="/assets/hero-stack.png"
            alt="Futuristic development stack illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;