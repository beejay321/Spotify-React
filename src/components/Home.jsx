import { Button, Container, Row, Navbar, Nav, Col } from "react-bootstrap";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import MyNav from "./MyNav";

class Home extends React.Component {
  state = {
    value: "",
    query: "",
    songs: [],
    category: "",
    isLoading: false,
    isError: false,
  };

//   componentDidMount = async (props) => {
//     this.setState({
//       isLoading: true,
//     });

//     try {
//       const response = await fetch(
//         `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
//       );
//       console.log(response);
//       if (response.ok) {
//         let data = await response.json();
//         console.log(data.Search);
//         this.setState({
//           movies: data.Search,
//           isError: false,
//           isLoading: false,
//         });
//       } else {
//         console.log("we got an error");
//         this.setState({ isError: true, isLoading: false });
//       }
//     } catch (error) {
//       console.log(error);
//       this.setState({ isError: true, isLoading: false });
//     }
//   };

//   componentDidMount;

  render() {
    return (
      <Container fluid>
        <Row>
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
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
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
