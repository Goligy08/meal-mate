
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Popular = () => {

   const [popular, setPopular] = useState([]);

   useEffect(() => {
       getPopular();
   },[])

    const getPopular = async () => {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=082e1af138d547888d2b5cd8f4013026&number=8`);
      const data = await api.json();
      console.log(data);
      setPopular(data.recipes)
    }

    return(
        <div className="popular">
        <h2>Popular Recipes</h2>
        <p>most popular recipes this week</p>
         <div className="card-container">
        
         {popular.map((recipe) => {
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

export default Popular;