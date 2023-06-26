import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/home";
import NavBar from "./component/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
