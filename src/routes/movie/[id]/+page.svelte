<script>
    export let data;
    console.log(data)
    let movie = data.movieData
    let actors = data.personData.cast
</script>

<div class="max-w-[2000px] mx-auto gap-6 flex items-center flex-col px-20 pb-20">
    <div class="w-full relative overflow-hidden rounded-xl">
        <img 
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={`${movie.title} Poster`} 
            class="w-full h-minusheader object-cover rounded-xl"
        >
        <img 
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={`${movie.title} Poster`} 
            class="absolute inset-0 blur-sm w-full h-minusheader object-cover rounded-xl"
        >
        <div class="absolute inset-0 bg-opaque flex justify-center items-end rounded-xl">
            <img 
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                alt={`${movie.title} Poster`} 
                class="w-[300px] object-contain h-[450px] rounded-xl mb-[48px] shadow-lg z-[5]"
            >
            <div class="absolute bottom-0 left-0 right-0 h-[75px] rounded-b-xl">
            </div>
        </div>
    </div>
    <div class="w-full flex flex-wrap justify-between items-center gap-4">
        <div class="flex flex-col items-center translate-y-[-15px] w-contentmax">
            <h1 class="text-[56px] font-bold uppercase self-start">{movie.title} <span class="font-medium">- {movie.release_date.slice(0, 4)}</span></h1>
            <h2 class={`text-[32px] font-semibold uppercase self-start text-orange-500 translate-y-[-12px] translate-x-[1px] ${movie.tagline === "" ? 'hidden' : ''}`}>"{movie.tagline}"</h2>
            <div class="flex gap-2 self-start">
                {#each movie.genres as genre }
                    <div class="bg-orange-500 px-2 py-1 rounded-md text-center uppercase font-medium">{genre.name}</div>            
                {/each}
            </div>
        </div>
        <div>
            <h3 class="w-contentmax self-end text-[48px] font-bold">
                <span class="text-orange-500">{movie.vote_average.toFixed(1)}</span> <span class="text-[40px]">/</span> 10
            </h3>
            <h4 class="text-right text-[12px] font-medium uppercase pr-1"><span class="font-bold text-orange-500">{movie.vote_count}</span> votes</h4>
        </div>
    </div>

    <div class="flex justify-between w-full flex-wrap gap-4">
        <div class="flex flex-1 flex-col gap-8">
            {#each actors as actor, index}
                {#if index <= 4}
                    <div class="flex gap-4 items-center">
                        <img 
                            src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} 
                            alt={actor.name}
                            class="w-[56px] h-[56px] object-cover rounded-full"
                        >
                        <div class="flex flex-col gap-1">
                          <h2 class="text-[18px] font-bold uppercase">{actor.character}</h2>
                          <h3 class="text-[14px] text-orange-500 font-medium">{actor.name}</h3>  
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
        <div class="flex-1 translate-y-[-14px]">
            <h2 class="font-bold uppercase text-[32px] relative">Summary</h2>
            <div class="w-[176px] h-[3px] bg-orange-500 translate-y-[-5px] translate-x-[-5px] mb-2"/>
            <p class="font-medium max-w-[400px] leading-6 tracking-wide">{movie.overview}</p>
        </div>
        <div class="flex-1 translate-y-[-14px]">
            <h2 class="font-bold uppercase text-[32px] relative">Information</h2>
            <div class="w-[238px] h-[3px] bg-orange-500 translate-y-[-5px] translate-x-[-5px] mb-2"/>
            <h3 class="uppercase font-medium pb-2">Release Date: <span class="text-orange-500 font-bold">{movie.release_date}</span></h3>
            <h3 class="uppercase font-medium pb-2">Runtime: <span class="text-orange-500 font-bold">{movie.runtime} minutes</span></h3>
            <h3 class="uppercase font-medium pb-2">Original Title: <span class="text-orange-500 font-bold">{movie.original_title}</span></h3>
            <h3 class="uppercase font-medium pb-2">Language: <span class="text-orange-500 font-bold">{movie.original_language}</span></h3>
            <h3 class="uppercase font-medium pb-2">Budget: <span class="text-orange-500 font-bold">{movie.budget}$</span></h3>
            <h3 class="uppercase font-medium pb-2">Revenue: <span class="text-orange-500 font-bold">{movie.revenue}$</span></h3>
        </div>
    </div>
    
    
</div>
