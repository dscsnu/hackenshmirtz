<script>
  // You can add any script logic here if needed in the future
</script>

<div class="page-container">
  <!-- Navbar -->
  <nav class="navbar">
    <div class="nav-links">
      <a href="/">Home</a>
      <a href="/leaderboard">Leaderboard</a>
    </div>
  </nav>

  <!-- Main content -->
  <div class="content">
    <div class="coming-soon-container">
      <h1 class="title">Resources</h1>
      <div class="coming-soon">
        <h2>Coming Soon</h2>
        <p>We're working on gathering the best resources for you.</p>
        <p>Check back later for updates!</p>
      </div>
    </div>
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

  .coming-soon-container {
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 2rem;
    border-radius: 10px;
    max-width: 600px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #61dafb;
  }

  .coming-soon {
    margin-top: 1.5rem;
  }

  .coming-soon h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #61dafb;
  }

  .coming-soon p {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
</style>
