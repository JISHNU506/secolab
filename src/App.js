import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import CardsWrapper from "./components/cardsWrapper";
import Home from "./components/home";

function App() {
  return (
    <>
    <Navbar/>
      <Home />
      <CardsWrapper />
      <Footer/>
    </>
  );
}

export default App;
