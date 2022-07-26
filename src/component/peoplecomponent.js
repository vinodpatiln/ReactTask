import React, {useState,useEffect} from "react";
import './css/style.css'

const Peoplecomponent = () => {    
    const [peoples, setpeoples] = useState([])  
    const fetchpeople = async () => {
        const response = await fetch("https://swapi.dev/api/people/")
        const data = await response.json()
        console.log(data);
        setpeoples(data.results)
    }

    useEffect(() => {
        fetchpeople()
    }, [])

    
    return (
        <>
            <h1>Peoples</h1>
            {peoples.length > 0 && (
                <div className="people-container">

                
                {peoples.map((people, index) => (
                    <div className="grid-item" key={index}>
                    <h3>{people.name}</h3>
                    <p className="grid-inner-item"><strong>Height: </strong>{people.height}</p>
                    <p className="grid-inner-item"><strong>Mass: </strong>{people.mass}</p>
                    <p className="grid-inner-item"><strong>Birth Year: </strong>{people.birth_year}</p>
                    <p className="grid-inner-item"><strong>gender: </strong>{people.gender}</p>
                    <p className="grid-inner-item"><strong>homeworld: </strong>{people.homeworld}</p>
                    <p className="grid-inner-item"><strong>Films : </strong>
                    {
                        people.films.map((filmurl, i)=>(
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
export default Peoplecomponent;