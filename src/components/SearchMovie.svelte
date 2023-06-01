<script>
    let inputValue = ""
    import { goto } from '$app/navigation'

    function submitSearch() {
        goto("/search/" + inputValue)
        sessionStorage.setItem("search-term", inputValue)
    }
</script>

<div class="flex justify-center">
    <form on:submit|preventDefault={submitSearch}>
        <label for="search_bar"></label>
        <input 
            type="text" 
            name="search_bar" 
            bind:value={inputValue}
            class="bg-gray-200 p-2 rounded-l-xl"
            placeholder="Search for a movie"
        >
        <button 
            type="submit"
            class="rounded-r-xl bg-orange-500 p-2"
        >Search</button>
    </form>
</div>

