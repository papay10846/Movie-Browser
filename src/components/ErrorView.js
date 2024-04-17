import Hero from "./Hero";


const ErrorView = (props)=>{
    return(
        <div>
            <div>
                <Hero text={`Sorry dear! No result found for ${props.text}`}/>
            </div>
            <div>
                <h2 style={{textAlign: 'center', fontSize: '20em'}}>404 Error!</h2>
            </div>
        </div>
    )
}
export default ErrorView;