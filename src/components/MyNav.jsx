import { Button, Container, Row, Navbar, Nav, Col } from "react-bootstrap";
import React from "react";
import { Link, withRouter } from "react-router-dom";

class MyNav extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor is rendered");
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={2}>
            <Navbar
              fixed="left"
              expand="md"
              variant="dark"
              bg="dark"
              className="navbar justify-content-between"
            >
              <div className="navContainer">
                <Link to="/">
                  <img
                    src="logo/Spotify_Logo.png"
                    alt="Spotify_Logo"
                    width="131"
                    height="40"
                  />
                </Link>
                <Button
                  variant=""
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </Button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <ul>
                      <li>
                        <Link>Home</Link>
                      </li>
                      <li>
                        <Link>Your Library</Link>
                      </li>
                      <li>
                        <div className="input-group mt-3">
                          <input
                            type="text"
                            className="form-control mb-2"
                            id="searchField"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div
                            className="input-group-append "
                            //   style={{margin-bottom: "4%"}}
                          >
                            <Button
                              className="btn btn-outline-secondary btn-sm "
                              type="button"
                              variant="light"
                              id="button-addon1"
                            >
                              GO
                            </Button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="nav-btn">
                <Button className="btn signup-btn" type="button">
                  Sign Up
                </Button>
                <Button className="btn login-btn" type="button">
                  Login
                </Button>
                {/* <button className="btn login-btn" type="button">Login</button> */}
                <Link>Cookie Policy</Link> |<Link> Privacy</Link>
              </div>
            </Navbar>
          </Col>
          </Row>

         
     
      </Container>
    );
  }
}

export default withRouter(MyNav);
