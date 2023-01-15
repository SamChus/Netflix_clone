const sliders = document.querySelector("carousalbox")
var scrollPerClick;
var ImagePadding = 20;

showMovieData()


async function showMovieData() {
    const api_key = "a4e00ecbc79f9452a0eff1b8d430b8ea";
    // /discover/movie?sort_by=popularity.desc

    var result = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key" + 
        api_key +
        "&sort_by=popularity.desc"
    );

    // result = result.data.results;
    console.log(result);

    // result.map(f)
}