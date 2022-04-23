const API_KEY = "c67b28f7d09258b49fa6ddf2f5eccb61";

const request = {
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrending:`/trending/all/day?api_key=${API_KEY}`,
    fetchTopRated:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchUnknown:`/discover/movie?api_key=${API_KEY}&with_genres=14`,
}

export default request;