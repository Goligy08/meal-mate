import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Vegetarian = () => {

    const [vegetarian, setVegetarian] = useState([]);

    useEffect( () => {
      getVegetarian();
    },[])
    const getVegetarian = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=082e1af138d547888d2b5cd8f4013026&number=4&tags=vegetarian`);
        const data = await api.json();

        console.log(data)
        setVegetarian(data.recipes)
    }
    return (
        <div className="vegetarian">
        <h2>Vegetarian Recipes</h2>
        <p> Our favourite vegetarian recipes</p>
        

        <div className="card-container">
       
        {vegetarian.map((recipe) => {
            return(
                
                <div key={recipe.id} className="card">
                    <Link to={"/details/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image}></img>
                    </Link>
                </div>
                
            );
        })}
       </div>
        </div>
    )
}


export default Vegetarian;