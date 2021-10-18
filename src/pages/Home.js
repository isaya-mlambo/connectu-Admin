import MotionHoc from "./MotionHoc";
import "./PageStyles.css";

const HomeComponent = () => {
    return <h1 id="TempH1">Home</h1>;   
};

const Home = MotionHoc(HomeComponent);

export default Home;
