import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "About newblog: our mission, vision, and playful approach to positive change.",
  openGraph: {
    title: "About | newblog",
    description: "Learn about newblog's mission to inspire positive change through stories, action, and generosity."
  }
};

export default function AboutPage() {
  return (
    <main className="page-section" aria-label="About">
      <div className="single-column">
        <nav className="minimal-nav" aria-label="Minimal Navigation">
          <a href="/" className="nav-link">Home</a>
          <a href="/posts" className="nav-link">Posts</a>
          <a href="/about" className="nav-link active">About</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
        <section className="content-with-image">
          <div className="about-img-wrap">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="Playful team illustration"
              className="about-img"
              width={220}
              height={185}
              priority
            />
          </div>
          <div className="about-content">
            <div className="about-title">About newblog</div>
            <div className="about-desc">
              newblog is a creative, community-powered blog dedicated to sharing hope, kindness, and creative ideas for a better world.<br /><br />
              Our playful approach makes learning, giving, and connecting fun. We believe every voice and every donation matters.<br /><br />
              <strong>Our mission:</strong> Inspire positive change through stories, action, and generosity.<br /><br />
              <span style={{ color: "var(--primary-dark)" }}>
                Join us — read, share, or support!
              </span>
            </div>
          </div>
        </section>
        <footer className="simple-footer">
          Made with <span className="footer-heart" aria-label="love">&#10084;</span> by the newblog team.
        </footer>
      </div>
    </main>
  );
}
