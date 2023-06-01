<script>
	import { PopularMovies, SearchMovie } from '../components';
	export let data;
	let popular = data.moviesData.results
</script>

<SearchMovie />
<PopularMovies {popular} />