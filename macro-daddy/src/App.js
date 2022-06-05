import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import CardList from "./Components/CardList";
import LandingPage from "./Components/WandingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <CardList /> */}
      <LandingPage />
    </div>
  );
}

export default App;
