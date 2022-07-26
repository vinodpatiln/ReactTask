import React, {useState,useEffect} from "react";
import './css/style.css'

const Starshipscomponent = () => {    
    const [starships, setstarships] = useState([])  
    const fetchstarships = async () => {
        const response = await fetch("https://swapi.dev/api/starships/")
        const data = await response.json()
        console.log(data);
        setstarships(data.results)
    }

    useEffect(() => {
        fetchstarships()
    }, [])

    
    return (
        <>
            <h1>Starships</h1>
            {starships.length > 0 && (
                <div className="people-container">

                
                {starships.map((starships, index) => (
                    <div className="grid-item" key={index}>
                    <h3>{starships.name}</h3>
                    <p className="grid-inner-item"><strong>Model: </strong>{starships.model}</p>
                    <p className="grid-inner-item"><strong>Manufacturer: </strong>{starships.manufacturer}</p>
                    <p className="grid-inner-item"><strong>Cost In Credits: </strong>{starships.cost_in_credits}</p>
                    <p className="grid-inner-item"><strong>Length: </strong>{starships.length}</p>
                    <p className="grid-inner-item"><strong>Max Atmosphering Speed: </strong>{starships.max_atmosphering_speed}</p>
                    <p className="grid-inner-item"><strong>Crew: </strong>{starships.crew}</p>
                    <p className="grid-inner-item"><strong>Passengers: </strong>{starships.passengers}</p>
                    <p className="grid-inner-item"><strong>Cargo Capacity: </strong>{starships.cargo_capacity}</p>
                    <p className="grid-inner-item"><strong>Consumables: </strong>{starships.consumables}</p>
                    <p className="grid-inner-item"><strong>Films : </strong>
                    {
                        starships.films.map((filmurl, i)=>(
                            <span className="film-list" key={i}>{filmurl}</span>
                        )
                        
                        )
                    }
                    </p>
                    
                    </div>
                ))}
                </div>
            )}
        </>
    );

}
export default Starshipscomponent;