export async function load({ fetch, params }) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=b6249ec47ba49951d3cb47715af4386d&language=en-US&page=1`
    );
    const movieData = await res.json();
    
    const resPerson = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=b6249ec47ba49951d3cb47715af4386d&language=en-US&page=1`
    );
    const personData = await resPerson.json();
  
    return {
      movieData,
      personData,
    };
  };
