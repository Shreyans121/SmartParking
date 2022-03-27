import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImgCard from './ImgCard';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function Content() {
  const classes = useStyles();

  return (
    <div>
    <div className={classes.root}>
      <ImgCard title = {"Cars Parked"} desc = {"This card will show you the list of cars parked in the lot. It will tell us the unique licence number of the car parked as well as the time its been since the vehicle entered the Parking Lot."} link = {"image4.jpg"} />
      <ImgCard title = {"Parking Slots"} desc = {"This will show the status of all the slots available in the Parking Lot. It will tell us the unique alpha-numeric number of the slot as well as if it is occupied or vaccant currently."} link = {"image6.jpg"} />
    </div>
    <div className={classes.root}>
      <ImgCard title = {"Search Car"} desc = {"We can search whether the particular car is currently parked in the parking lot through its unique licence number."} link = {"image7.jpg"} />
      <ImgCard title = {"Search Parking Slots"} desc = {"We can search whether the particalar slot is currently occupied or vacant in the parking lot through its unique alpha-numeric slot number."} link = {"image8.jpg"} />
    </div>
    </div>
  );
}