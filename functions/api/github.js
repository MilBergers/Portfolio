export async function onRequest(context) {
  const { request, env } = context;
  
  // Get credentials from environment variables
  const githubToken = env.GITHUB_TOKEN; // Optional, but recommended for higher rate limits
  const username = env.GITHUB_USERNAME;
  
  if (!username) {
    return new Response(
      JSON.stringify({ error: 'Missing GitHub username' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
  
  try {
    // Call GitHub API for user events (commits)
    const url = `https://api.github.com/users/${encodeURIComponent(username)}/events/public`;
    
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Portfolio-Website'
    };
    
    // Add token if available for higher rate limits
    if (githubToken) {
      headers['Authorization'] = `token ${githubToken}`;
    }
    
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const events = await response.json();
    
    // Find the most recent PushEvent (commit)
    const pushEvent = events.find(event => event.type === 'PushEvent');
    
    if (!pushEvent) {
      return new Response(
        JSON.stringify({ 
          lastCommit: null,
          repo: null,
          message: null,
          url: null
        }),
        { headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Extract commit info
    const repo = pushEvent.repo?.name || null;
    const commitDate = pushEvent.created_at || null;
    const commits = pushEvent.payload?.commits || [];
    const lastCommitMessage = commits.length > 0 
      ? commits[commits.length - 1]?.message 
      : null;
    
    // Build repository URL
    const repoUrl = repo ? `https://github.com/${repo}` : null;
    
    // Build response payload
    const payload = {
      lastCommit: commitDate,
      repo: repo,
      message: lastCommitMessage,
      url: repoUrl
    };
    
    return new Response(
      JSON.stringify(payload),
      { 
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
        } 
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
