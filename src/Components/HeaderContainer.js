import React, { useEffect, useState } from 'react';
import searchtrain from '../Assests/search-train.png';
import seats from '../Assests/seats.png';
import live_location from '../Assests/live_location.png';
import pnrIcon from '../Assests/pnr.png';

const HeaderContainer = (props) => {

    const [activeTab, setActiveTab] = useState('searchTrain');
    useEffect(() => {
        props.function(activeTab);
    }, [activeTab, props]);

    return (
        <div className='border h-14 w-full  bg-black  flex justify-end flex-row'>

            <button className='text-white pr-8 h-14' onClick={() => {
                setActiveTab('searchTrain');
            }}>Search Train</button>
             {
                    activeTab === 'searchTrain' ? <div className='h-2  bg-white'></div> : <></>
                }

            <button className='text-white pr-8' onClick={() => {
                setActiveTab('pnrStatus');
            }}>Pnr Status</button>

            <button className='text-white pr-8' onClick={() => {
                setActiveTab('seatsAvailability');
            }}>Seats Availability</button>

            <button className='text-white pr-12' onClick={() => {
                setActiveTab('liveLocation');
            }}> Live Location</button>



        </div>
    )
}

export default HeaderContainer;
