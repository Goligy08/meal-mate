import React from "react";
import "../Style/Searched.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Searched = () => {

    const [searchedRecipes, setSearchedRecipes] = useState([]);

    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=082e1af138d547888d2b5cd8f4013026&query=${name}&number=16`);
        const recipes = await data.json(); 
        setSearchedRecipes(recipes.results);
   };

    useEffect(() => {
      getSearched(params.search);
    },[params.search])

    return (
        <div className="search-body">
         
         <h2>{params.search} Recipes</h2>
         <div className="card-container">
        
         {searchedRecipes .map((recipe) => {
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

export default Searched;