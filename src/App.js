import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import { Route,Routes } from 'react-router-dom';
import SearchView from './components/SearchView'
import { useState,useEffect } from 'react';
import MovieView from './components/MovieView';
//import ErrorView from './components/ErrorView';


function App() {

  const [searchResults, setSearchResults] = useState([])
  const [searchText,setSearchText] = useState('')


  useEffect(() => {
    //console.log(searchText,"is the serch text.")
    if(searchText){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=6b22417350257f133f2627e6191245af&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(movie => {
      setSearchResults(movie.results)
    })
    }
  }, [searchText])

  return (
    <div>
     <Navbar searchText={searchText} setSearchText={setSearchText}/>
     <Routes>
        <Route path="/" element= {<Home/>} exact/>
        <Route path="/about" element = {<AboutView/>}/>
        <Route path='/search' element = {<SearchView keyword={searchText} searchResults={searchResults}/>}/>
        <Route path='/movies/:id' element={<MovieView/>}/>
      </Routes>
    </div>
  );
}

export default App;
