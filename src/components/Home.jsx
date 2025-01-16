import Header from "../shared/Header";
import Navbar from "../shared/Navbar";
import Estates from "./estate/Estates";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Slider></Slider>
            <Estates></Estates>
        </div>
    );
};

export default Home;