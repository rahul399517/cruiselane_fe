import "./App.css";
import HomePage from "./pages/home";
import NavBar from "./component/navbar";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <NavBar />

      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
