
function Card(movie){
    console.log(movie.info)
    let img_path="https://image.tmdb.org/t/p/w500"
    return(

        <>
        <div className="movie">
            <img src={img_path+movie.info.poster_path}className="poster"></img>
            <div className="detalles_peliculas">
                <div className=" box">
                   <h4 className="titulo">{movie.info.title}</h4>
                    <p className="years">{movie.info.release_date}</p>
                </div>

            </div>
        </div>
        </>
    )
}
export default Card