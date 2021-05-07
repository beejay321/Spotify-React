import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Player from "./components/Player";
// import ArtistPage from "./components/ArtistPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <MyNav />
        <Route
          render={(routerProps) => <Home {...routerProps} />}
          path="/"
          exact
        />

        <Player />
      </Router>
    </div>
  );
};

export default App;
