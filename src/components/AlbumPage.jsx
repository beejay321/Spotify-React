import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { Link, withRouter } from "react-router-dom";
// import MyNav from "./MyNav";

class AlbumPage extends React.Component {
  state = {
    album: "",
    trackList: [],
    isLoading: false,
    isError: false,
  };

  componentDidMount = async () => {
    let id = this.props.match.params.albumId;

    this.setState({
      isLoading: true,
    });

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/` + id
      );
      console.log(response);
      if (response.ok) {
        let album = await response.json();
        console.log(album);
        this.setState({
          album: album,
          trackList: album.tracks.data,
          isError: false,
          isLoading: false,
        });
        // console.log("songs parsed", artist.data);
        console.log(this.state.trackList);        
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

          <div className="row justify-content-center">
            
            <div class="col-12 col-md-9 offset-md-3 mainPage">
              <div class="row mb-3">
                <div class="col-9 col-lg-11 mainLinks d-none d-md-flex">
                  <a id="Rock" href="#">
                    ROCK
                  </a>
                  <a id="Pop" href="#">
                    POP
                  </a>
                  <a id="Hip Hop" href="#">
                    HIP HOP
                  </a>
                  <a href="#">NEW RELEASES</a>
                  <a href="#">DISCOVER</a>
                </div>
              </div>
              <div class="row">
                <div id="img-container" class="col-md-3 pt-5 text-center">
                  <img
                    src={this.state.album.cover}
                    class="card-img img-fluid"
                    alt="Album"
                  />
                  <div class="mt-4 text-center">
                    <p class="album-title">{this.state.album.title}</p>
                  </div>
                  <div class="text-center">
                    <p class="artist-name"></p>
                  </div>
                  <div class="mt-4 text-center">
                    <button id="btnPlay" class="btn btn-success" type="button">
                      Play
                    </button>
                  </div>
                </div>

                <div class="col-md-8 p-5">
                  <div class="row">
                    <div id="trackList" class="col-md-10 mb-5">
                      <div id="err"></div>

                       {this.state.trackList.map((song) => (
                        <div class="py-3 trackHover">
                          <a
                            href="#"
                            class="card-title trackHover px-3"
                            style={{ color: "white" }}
                          >
                         {song.title} 
                          </a>
                          <small
                            class="duration pr-3"
                            style={{ color: "white" }}
                          >
                            {song.duration}
                          </small>
                        </div>
                      ))} 

                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </Col> */}
            {/* </Row> */}
          </div>
        </Row>
      </Container>
    );
  }
}

export default AlbumPage;
