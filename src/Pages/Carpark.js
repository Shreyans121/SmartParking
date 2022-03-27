import React, { Fragment, useState, useEffect } from 'react';
import NumberPlate from "../Components/NumberPlate";
import * as api from "../api/index.js"; 


export const Carpark = () => {
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
    <Fragment>
      <NumberPlate allPlates={allPlates}/>
    </Fragment>
  );
};
