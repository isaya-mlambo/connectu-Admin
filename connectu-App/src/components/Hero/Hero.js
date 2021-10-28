import React, {useContext} from "react";
import "./Hero.css";
import { UserContext } from "../UserContext";

const Hero = () => {
  const currentUser = useContext(UserContext);

  return (
    <div className="Hero">
      <h1>connecting u</h1>
      <p>To unlimited Oppotunities.</p>
    </div>
  );
};

export default Hero;
