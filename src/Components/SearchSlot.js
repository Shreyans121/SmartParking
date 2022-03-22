import React, { useState } from "react";
// import * as api from "../api/index.js"; // import all from api
// import "./NumberPlate.css";
import moment from 'moment';
import { TextField, Button} from '@material-ui/core';
// import ParkingSpots from "./ParkingSpots";
import "./SearchCar.css";

const SearchSlot = (props) => {

    const [slotToSearch, setSlotToSearch] = useState(0);
    const [mapToShow, setMapToShow] = useState({});

    const maps_arr = [
        {
            slot : 102,
            link : "https://maps.app.goo.gl/qr46ViKJA6DWexBx9",
            floor : 1,
            block : "B"
        },
        {
            slot : 302,
            link : "https://maps.app.goo.gl/rAySCbx3YFiouCK58",
            floor : 3,
            block : "D"
        }
    ]


    const showSearchedSlot = () => {
        
        // console.log(carsToShow.length)
        if(mapToShow.slot)
        {

            console.log("map", mapToShow)

        return(
            
            <div>
                <div>
                    <h3> Location : <span> <a href={mapToShow.link} target = "_blank"> Here </a> </span>  </h3>
                </div>
{/* 
                <div>
                    <ol>
                        {
                            // console.log("carsToShow", carsToShow)
                            carsToShow.map( (plate) => {
                                if(plate)
                                {
                                    return(
                                        <li>         
                                            <div className="time">
                                                { getTime(plate.createdAt) }
                                            </div>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ol>
                </div> */}
            </div>
        )

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let flag = false;
        for(let i=0; i<2; i++)
        {
            if(maps_arr[i].slot == slotToSearch)
            {
                setMapToShow(maps_arr[i]);
                flag = true;
            }
        }

        if(flag == false)
        {
            setMapToShow({});
        }

        // setCarsToShow( props.allPlates.map( (plate) => {
        //     if(plate.numberPlate == plateToSearch)
        //     {
        //         return( 
        //             plate
        //         )    
        //     }
        // } ).reverse() )


    }

    return (

        <div style={{ margin: "2rem" }} >
            <h3>Search For a Slot Location </h3>
            
            <div className="searchbar">
                <form autoComplete="off"  onSubmit={handleSubmit}>
                    <TextField className="search" name="searched" variant="outlined" label="searched"  value={slotToSearch} onChange={(e) => setSlotToSearch(e.target.value)} />
                    {/* <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} /> */}
                   
                    <Button className="submit" variant="contained" color="primary" size="large" type="submit" >Submit</Button>
                    {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> */}
                </form>
            </div>
        
            <div style={{ margin: "2rem" }} >

            { showSearchedSlot() }
                
            </div>
        
        </div>
        
    );
};

export default SearchSlot;