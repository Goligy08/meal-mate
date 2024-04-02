import Popular from "../Components/Popular";
import Vegetarian from "../Components/Vegetarian";
import "../Style/Home.scss";


const Home = () => {

    return (
      <div className="home-page" id="home-page">
        <Popular/>
        <Vegetarian/>
      </div>
    )
}


export default Home;

