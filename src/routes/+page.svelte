<script>
  // You can add any script logic here if needed in the future
</script>

<div class="page-container">
  <!-- Navbar -->
  <nav class="navbar">
    <div class="nav-links">
      <a href="/leaderboard">Leaderboard</a>
      <a href="/resources">Resources</a>
    </div>
  </nav>

  <!-- Main content -->
  <div class="content">
    <h1 class="title">hackenshmirtz</h1>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

:global(html) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:global(*, *::before, *::after) {
    box-sizing: inherit;
}

  .page-container {
    position: relative;
    min-height: 100vh;
    width: 100%;
    margin: 0;
  }

  /* Background image with opacity */
  .page-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/phineas-ferb-cast.jpg');
    background-size: cover;
    background-position: center;
    filter: brightness(0.4) blur(2px); /* Reduce brightness to 40% */
    z-index: -1;
  }

  /* Navbar styles */
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    width: 100%;
  }

  .nav-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s;
    padding: 0.5rem 1rem;
    border: 2px solid white;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .nav-links a:hover {
    color: #61dafb;
    border-color: #61dafb;
    background-color: rgba(0, 0, 0, 0.5);
  }

  /* Content styles */
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 70px); /* Adjust based on navbar height */
    padding: 1rem;
  }

  .title {
    font-size: clamp(2.5rem, 10vw, 5rem);
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: center;
    word-break: break-word;
  }

  /* Media queries for responsive design */
  @media (max-width: 768px) {
    .navbar {
      padding: 0.75rem 0.5rem;
    }

    .nav-links {
      gap: 0.75rem;
    }

    .nav-links a {
      font-size: 0.9rem;
      padding: 0.4rem 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .navbar {
      padding: 0.5rem 0.25rem;
    }

    .nav-links {
      gap: 0.5rem;
    }

    .content {
      height: calc(100vh - 60px);
    }
  }
</style>
