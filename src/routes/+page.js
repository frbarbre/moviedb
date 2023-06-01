// You can also write it like this
// export async function load({ fetch }) {

export const load = async (loadEvent) => {
  const { fetch } = loadEvent;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=b6249ec47ba49951d3cb47715af4386d&language=en-US&page=1`
  );
  const moviesData = await res.json();

  return {
    moviesData,
  };
};