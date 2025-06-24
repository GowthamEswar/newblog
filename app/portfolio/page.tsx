import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of newblog: creative projects and community impact.",
  openGraph: {
    title: "Portfolio | newblog",
    description: "See the creative projects and positive impact from the newblog community."
  }
};

export default function PortfolioPage() {
  return (
    <main className="page-section" aria-label="Portfolio">
      <div className="single-column">
        <nav className="minimal-nav" aria-label="Minimal Navigation">
          <a href="/" className="nav-link">Home</a>
          <a href="/posts" className="nav-link">Posts</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/portfolio" className="nav-link active">Portfolio</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
        <section className="hero-section">
          <div className="hero-header" style={{ fontSize: "2.1em", marginBottom: "0.13em" }}>
            Portfolio
          </div>
          <div className="hero-description" style={{ marginBottom: "1.4em" }}>
            Our creative projects and community impact will be showcased here soon!
          </div>
        </section>
        <footer className="simple-footer">
          Thank you for supporting our creative journey!<br />
          <span style={{ fontSize: "0.94em", color: "var(--primary-dark)" }}>newblog &copy; 2024</span>
        </footer>
      </div>
    </main>
  );
}
