const apiKey = '453e0ca851cb6a3934f155532b186c20';




const allLinks = {
    fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanaceMovies : `/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${apiKey}&with_genres=99`,
    fetchCrimeMovies : `/discover/movie?api_key=${apiKey}&with_genres=80`,
    fetchAnimation : `/discover/movie?api_key=${apiKey}&with_genres=16`,
    fetchWar: `/discover/movie?api_key=${apiKey}&with_genres=10752`
};

export default allLinks;

