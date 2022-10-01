import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PhoneBar from "./components/PhoneBar/PhoneBar";
import PriceChart from "./components/PriceChart/PriceChart";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
      <PriceChart></PriceChart>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
