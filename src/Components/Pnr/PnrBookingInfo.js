import React from 'react';
import RightIcon from '../../Assests/right.png';

const PnrBookingInfo = ({data}) => {
  return (
    <>
      <h1 className='text-2xl font-bold underline underline-offset-4'>{data.trainInfo.name} - {data.trainInfo.trainNo}</h1>
      <div className=' w-3/5 bg-slate-200 h-56 justify-center flex flex-row'>

        <div className='w-2/5  flex flex-col p-8 items-center justify-center'>
          <h2 className='text-3xl font-extrabold'>{data.boardingInfo.stationName}</h2>
          <h2 className='text-xl font-bold'> Platform - {data.boardingInfo.platform}</h2>
          <div className='flex flex-row'>
            <p className='font-semibold'>{data.trainInfo.dt} &nbsp; &nbsp; </p>

            <p className='font-semibold'>{data.boardingInfo.departureTime}</p>
          </div>
        </div>

        <div className='w-1/5  h-auto'>
          <img className='h-auto p-12 flex items-center justify-center w-auto' src={RightIcon} />
        </div>


        <div className='w-2/5  flex flex-col p-8 items-center justify-center'>
          <h2 className='text-3xl font-extrabold'>{data.destinationInfo.stationName}</h2>
          <h2 className='text-xl font-bold'> Platform - {data.destinationInfo.platform}</h2>
          <div className='flex flex-row'>
            <p className='font-semibold'>{data.trainInfo.dt} &nbsp; &nbsp; </p>

            <p className='font-semibold'>{data.destinationInfo.arrivalTime}</p>
          </div>
        </div>


      </div>
    </>

  )
}

export default PnrBookingInfo;
