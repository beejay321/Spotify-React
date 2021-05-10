import { Button, Container, Row, Navbar, Nav, Col } from "react-bootstrap";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import MyNav from "./MyNav";

class Home extends React.Component {
  state = {
    value: "",
    query: "",
    albums: [],
    category: "",
    isLoading: false,
    isError: false,
  };

  componentDidMount = async () => {
    this.setState({
      isLoading: true,
    });

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem`
      );
      console.log(response);
      if (response.ok) {
        let songs = await response.json();
        console.log(songs.data);
        this.setState({
          albums: songs.data,
          isError: false,
          isLoading: false,
        });
        console.log("songs parsed", songs);
        console.log("data parsed", this.state.albums);
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
              <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                <Link id="Rock" href="#">
                  ROCK
                </Link>
                <Link id="Pop" href="#">
                  POP
                </Link>
                <Link id="Hip Hop" href="#">
                  HIP HOP
                </Link>
                <Link href="#">NEW RELEASES</Link>
                <Link href="#">DISCOVER</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <div id="searchResults" style={{ display: "none" }}>
                  <h2>Search Results</h2>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-10">
                <div id="results">
                  <h2 className="pl-3 text-white"></h2>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                    {this.state.albums.map((albumm) => (
                      <div className="col text-center">
                        <img
                          class="img-fluid"
                          src={albumm.album.cover_medium}
                          alt={albumm.album.title}
                          onClick={() =>
                            this.props.history.push(
                              "/albumpage/" + albumm.album.id
                            )
                          }
                        />

                        <p>
                          <Link
                            onClick={() =>
                              this.props.history.push(
                                "/albumpage/" + albumm.album.id
                              )
                            }
                          >
                            {albumm.album.title}
                          </Link>
                          <br />
                          <Link
                            onClick={() =>
                              this.props.history.push(
                                "/artistpage/" + albumm.artist.id
                              )
                            }
                          >
                            {albumm.artist.name}
                          </Link>
                          {/* <Link to="/artistpage">{albumm.id}</Link> */}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Home;
