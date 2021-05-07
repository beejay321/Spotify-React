import { Button, Container, Row, Navbar, Nav, Col } from "react-bootstrap";
import React from "react";
import { Link, withRouter } from "react-router-dom";

class Player extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor is rendered");
  }

  render() {
    return (
      <Container fluid>
        
        <div className="player container-fluid fixed-bottom bg-container pt-1">
          <div className="row flex-nowrap justify-content-between playBar py-3">
            <div className="col-auto">
              <div className="playerArtistInfo d-flex">
                <img />
                <div className="d-flex flex-column pl-2">
                  <h6></h6>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="playerControls w-50 d-flex justify-content-between">
                <a href="#">
                  <img src="playerbuttons/Shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="playerbuttons/Previous.png" alt="previous" />
                </a>
                <a href="#">
                  <img src="playerbuttons/Play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="playerbuttons/Next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="playerbuttons/Repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progressContainer d-flex align-items-center">
                <span className="currentTime">00:00</span>
                <div className="progress w-100">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <audio></audio>
                  </div>
                </div>
                <span className="duration">00:00</span>
              </div>
            </div>
            <div className="col-auto mr-3">
              <div className="playerVolume">
                <i className="fa fa-volume-up"></i>
                <input type="range" value="100" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Player;
