import React from "react";
import '../Style/Filters.scss';
import {NavLink} from "react-router-dom";


const Filters = () => {

    return(

        <div className="filters">

         <NavLink to={"/filtered/japanese"} className="filter-item">
            <img className="filter-img" src={require("../Assets/sushi_maki.png")} alt="sushi.png"  ></img>
            <h4 className="filter-title">Japanese</h4>

         </NavLink>

         <NavLink to={"/filtered/american"}  className="filter-item">
         <img className="filter-img" src={require("../Assets/hamburguer.png" )} alt="hamburger.png" ></img>
         <h4 className="filter-title">American</h4>

         </NavLink>

         <NavLink to={"/filtered/italian"}  className="filter-item">
         <img className="filter-img" src={require ("../Assets/pizza.png")} alt="pizza.png"></img>
         <h4 className="filter-title">Italian</h4>

         </NavLink>

         <NavLink to={"/filtered/thai"}  className="filter-item">
         <img className="filter-img" src={require ("../Assets/noodles.png")} alt="noodles.png"></img>
         <h4 className="filter-title">Thai</h4>

         </NavLink>

        </div>
       
    )
}

export default Filters;