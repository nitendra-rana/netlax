import "./App.css";
import React from "react";
import Row from "./components/Row/Row";
import requests from "./request";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner /> 
      <Row
        title={"Netlax Original"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"Trendings"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Horror"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Action "} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy "} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
      <Row title={"Adventure"} fetchUrl={requests.fetchAdventureMovies} />
      <Row title={"Animated"} fetchUrl={requests.fetchAnimationMovies} />
      <Row title={"Thriller"} fetchUrl={requests.fetchThrillerMovies} />
      <Row title={"Mystery"} fetchUrl={requests.fetchMysteryMovies} />
      <Row title={"Crime"} fetchUrl={requests.fetchCrimeMovies} />
      <Footer />
    </div>
  );
}

export default App;