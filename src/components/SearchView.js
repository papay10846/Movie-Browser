import Hero from "./Hero";
import {Link} from 'react-router-dom'
import ErrorView from "./ErrorView";

//key= 6b22417350257f133f2627e6191245af
//link = https://api.themoviedb.org/3/search/movie?api_key=6b22417350257f133f2627e6191245af&language=en-US&query=Starwars&page=1&include_adult=false

const MovieCard = ({movie}) =>{
    const posterurl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailurl = `/movies/${movie.id}`
    return(
        // <div className="col-lg-4 col-md-4 col-2 my-4">
        //     <div clasName="card">
        //         <img src={posterurl} clasName="card-img-top" alt={movie.original_title}/>
        //         <div clasName="card-body">
        //             <h5 clasName="card-title">{movie.original_title}</h5>
        //             <Link to= {detailurl} clasName="btn btn-primary">Show Details</Link>
        //         </div>
        //     </div>
        // </div>
        <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img src={posterurl} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailurl} className="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
    )
}

const SearchView = ({keyword,searchResults}) =>{
    const title = `You are searching for ${keyword}`
    const resultsHtml = searchResults.map((obj,i) =>{
        return <MovieCard movie={obj} key={i}/>
    })
    return(
    <>
    {searchResults===undefined ? <ErrorView text={keyword}/> : <Hero text={title}/>}
    {resultsHtml &&
        <div className="container">
            <div className="row">
                {resultsHtml}
            </div>
        </div>
    }
    </>
    )
}
export default SearchView;