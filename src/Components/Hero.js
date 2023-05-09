import React, { useState } from "react";
import "../Style/hero.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from "react-router-dom";

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
         <h2 className="hero-title"> /0\ Meal Mate</h2>
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
         <button className="find-btn">Find Recipes</button>

        </div>
    )
}

export default Hero;