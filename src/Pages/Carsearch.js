import React, { Fragment, useState, useEffect } from 'react';
import SearchCar from "../Components/SearchCar";
import * as api from "../api/index.js"; 


export const Carsearch = () => {
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
      <SearchCar allPlates={allPlates} />
    </Fragment>
  );
};
