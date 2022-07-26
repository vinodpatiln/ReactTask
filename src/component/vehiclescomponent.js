import React, {useState,useEffect} from "react";
import './css/style.css'

const Vehiclesscomponent = () => {    
    const [vehicles, setvehicles] = useState([])  
    const fetchvehicles = async () => {
        const response = await fetch("https://swapi.dev/api/vehicles/")
        const data = await response.json()
        console.log(data);
        setvehicles(data.results)
    }

    useEffect(() => {
        fetchvehicles()
    }, [])

    
    return (
        <>
            <h1>Vehicles</h1>
            {vehicles.length > 0 && (
                <div className="people-container">

                
                {vehicles.map((vehicles, index) => (
                    <div className="grid-item" key={index}>
                    <h3>{vehicles.name}</h3>
                    <p className="grid-inner-item"><strong>Model: </strong>{vehicles.model}</p>
                    <p className="grid-inner-item"><strong>Manufacturer: </strong>{vehicles.manufacturer}</p>
                    <p className="grid-inner-item"><strong>Cost In Credits: </strong>{vehicles.cost_in_credits}</p>
                    <p className="grid-inner-item"><strong>Length: </strong>{vehicles.length}</p>
                    <p className="grid-inner-item"><strong>Max Atmosphering Speed: </strong>{vehicles.max_atmosphering_speed}</p>
                    <p className="grid-inner-item"><strong>Crew: </strong>{vehicles.crew}</p>
                    <p className="grid-inner-item"><strong>Passengers: </strong>{vehicles.passengers}</p>
                    <p className="grid-inner-item"><strong>Cargo Capacity: </strong>{vehicles.cargo_capacity}</p>
                    <p className="grid-inner-item"><strong>Consumables: </strong>{vehicles.consumables}</p>
                    <p className="grid-inner-item"><strong>Vehicle Class: </strong>{vehicles.vehicle_class}</p>
                    <p className="grid-inner-item"><strong>Films : </strong>
                    {
                        vehicles.films.map((filmurl, i)=>(
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
export default Vehiclesscomponent;