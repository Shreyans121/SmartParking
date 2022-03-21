import React, { useState, useEffect }  from "react";
import './App.css';
import Header from "./Components/Header";
import NumberPlate from "./Components/NumberPlate";
import ParkingSpots from "./Components/ParkingSpots";

import * as api from "./api/index.js"; // import all from api

function App() {

    const [allPlates, setAllPlates] = useState([]);

    const getAllPlates = async () => {
        try {
            console.log("getAllPosts called");

            const { data } = await api.fetchPosts();

            console.log(data);

            // data.sort((obj1, obj2) => obj1.createdAt - obj2.createdAt);

            setAllPlates(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getAllPlates();
    }, []);

  return (
    <div>
      <Header />
      <NumberPlate allPlates={allPlates}/>
      <ParkingSpots />
    </div>
  );
}

export default App;
