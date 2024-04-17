import Hero from "./Hero";
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";

const MovieView = () => {
    const {id} = useParams()
    console.log(id)

    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        console.log('Make an API request!')
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6b22417350257f133f2627e6191245af&language=en-US`)
        .then(response => response.json())
        .then(details => {
            setMovieDetails(details)
            setIsLoading(false)
        })
    }, [id])

    function renderMovieDetails(){
        if(isLoading){
            return <Hero text="Loading..."/>
        }
        if(movieDetails){
            const posterPath = `https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`
            const backdropurl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            return(
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropurl} className="hero"/>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterPath} alt="..." className="img-fluid shadow rounded"/>
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">
                                    {movieDetails.overview}</p>
                                <p className="imdb">IMDB ID: {movieDetails.imdb_id}</p>
                                <p className="tag">Tagline: "{movieDetails.tagline}"</p>
                                <p className="pop">Popularity: {movieDetails.popularity}</p>
                            </div>
                        </div>

                    </div>
                </>
            )
        }
    }

    return renderMovieDetails()
}
export default MovieView;