import MotionHoc from "./MotionHoc";
import "./PageStyles.css";

const AboutComponent = () => {
    return <h1 id="TempH1">About</h1>;   
};

const About = MotionHoc(AboutComponent);

export default About;
