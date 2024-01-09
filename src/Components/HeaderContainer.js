import React, { useEffect, useState } from 'react';
import searchtrain from '../Assests/search-train.png';
import seats from '../Assests/seats.png';
import live_location from '../Assests/live_location.png';
import pnrIcon from '../Assests/pnr.png';

const HeaderContainer = (props) => {

    const [activeTab, setActiveTab] = useState('searchTrain');
    useEffect(()=>{
        props.function(activeTab);
    },[activeTab,props]);

    return (
        <div className='border w-4/8  mx-48 h-36 bg-slate-200 rounded-2xl flex justify-center flex-row'>

            {/* Search Train Component */}
            <div className='w-48 h-26 my-6 mx-4 flex items-center justify-center flex-col' onClick={() => {
                setActiveTab('searchTrain');
            }}>
                <img alt='searchTrain' src={searchtrain}></img>
                <p>Search Train</p>
                {
                    activeTab === 'searchTrain' ? <div className='h-2 w-48 bg-black'></div> : <></>
                }
            </div>

            {/* PNR Component */}
            <div className='w-48 h-26 my-6 mx-4 flex items-center justify-center flex-col' onClick={() => {
                setActiveTab('pnrStatus');
            }}>
                <img alt='pnrStatus' src={pnrIcon}></img>
                <p>PNR Status</p>
                {
                    activeTab === 'pnrStatus' ? <div className='h-2 w-48 bg-black'></div> : <></>

                }
            </div>

            {/* Seats Availability Component */}
            <div className='w-48 h-26 my-6 mx-4 flex items-center justify-center flex-col' onClick={() => {
                setActiveTab('seatsAvailability');

            }}>
                <img alt='seatsAvailable' src={seats}></img>
                <p>Seats Availability</p>
                {
                    activeTab === 'seatsAvailability' ? <div className='h-2 w-48 bg-black'></div> : <></>

                }
            </div>

            {/* Live Location Component */}
            <div className='w-48 h-26 my-6 mx-4 flex items-center justify-center flex-col' onClick={() => {
                setActiveTab('liveLocation');

            }}>
                <img src={live_location} alt='live-location'></img>
                <p>Train Live Status</p>
                {activeTab === 'liveLocation' ? <div className='h-2 w-48 bg-black'></div> : <></>}
            </div>
        </div>
    )
}

export default HeaderContainer;
