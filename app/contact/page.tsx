import type { Metadata } from "next";
import ContactForm from "@components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact newblog: send a message or donate to support our mission.",
  openGraph: {
    title: "Contact | newblog",
    description: "Questions? Want to support our mission? Contact us or donate!"
  }
};

export default function ContactPage() {
  return (
    <main className="page-section" aria-label="Contact">
      <div className="single-column">
        <nav className="minimal-nav" aria-label="Minimal Navigation">
          <a href="/" className="nav-link">Home</a>
          <a href="/posts" className="nav-link">Posts</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link active">Contact</a>
        </nav>
        <section className="hero-section" style={{ marginBottom: "1.6em" }}>
          <div className="hero-header" style={{ fontSize: "2em", marginBottom: "0.1em" }}>
            Contact &amp; Donate
          </div>
          <div className="hero-description">
            Questions? Want to support our mission? <br />
            Send us a message or donate below!
          </div>
        </section>
        <ContactForm />
        <footer className="simple-footer">
          Thank you for supporting our mission!<br />
          <span style={{ fontSize: "0.94em" }}>newblog &copy; 2024</span>
        </footer>
      </div>
    </main>
  );
}
