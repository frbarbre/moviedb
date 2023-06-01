<script>
    export let popular
    import { MovieCard } from '../components'
</script>

<h2 class="p-10 font-bold uppercase text-center">Popular Movies</h2>
<section class="flex gap-8 flex-wrap justify-center px-10 pb-10 max-w-[2000px] mx-auto">
    {#each popular as movie}
        <MovieCard {movie} />
    {/each}
</section>
