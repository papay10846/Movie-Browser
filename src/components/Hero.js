const Hero = ({text , backdrop}) =>{
    return(
        <header className="bg-dark text-white p-5 Hero-container">
            <h1 className="Hero_text">{text}</h1>
            {backdrop &&
                <div className="Hero_backdrop" style={{backgroundImage : `url(${backdrop})`}} ></div>
            }
        </header>
    )
}
export default Hero;