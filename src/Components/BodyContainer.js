import React from 'react'
import PnrStatus from './Pnr/PnrStatus';
import SeatsAvaiability from './SeatsAvailability'; 
import SearchTrains from './SearchTrains/SearchTrains';
import TrainLiveStatus from './TrainLiveStatus';

const BodyContainer = (props) => {

  return (
    <div className='border  h-full   flex justify-center flex-row'>
      {
        props.activeTab === 'searchTrain' ? <SearchTrains /> : <></>
      }
      {
        props.activeTab === 'pnrStatus' ? <PnrStatus /> : <></>
      }
      {
        props.activeTab === 'seatsAvailability' ? <SeatsAvaiability /> : <></>
      }
      {
        props.activeTab === 'liveLocation' ? <TrainLiveStatus /> : <></>
      }
    </div>
  )
}

export default BodyContainer;
