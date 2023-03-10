import React from 'react';
import './Home.css';
import Row from './Row';
import requests from '../requests';
import Banner from "./Banner";
import Nav from './Nav';

function Home() {
  return (
    <div className="Home">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINAL" 
      fetchUrl={requests.fetchNetflixOriginals} 
      LargeRow = {true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} LargeRow = {true}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} LargeRow = {true}/>
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} LargeRow = {true}/>
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} LargeRow = {true}/>
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} LargeRow = {true}/>
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} LargeRow = {true}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} LargeRow = {true}/>
      
    </div>
  );
}

export default Home;
