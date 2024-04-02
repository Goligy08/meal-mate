import React, { useState } from "react";
import "../Style/hero.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from "react-router-dom";
import {useEffect} from "react";
const Hero = () => {

  
    const [input, setInput] = useState("");
    const navigate = useNavigate();
 
    const submitHandler = (e) => {
        e.preventDefault();
       console.log('hey');
       navigate('/searched/'+input);
    };

    return( 
        <div className="hero">
            <Link to={"/"}>
         <img className="hero-icon" src={require("../Assets/Icon.png")}></img>
         <h2 className="hero-title">Meal Mate</h2>
         </Link>
         <form className="form" onSubmit={submitHandler}>
            <input 
             onChange={(e) => setInput(e.target.value)} 
             value={input} 
             className="search"
             placeholder="Search..">

              </input>
              
            <button type="submit" className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass} className="magnify-icon"/></button>
         </form>
         

         <h1>The Easiest Way to find new recipes!</h1>
         <h3>Explore the culinary world at your fingertips</h3>
         <button className="find-btn" 
         onClick={() => window.scrollTo({ top: 900, behavior:"smooth" })}
         >
            
            Find Recipes</button>
         <img className="hero-img" src={require("../Assets/HeroPanImg.png")}></img> 
         {/* // Attribution: hero-img design by All-free-download.com use under Creative commons attribution license*/}

        </div>
    )
}

export default Hero;