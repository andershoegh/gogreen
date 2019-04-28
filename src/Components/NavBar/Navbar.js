import React from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import dashIcon from "../../images/dashIcon.png";
import { Container } from "react-grid-system";
import "./NavBar.css";
import { firebase } from "../../Utils/Firebase";
import exitIcon from "../../images/exit.png";

const Navbar = props => {
  let title = "";
  switch (props.location.pathname) {
    case "/community":
      title = "Fælles forbrug";
      break;
    case "/myusage":
      title = "Mit forbrug";
      break;
    case "/realtime":
      title = "Forecasting";
      break;
    case "/products":
      title = "Log produkter";
      break;
    case "/":
      title = "";
      break;
    default:
      title = "404";
  }

  if (props.authUser && title !== "404") {
    return (
      <Container>
        <div className="navBar-wrapper">
          <div className="logo-wrapper">
            <Link className="logo-link" to="/">
              <Icon icon={dashIcon} />
            </Link>
          </div>

          <div className="title-wrapper">
            <span className="navBarTitle">{title}</span>
          </div>

          <div className="logOut-wrapper">
            <Link onClick={() => firebase.doSignOut()} to="/signin">
              <Icon icon={exitIcon} />
            </Link>
          </div>
        </div>
      </Container>
    );
  } else {
    return null;
  }
};

export default Navbar;
