import React, { useEffect, useState } from 'react';
import PnrInfoTable from './PnrInfoTable';
import PnrBookingInfo from './PnrBookingInfo';
import { optionsForPnrApi,urlForPnrApi } from '../../Utils/constants';

const PnrStatusBody = () => {
  const [pnrNumber, setPnrNumber] = useState('');
  // const [searchPnrNumber, setSearchPnrNumber] = useState('');
  const [pnrData, setPnrData] = useState('');


  const handleOnChangePnrNumber = (e) => {
    setPnrNumber(e.target.value);
  }
  const handleSearch =  () => {
    console.log("pnr :value is =", pnrNumber);
      fetchData();

  }



  const fetchData=async ()=>{
  const data = await fetch(urlForPnrApi+pnrNumber,optionsForPnrApi);
  const jsonData = await data.json();
  setPnrData(jsonData);
  console.log("Data is ",jsonData);
  }

  return (
    <div className='flex flex-col'>
      <div className='w-screen h-auto  flex px-8 flex-row   h-auto my-4  justify-center'>
        <input
          type="text"
          placeholder="Enter PNR Number"
          className="border-2 border-gray-500 hover:border-blue-500 rounded-md px-4 mx-4 my-4  h-12"
          value={pnrNumber}
          onChange={handleOnChangePnrNumber}
        />


        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 w-48 h-12 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {
        pnrData === '' ? <>
        <h1 className='flex justify-center items-center'>
          Please Enter PNR Number
          </h1></> :


          <div className='w-auto h-auto   flex flex-col  justify-center items-center'>
            <PnrBookingInfo data={pnrData.data}/>
            <PnrInfoTable data={pnrData.data}/>
          </div>

      }
    </div>

  )
}

export default PnrStatusBody
