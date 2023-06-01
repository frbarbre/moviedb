export const load = async ({ fetch, params }) => {
    // console.log("params", params.searchid);
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b6249ec47ba49951d3cb47715af4386d&language=en-US&page=1&include_adult=false&query=${params.id}`
    );
    const searchResult = await res.json();
  
    return {
      searchResult,
    };
  };