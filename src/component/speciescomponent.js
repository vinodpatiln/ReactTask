import React, {useState,useEffect} from "react";
import './css/style.css'

const Speciescomponent = () => {    
    const [species, setspecies] = useState([])  
    const fetchspecies = async () => {
        const response = await fetch("https://swapi.dev/api/species/")
        const data = await response.json()
        console.log(data);
        setspecies(data.results)
    }

    useEffect(() => {
        fetchspecies()
    }, [])

    
    return (
        <>
            <h1>Species</h1>
            {species.length > 0 && (
                <div className="film-container">

                
                {species.map((spec, index) => (
                    <div className="grid-item" key={index}>
                    <h3>{spec.name}</h3>
                    <p className="grid-inner-item"><strong>Classification: </strong>{spec.classification}</p>
                    <p className="grid-inner-item"><strong>Designation: </strong>{spec.designation}</p>
                    <p className="grid-inner-item"><strong>Average height: </strong>{spec.average_height}</p>
                    <p className="grid-inner-item"><strong>Skin Colors: </strong>{spec.skin_colors}</p>
                    <p className="grid-inner-item"><strong>Language: </strong>{spec.language}</p>
                    <p className="grid-inner-item"><strong>Average lifespan: </strong>{spec.average_lifespan}</p>
                    <p className="grid-inner-item"><strong>Surface water: </strong>{spec.surface_water}</p>
                    {spec.people.length > 0 && (
                    <p className="grid-inner-item"><strong>Residents : </strong>
                    {

                        spec.people.map((peoplesurl, i)=>(
                            <span className="film-list" key={i}>{peoplesurl}</span>
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
export default Speciescomponent;