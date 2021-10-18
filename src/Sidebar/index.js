import React, { useState } from "react";

import connectuLogo from "../assets/connectuLogo.jpeg"
//All svg files
import logout from "../assets/logout.png";
import infoLogo from "../assets/info-button.png"
import loginLogo from "../assets/login.png"
import SignUpLogo from "../assets/register.png"
import Home from "../assets/home-solid.svg";
import Team from "../assets/social.svg";
import Documents from "../assets/draft.svg";
import vacancies from "../assets/Forum.svg";
import vid from "../assets/meeting.svg";
import PowerOff from "../assets/power-off-solid.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import * as ROUTES from "../constants/routes";

const Button = styled.button`
  background-color: black;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: white;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;
const SidebarContainer = styled.div`
  background-color: black;
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: Relative;
`;
const Logo = styled.div`
  width: 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;

  padding: 2rem 0;

  position: absolute;
  top: 6rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(Link)`
  text-decoration: none;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid white;
    border-left: 4px solid white;
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;
const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;
  position: Relative;

  padding: 0.5rem 1rem;
  border: 2px solid white;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};

  background-color: black;
  color: white;

  transition: all 0.3s ease;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      border: 2px solid grey;
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    display: inline-block;
  }

  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: grey;

    &:hover {
      text-dec-right: 20px;
      border: 1px solid white;
      oration: underline;
    }
  }
`;
const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const Container = styled.div`
  position: fixed;

  .active {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Sidebar = () => {
  const auth = useAuth();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);

  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}>
        Click
      </Button>
      <SidebarContainer>
        <Logo>
          <img src={connectuLogo} alt="logo" />
        </Logo>
    
        <SlickBar clicked={click}>
          <Item
            clicked={click}
            onClick={() => setClick(false)}
            exact
            activeClassName="active"
            to={ROUTES.HERO}
          >
            <img src={Home} alt="Home" />
            <Text clicked={click}>Home</Text>
          </Item>

          {auth.user ? (
            <React.Fragment>
              <Item
                clicked={click}
                onClick={() => setClick(false)}
                activeClassName="active"
                to={ROUTES.VACANCIES}
              >
                <img src={vacancies} alt="Vacancies" />
                <Text clicked={click}>Vacancies</Text>
              </Item>

              <Item
                clicked={click}
                onClick={() => setClick(false)}
                activeClassName="active"
                to={ROUTES.CONTRACT}
              >
                <img src={Documents} alt="Procurement Contract" />
                <Text clicked={click}>Procurement Contract</Text>
              </Item>
              <Item
                clicked={click}
                onClick={() => setClick(false)}
                activeClassName="active"
                to={ROUTES.INTERVIEW}
              >
                <img src={vid} alt="Schedule Interview" />
                <Text clicked={click}>Schedule Interview</Text>
              </Item>
              <Item
                className="menuItem"
                id="signOutBtn"
                onClick={() => auth.signout()}
              >
                <img src={logout} alt="Schedule Interview" />
                <Text clicked={click}>Logout</Text>
                
              </Item>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Item
                clicked={click}
                onClick={() => setClick(false)}
                activeClassName="active"
                to="/About"
              >
                <img src={infoLogo} alt="About" />
                <Text clicked={click}>About</Text>
              </Item>
              <Item
                clicked={click}
                onClick={() => setClick(false)}
                activeClassName="active"
                to="/Login"
              >
                <img src={loginLogo} alt="Login" />
                <Text clicked={click}>Login</Text>
              </Item>
              <Item
                clicked={click}
                onClick={() => setClick(false)}
                activeClassName="active"
                to="/SignUp"
              >
                <img src={SignUpLogo} alt="SignUp" />
                <Text clicked={click}>Sign Up</Text>
              </Item>
            </React.Fragment>
          )}
        </SlickBar>
        <Profile clicked={profileClick}>
          <img
            onClick={() => handleProfileClick()}
            src="https://picsum.photos/200"
            alt="Profile"
          />
          <Details clicked={profileClick}>
            <Name>
              <h4>Jhon&nbsp;Doe</h4>
              <a href="/#">view&nbsp;profile</a>
            </Name>

            <Logout onClick={() => auth.signout()}>
              <img src={PowerOff} alt="logout" />
            </Logout>
          </Details>
        </Profile>
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
