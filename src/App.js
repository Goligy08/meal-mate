import React from "react";
import Hero from "./Components/Hero";
import Filters from "./Components/Filters";
import Home  from "./Pages/Home";
import Searched from "./Pages/Searched";
import Filtered from "./Pages/Filtered";
import Footer from "./Components/Footer";
import Pages from "./Pages/Pages";
import './Style/App.scss';
import {BrowserRouter} from 'react-router-dom';

function App()  {
  

  return (
    <div>
      <BrowserRouter>
      <Hero/>
      <Filters/>
      <Pages/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}


export default App;