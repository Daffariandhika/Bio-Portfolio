import "./App.css";
import { Orbit } from "./commom/Orbit";
import Home from "./pages/Home";
import Particle from "./commom/Particle";
import { Lotties } from "./commom/Lottie";

function App() {
  return (
    <>
      <div className="GridPattern">
        <div className="OverlayColor"></div>
        <Orbit />
        <Lotties />
        <div className="Orb"></div>
        <Particle />
      </div>
      <Home />
    </>
  );
}

export default App;