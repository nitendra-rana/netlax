

//const API_KEY = "b74c8d8da10c29d8285083bdb95f653" ;
const API_KEY = "58b5fa947947db2c836a2deef57a8bd9"
const requests = {
   
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&append_to_response=videos,images`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&wih_netwoks=213&append_to_response=videos,images`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&append_to_response=videos,images`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&append_to_response=videos,images`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&append_to_response=videos,images`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&append_to_response=videos,images`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&append_to_response=videos,images`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&append_to_response=videos,images`,
  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12&append_to_response=videos,images`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&append_to_response=videos,images`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80&append_to_response=videos,images`,
  fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648&append_to_response=videos,images`,
  fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=848&append_to_response=videos,images`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53&append_to_response=videos,images`,
};
  
  //https://api.themoviedb.org/3/movie/550?api_key=b74c8d8da10c29d8285083bdb95f6539


// http://p.ip.fi/ZMtX ;

export default requests;