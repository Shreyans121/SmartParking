import React from "react";
import './App.css';
import Header from "./Components/Header";
import NumberPlate from "./Components/NumberPlate";
import ParkingSpots from "./Components/ParkingSpots";

function App() {
  return (
    <div>
      <Header />
      <NumberPlate />
      <ParkingSpots />
    </div>
  );
}

export default App;
