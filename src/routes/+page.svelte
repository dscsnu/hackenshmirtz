<script>
  // You can add any script logic here if needed in the future
</script>

<div class="page-container">
  <!-- Navbar -->
  <nav class="navbar">
    <div class="logo">Hackenshmirtz</div>
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
    filter: brightness(0.4); /* Reduce brightness to 40% */
    z-index: -1;
  }

  /* Navbar styles */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s;
  }

  .nav-links a:hover {
    color: #61dafb;
  }

  /* Content styles */
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 70px); /* Adjust based on navbar height */
  }

  .title {
    font-size: 5rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
</style>
