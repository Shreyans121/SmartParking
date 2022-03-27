import React, { useState, useEffect }  from "react";
import '../App.css';
import Headertemp from "../Components/Headertemp";
import Content from "../Components/Content";
import ParkingSpots from "../Components/ParkingSpots";
import SearchCar from "../Components/SearchCar";
import SearchSlot from "../Components/SearchSlot";

import { Fragment } from 'react';
import { Layout } from '../Layout';

import * as api from "../api/index.js"; 

import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL+ "/image3.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

function Home() {

    

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Headertemp />
      <Content />
      
      {/*<ParkingSpots />*/}
      {/*<SearchCar allPlates={allPlates} />*/}
      
      {/*<SearchSlot />*/}

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6218.451959679004!2d77.03202660886484!3d28.611461657195193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMjjCsDM2JzM3LjIiTiA3N8KwMDInMTAuMCJF!5e0!3m2!1sen!2sin!4v1647890536570!5m2!1sen!2sin" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe> */}

    </div>
  );
}

export default Home;
