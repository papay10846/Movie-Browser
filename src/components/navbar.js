//import { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom';

const Navbar = (props) =>{

    

    const navigate = useNavigate()

    const updateSearchText = (e) => {
        navigate('/search')
        //console.log(e.target.value)
        props.setSearchText(e.target.value)
    }

//    const [textSubmit,setTextSubmit] = useState('')

    const formSubmitHandler= (e)=>{
      e.preventDefault()
      navigate('/search')
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Movie Browser</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="gotosomewherenavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="gotosomewhere" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="gotosomewhere">Action</Link></li>
              <li><Link className="dropdown-item" to="gotosomewhere">Another action</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to="gotosomewhere">Something else here</Link></li>
            </ul>
            </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">Coming Soon</Link>
          </li>
        </ul>
        <form className="d-flex" onSubmit={formSubmitHandler}>
          <input className="form-control me-2" 
          type="text" 
          placeholder="Search" 
          aria-label="Search"
          value={props.searchText}
          onChange = {updateSearchText} />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    )
  }
  export default Navbar