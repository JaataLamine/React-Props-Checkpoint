import "./App.css";
import { PlayersList } from "./components/PlayersList";
import backgroundImg from "./images/stadium.jpg";

// Variables for inline styling
const style = {
  backgroundImage: `url(${backgroundImg})`,
  height: "2500",
};
const styleHeader = {
  fontSize: "1.5rem",
  fontWeight: 700,
  textAlign: "center",
  marginLeft: 430,
};

function App() {
  return (
    <div style={style} className="d-grid gap-4">
      <nav className="navbar navbar-dark bg-dark sticky-top">
        <div className="container-sm">
          <a style={styleHeader} className="navbar-brand" href="#nowhere">
            FIFA PLAYERS CARDS
          </a>
        </div>
      </nav>
      <div className="container-sm  mb-4">
        <PlayersList />
      </div>
    </div>
  );
}

export default App;
