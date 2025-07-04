import "./App.css";
import { Lotties } from "./commom/Lottie";
import Home from "./pages/Home";
import Particle from "./commom/Particle";

function App() {
  return (
    <>
      <div className="GridPattern">
        <div className="OverlayColor"></div>
        <Lotties />
        <div className="Orb"></div>
        <Particle />
      </div>
      <Home />
    </>
  );
}

export default App;