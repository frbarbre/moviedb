<script>
	import { MovieCard } from '../../../components/index.js';
    export let data;

    let results = data.searchResult.results
    
    let searchTerm = sessionStorage.getItem("search-term")
</script>

<h2 class="p-10 font-medium">
    Showing search results for: <span class="font-bold text-center">{searchTerm}</span> 
</h2>
<section class="flex gap-8 flex-wrap justify-center px-10">
    {#each results as movie}
        <MovieCard {movie} />
    {/each}
</section>
