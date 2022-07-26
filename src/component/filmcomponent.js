import React, {useState,useEffect} from "react";
import './css/style.css'

const Filmcomponent = () => {    
    const [films, setFilms] = useState([])  
    const fetchFilm = async () => {
        const response = await fetch("https://swapi.dev/api/films/")
        const data = await response.json()
        console.log(data);
        setFilms(data.results)
    }

    useEffect(() => {
        fetchFilm()
    }, [])

    
    return (
        <>
            <h1>Films</h1>
            {films.length > 0 && (
                <div className="film-container">

                
                {films.map(film => (
                    <div className="grid-item" key={film.episode_id}>
                    <h3>{film.title}</h3>
                    <p className="grid-inner-item"><strong>Director: </strong>{film.director}</p>
                    <p className="grid-inner-item"><strong>Producer: </strong>{film.producer}</p>
                    <p className="grid-inner-item"><strong>Release Date: </strong>{film.release_date}</p>
                    <p>{film.opening_crawl}</p>
                    </div>
                ))}
                </div>
            )}
        </>
    );

}
export default Filmcomponent;