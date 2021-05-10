import { Button, Container, Row, Navbar, Nav, Col } from "react-bootstrap";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import MyNav from "./MyNav";

class ArtistPage extends React.Component {
  state = {
    artist: "",
    artistToShow: [],
    isLoading: false,
    isError: false,
  };

  componentDidMount = async () => {
    let id = this.props.match.params.artistId;

    this.setState({
      isLoading: true,
    });

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=` + id
      );
      console.log(response);
      if (response.ok) {
        let artist = await response.json();
        console.log(artist);
        this.setState({
          artist: artist,
          artistToShow: artist.data,
          isError: false,
          isLoading: false,
        });
        console.log("songs parsed", artist.data);
        console.log("data parsed", this.state.artistToShow);
      } else {
        console.log("we got an error");
        this.setState({ isError: true, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }
  };

  render() {
    return (
      <Container fluid>
        <Row className="py-5">
          <Col xs={2}></Col>

          <div className="col-12 col-md-8 offset-md-3 mainPage">
            <div className="row justify-content-center">
              <div className="col-9 col-lg-11 mainLinks d-none d-md-flex"></div>
            </div>

            <Row>
              <Col md={10} lg={10} className="mt-5">
                <h2 className="titleMain">{}</h2>
                <div id="followers">1154386 followers</div>
                <div
                  className="d-flex justify-content-center"
                  id="button-container"
                >
                  <button
                    className="btn btn-success mr-2 mainButton"
                    id="playButton"
                  >
                    PLAY
                  </button>
                  <button
                    className="btn btn-outline-light mainButton"
                    id="followButton"
                  >
                    FOLLOW
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    );
  }
}

export default ArtistPage;
