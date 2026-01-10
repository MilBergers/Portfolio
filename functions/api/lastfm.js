export async function onRequest(context) {
  const { request, env } = context;
  
  // Get credentials from environment variables
  const apiKey = env.LASTFM_API_KEY;
  const username = env.LASTFM_USER;
  
  if (!apiKey || !username) {
    return new Response(
      JSON.stringify({ error: 'Missing Last.fm credentials' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
  
  try {
    // Call Last.fm API for recent tracks
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${encodeURIComponent(username)}&api_key=${apiKey}&format=json&limit=1`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Last.fm API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Extract track info
    const tracks = data?.recenttracks?.track;
    if (!tracks || tracks.length === 0) {
      return new Response(
        JSON.stringify({ 
          title: null, 
          artist: null, 
          url: null, 
          image: null, 
          nowPlaying: false 
        }),
        { headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    const track = Array.isArray(tracks) ? tracks[0] : tracks;
    const nowPlaying = track['@attr']?.nowplaying === 'true';
    
    // Get the largest image available (usually the last one in the array)
    const images = track.image || [];
    const image = images.length > 0 
      ? images[images.length - 1]['#text'] 
      : null;
    
    // Build response payload
    const payload = {
      title: track.name || null,
      artist: track.artist?.['#text'] || track.artist?.name || null,
      url: track.url || null,
      image: image || null,
      nowPlaying: nowPlaying
    };
    
    return new Response(
      JSON.stringify(payload),
      { 
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=60' // Cache for 1 minute
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
