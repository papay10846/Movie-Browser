import Hero from "./Hero";



const Home = () =>{
    return(
      <>
        <Hero text="Welcome Home!"/>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 my-5">
                    <p className="lead">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laboriosam sapiente alias tempora dolor possimus consectetur
                    quam ducimus expedita illum assumenda. 
                    Dignissimos, reiciendis repellendus nostrum quibusdam non odit vero. Fugiat, saepe!
                    </p>
                </div>
            </div>
        </div>
      </>
    )
  }
export default Home;