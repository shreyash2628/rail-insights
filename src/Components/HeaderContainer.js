import React, { useState } from 'react';
import searchtrain from '../Assests/search-train.png';
import seats from '../Assests/seats.png';
import live_location from '../Assests/live_location.png';
import pnrIcon from '../Assests/pnr.png';



const HeaderContainer = () => {

    const [searchTrain, setSearchTrain] = useState(true);
    const [seatsAvailability, setSeatsAvailability] = useState(false);
    const [liveLocation, setLiveLocation] = useState(false);
    const [pnr, setPnr] = useState(false);


    return (
        <div className='border w-4/8  mx-48 h-36 bg-slate-200 rounded-2xl flex justify-center flex-row'>

            {/* Search Train Component */}
            <div className='w-48 h-26 my-6 mx-4 flex items-center justify-center flex-col' onClick={() => {
                setSearchTrain(true);
                setSeatsAvailability(false);
                setLiveLocation(false);
                setPnr(false);
            }}>
                <img className='' src={searchtrain}></img>
                <p>Search Train</p>
                {
                    searchTrain ? <div className='h-2 w-48 bg-black'></div> : <></>

                }
            </div>



            {/* PNR Component */}
            <div className='w-48 h-26 my-6 mx-4 flex items-center justify-center flex-col' onClick={() => {
                setPnr(true);
                setSearchTrain(false);
                setSeatsAvailability(false);
                setLiveLocation(false);
            }}>
                <img className='' src={pnrIcon}></img>
                <p>PNR Status</p>
                {
                    pnr ? <div className='h-2 w-48 bg-black'></div> : <></>

                }
            </div>


            {/* Seats Availability Component */}
            <div className='w-48 h-26 my-6 mx-4 flex items-center justify-center flex-col' onClick={() => {
                setSeatsAvailability(true);
                setSearchTrain(false);
                setLiveLocation(false);
                setPnr(false);
            }}>
                <img className='' src={seats}></img>
                <p>Seats Availability</p>
                {
                    seatsAvailability ? <div className='h-2 w-48 bg-black'></div> : <></>

                }
            </div>


            {/* Live Location Component */}
            <div className='w-48 h-26 my-6 mx-4 flex items-center justify-center flex-col' onClick={() => {
                setLiveLocation(true);
               setSeatsAvailability(false);
                setSearchTrain(false);
                setPnr(false);
            }}>
                <img className='' src={live_location}></img>
                <p>Train Live Status</p>
                {liveLocation ? <div className='h-2 w-48 bg-black'></div> : <></>}
            </div>

        </div>
    )
}

export default HeaderContainer
