import React, {useState,useEffect} from "react";
import './css/style.css'

const Planetscomponent = () => {    
    const [planets, setplanets] = useState([])  
    const fetchplanet = async () => {
        const response = await fetch("https://swapi.dev/api/planets/")
        const data = await response.json()
        console.log(data);
        setplanets(data.results)
    }

    useEffect(() => {
        fetchplanet()
    }, [])

    
    return (
        <>
            <h1>Planets</h1>
            {planets.length > 0 && (
                <div className="film-container">

                
                {planets.map((planet, index) => (
                    <div className="grid-item" key={index}>
                    <h3>{planet.name}</h3>
                    <p className="grid-inner-item"><strong>Rotation Period: </strong>{planet.rotation_period}</p>
                    <p className="grid-inner-item"><strong>Orbital Period: </strong>{planet.orbital_period}</p>
                    <p className="grid-inner-item"><strong>Diameter: </strong>{planet.diameter}</p>
                    <p className="grid-inner-item"><strong>Climate: </strong>{planet.climate}</p>
                    <p className="grid-inner-item"><strong>Gravity: </strong>{planet.gravity}</p>
                    <p className="grid-inner-item"><strong>Terrain: </strong>{planet.terrain}</p>
                    <p className="grid-inner-item"><strong>Surface water: </strong>{planet.surface_water}</p>
                    {planet.residents.length > 0 && (
                    <p className="grid-inner-item"><strong>Residents : </strong>
                    {

                        planet.residents.map((residentsurl, i)=>(
                            <span className="film-list" key={i}>{residentsurl}</span>
                        )
                        
                        )
                    }
                    </p>
                    )}
                    </div>
                ))}
                </div>
            )}
        </>
    );

}
export default Planetscomponent;