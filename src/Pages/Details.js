import React from "react";
import "../Style/Details.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {


    let params = useParams()

    const [details, setDetails] = useState({})

  const getDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=082e1af138d547888d2b5cd8f4013026`);
    const detailData = await data.json();
    setDetails(detailData);

   

};


  useEffect(() => {
    getDetails();
  },[params.name])

  // const ingredients = details.extendedIngredients
  // console.log(ingredients)


    return(
        <div className="details-container">

         <div className="details-stats">
         <h3>{details.title}</h3>
         <img src={details.image} className="details-image"></img>
         <p>Total Servings: {details.servings}</p>
         <p>Cooking Time: {details.readyInMinutes + " Mins"}</p>
         
         {/* <h5>Ingredients</h5>

         <ul>
          {ingredients.map(item => {
            return <li key={item.id}>{item.nameClean}</li>
          })}
         </ul> */}
        <h5>Weight Watchers Points</h5>
         <p>{details.weightWatcherSmartPoints}</p>
         <h5>Credit</h5>
         <p>{details.creditsText}</p>
         
         
        
         
    


     

          
         
        

         </div>
        
         <div className="details-info">

        
         <h4 dangerouslySetInnerHTML={{__html: details.summary}} className="details-summary" ></h4>
         <h5>Instructions</h5>
         <h4 dangerouslySetInnerHTML={{__html: details.instructions}} className="details-instructions" ></h4>
         
         </div>
       
        </div>
    )
}

export default Details;