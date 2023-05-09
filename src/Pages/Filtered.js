import React, { useEffect, useState } from "react";
import "../Style/Filtered.scss";
import { Link, useParams } from "react-router-dom";


const Filtered = () => {
    
    const [filtered, setFiltered] = useState([]);
    let params = useParams();

     const getFiltered = async (name) => {
          const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=082e1af138d547888d2b5cd8f4013026&cuisine=${name}&number=16`);
          const recipes = await data.json(); 
          setFiltered(recipes.results);
     };

     useEffect(() => {
      getFiltered(params.type);
      console.log(params.type)
     },[params.type])

    return (
        <div className="filtered-page">
         <h2>{params.type} Recipes</h2>
         <div className="card-container">

         {filtered.map((recipe) => {
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




export default Filtered;