export const metadata = {
  title: "Posts",
  description: "Latest posts from newblog: creative stories, tips, and causes.",
  openGraph: {
    title: "Posts | newblog",
    description: "Dive into our creative stories, tips, and causes. Stay inspired!"
  }
};

export default function PostsPage() {
  return (
    <main className="page-section" aria-label="Posts">
      <div className="single-column">
        <nav className="minimal-nav" aria-label="Minimal Navigation">
          <a href="/" className="nav-link">Home</a>
          <a href="/posts" className="nav-link active">Posts</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
        <section className="hero-section">
          <div className="hero-header" style={{ fontSize: "2.1em", marginBottom: "0.13em" }}>
            Latest Posts
          </div>
          <div className="hero-description" style={{ marginBottom: "1.4em" }}>
            Dive into our creative stories, tips, and causes. Stay inspired!
          </div>
        </section>
        <ul className="posts-list">
          <li className="post-card">
            <div className="post-title">How Small Acts Lead to Big Change</div>
            <div className="post-meta">April 2024 · by Alex</div>
            <div className="post-excerpt">
              Discover how everyday actions can create a ripple effect in your community and beyond.
            </div>
            <a href="#" className="read-more" tabIndex={-1}>Read more</a>
          </li>
          <li className="post-card">
            <div className="post-title">Our Journey: Starting newblog</div>
            <div className="post-meta">March 2024 · by Jamie</div>
            <div className="post-excerpt">
              A behind-the-scenes look at why we started newblog and what drives our mission.
            </div>
            <a href="#" className="read-more" tabIndex={-1}>Read more</a>
          </li>
          <li className="post-card">
            <div className="post-title">5 Ways to Support Local Causes</div>
            <div className="post-meta">February 2024 · by Taylor</div>
            <div className="post-excerpt">
              Practical ways you can make a difference for causes you care about.
            </div>
            <a href="#" className="read-more" tabIndex={-1}>Read more</a>
          </li>
        </ul>
        <footer className="simple-footer">
          Thank you for reading — join us in making a difference!<br />
          <span style={{ fontSize: "0.94em", color: "var(--primary-dark)" }}>newblog &copy; 2024</span>
        </footer>
      </div>
    </main>
  );
}
