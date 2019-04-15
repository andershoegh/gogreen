import React from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import dashIcon from "../../images/dashIcon.png";
import { Container, Row } from "react-grid-system";
import "./NavBar.css";
import { firebase } from "../../Utils/Firebase";

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
      title = "Real-tids data";
      break;
    case "/products":
      title = "Produkter";
      break;
    default:
      title = "Startside";
  }

  if (props.authUser) {
    return (
      <div>
        <Container>
          <Row style={{ justifyContent: "space-between" }}>
            <Link style={{ margin: "10px" }} to="/">
              <Icon icon={dashIcon} />
            </Link>
            <span
              style={{
                margin: "10px",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                fontSize: "20px",
                color: "white"
              }}
            >
              {" "}
              {title}{" "}
            </span>

            <Link onClick={() => firebase.doSignOut()} to="/signin">
              {" "}
              Log out
            </Link>
          </Row>
        </Container>
      </div>
    );
  } else {
    return null;
  }
};

export default Navbar;
