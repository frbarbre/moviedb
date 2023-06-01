<script>
    export let movie
</script>

<a href={"/movie/" + movie.id} class={movie.poster_path === null || movie.backdrop_path === null ? 'hidden' : ''}>
    <div class="flex flex-col gap-2 w-[200px] overflow-hidden">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`} class="w-[200px] h-[300px] object-cover rounded-xl">
        <h1 class="w-contentmax">{movie.title}</h1>
        <div class="flex justify-between">
            <h2>{movie.release_date.slice(0, 4)}</h2>
            <div class="flex items-center justify-center gap-2">
                <div>
                    {movie.vote_average.toFixed(1)}
                </div>
                <img src="/star.png" alt="star-icon" class="w-[16px] -translate-y-[1px]">
            </div>
        </div>
    </div>   
</a>
