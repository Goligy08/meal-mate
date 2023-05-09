import React from "react";
import Home from "./Home";
import Filtered from "./Filtered";
import Searched from "./Searched";
import Details from "./Details";
import "../Style/Pages.scss";
import { Route, Routes} from "react-router-dom";


const Pages = () => {
    return (
     
        <Routes>
            <Route  path="/" element= {<Home />}  />
            <Route path="/filtered/:type" element = {<Filtered />} />
            <Route path="/searched/:search"   element = {<Searched />} />
            <Route path="/details/:name" element = {<Details />} />
        </Routes>
        
    )
}

export default Pages;

