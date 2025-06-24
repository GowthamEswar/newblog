import Image from "next/image";

export default function HomePage() {
  return (
    <main className="page-section" aria-label="Home">
      <section className="hero-centered">
        <div className="hero-header" style={{ zIndex: 1 }}>
          Welcome to <span style={{ color: "var(--primary)" }}>newblog</span>
        </div>
        <section className="hero-section" style={{ zIndex: 1 }}>
          <div className="hero-description">
            A playful, creative blog for making a difference. <br />
            <strong>We share stories, ideas, and inspiration—together we can help!</strong>
            <br /><br />
            <span style={{ color: "var(--primary-dark)", fontSize: "1em" }}>
              Support our mission by donating below.
            </span>
          </div>
          <a href="/contact">
            <button className="hero-donate-btn" type="button">
              Donate Now
            </button>
          </a>
        </section>
        <footer className="simple-footer" style={{ marginTop: "3.2em" }}>
          newblog &copy; 2024 &mdash; Made with
          <span className="footer-heart" aria-label="love">&#10084;</span> for positive change.
        </footer>
      </section>
    </main>
  );
}
