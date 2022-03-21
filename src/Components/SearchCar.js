import React, { useState } from "react";
// import * as api from "../api/index.js"; // import all from api
// import "./NumberPlate.css";
import moment from 'moment';

const NumberPlate = (props) => {

    const [plateToSearch, setPlateToSearch] = useState("");


    const getTime = (str)=>{
        const t = Date(str);
        return(
            <div>
                {moment(str).fromNow()}
            </div>
        )
    }


    const showSearchedPlate = () => {
        return(
            <div>
                <ol>
                    {
                        props.allPlates.map( (plate) => {
                            if(plate.numberPlate == plateToSearch)
                            {
                                return(
                                    <li>         
                                        <div className="time">
                                            { getTime(plate.createdAt) }
                                        </div>
                                    </li>
                                )
                            }
                        } ).reverse()
                    }
                </ol>
            </div>
        )
    }

    return (

        <>
        
            <div style={{ margin: "2rem" }}>
                <h3>Car arrived at : </h3>

                {showNumberPlates()}

            </div>
        
        </>
        
    );
};

export default NumberPlate;