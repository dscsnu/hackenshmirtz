<script>
    const { data } = $props();
    let leaderboard = data?.leaderboard || [];
    console.log(leaderboard);

    const podium = leaderboard.slice(0, 3);
    const remaining = leaderboard.slice(3);
</script>

<!-- Navbar -->


<div class="container">

    <nav class="navbar">
  <div class="nav-links">
    <a href="/">Home</a>
    <a href="/resources">Resources</a>
  </div>
</nav>

    <div class="header">
        <h1 class="title">🔬 Hackenshmirtz Leaderboard 🔬</h1>
        <p class="subtitle">Top Secret Evil Invention Rankings</p>
        <div class="doofenshmirtz-quote">"Behold, my latest -inator... the LEADERBOARD-INATOR!"</div>
    </div>

    {#if leaderboard.length > 0}
        <!-- Podium Section -->
        {#if podium.length > 0}
            <div class="podium-section">
                <div class="podium-container">
                    <div class="podium">
                        <!-- 2nd Place (Left) -->
                        {#if podium[1]}
                            <div class="podium-position position-2">
                                <div class="rank-badge">2nd</div>
                                <div class="character-icon">🦫</div>
                                <h3 class="team-name">{podium[1].team_name}</h3>
                                <p class="team-leader">Agent</p>
                                {#if podium[1].team_members?.length}
                                    <ul class="team-members">
                                        {#each podium[1].team_members as member}
                                            <li>🧪 <span class="member-name">{member}</span></li>
                                        {/each}
                                    </ul>
                                {/if}
                                <div class="score-display">{podium[1].score} pts</div>
                            </div>
                        {/if}

                        <!-- 1st Place (Center) -->
                        {#if podium[0]}
                            <div class="podium-position position-1">
                                <div class="rank-badge winner">1st</div>
                                <div class="character-icon winner">🥽</div>
                                <h3 class="team-name">{podium[0].team_name}</h3>
                                <p class="team-leader">Dr.</p>
                                {#if podium[0].team_members?.length}
                                    <ul class="team-members">
                                        {#each podium[0].team_members as member}
                                            <li>🧪 <span class="member-name">{member}</span></li>
                                        {/each}
                                    </ul>
                                {/if}
                                <div class="score-display winner">{podium[0].score} pts</div>
                                <div class="winner-effect">EVIL GENIUS!</div>
                            </div>
                        {/if}

                        <!-- 3rd Place (Right) -->
                        {#if podium[2]}
                            <div class="podium-position position-3">
                                <div class="rank-badge">3rd</div>
                                <div class="character-icon">🐧</div>
                                <h3 class="team-name">{podium[2].team_name}</h3>
                                <p class="team-leader">Agent</p>
                                {#if podium[2].team_members?.length}
                                    <ul class="team-members">
                                        {#each podium[2].team_members as member}
                                            <li>🧪 <span class="member-name">{member}</span></li>
                                        {/each}
                                    </ul>
                                {/if}
                                <div class="score-display">{podium[2].score} pts</div>
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        {/if}

        <!-- Regular Rankings -->
        {#if remaining.length > 0}
            <div class="rankings">
                <h2 class="rankings-title">🔧 All Evil Inventors 🔧</h2>
                <div class="team-list">
                    {#each remaining as team, index}
                        <div class="team-card">
                            <div class="team-rank">#{index + 4}</div>
                            <div class="character-mini">🤖</div>
                            <div class="team-info">
                                <h3 class="team-name">{team.team_name}</h3>
                                {#if team.team_members?.length}
                                    <ul class="team-members">
                                        {#each team.team_members as member}
                                            <li>🧪 <span class="member-name">{member}</span></li>
                                        {/each}
                                    </ul>
                                {/if}
                            </div>
                            <div class="team-score">
                                <span class="score-value">{team.score}</span>
                                <span class="score-label">evil points</span>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
    {:else}
        <div class="empty-state">
            <div class="empty-icon">🚫</div>
            <h2>No Evil Schemes Yet!</h2>
            <p>The -inators are still being built...</p>
        </div>
    {/if}
</div>

<style>
    @import "./style.css";
</style>