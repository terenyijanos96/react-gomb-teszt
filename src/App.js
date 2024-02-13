import { useState } from "react";
import "./App.css";
import Gomb from "./components/Gomb";
import Kep from "./components/Kep";

function App() {
  const kepek = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Mudi_portrait.jpg/260px-Mudi_portrait.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Stbernardinsnow.jpg/1024px-Stbernardinsnow.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/41/Siberian_Huskies_line.jpg",
  ];

  const [kepindex, setKepIndex] = useState(0);

  function valtoztat(id) {
    if (id === "gomb-hatra") {
      console.log("Hátra...");
      if (kepindex === 0) {
        setKepIndex(kepek.length - 1);
      } else {
        setKepIndex(kepindex - 1);
      }
    }

    if (id === "gomb-elore") {
      console.log("Előre...");
      if (kepindex === kepek.length - 1) {
        setKepIndex(0);
      } else {
        setKepIndex(kepindex + 1);
      }
    }
  }

  return (
    <div className="App">
      <Gomb fuggveny={valtoztat} szoveg="hátra" id="gomb-hatra" />
      <Kep kep={kepek[kepindex]} />
      <Gomb fuggveny={valtoztat} szoveg="előre" id="gomb-elore" />
    </div>
  );
}

export default App;
