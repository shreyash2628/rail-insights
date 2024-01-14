import React, { useEffect, useState } from 'react';
import PnrInfoTable from './PnrInfoTable';
import PnrBookingInfo from './PnrBookingInfo';
import { optionsForPnrApi, urlForPnrApi } from '../../Utils/constants';
import ShimmerUiForPnrStatus from './ShimmerUiForPnrStatus';

const PnrStatusBody = () => {
  const [pnrNumber, setPnrNumber] = useState('');
  // const [searchPnrNumber, setSearchPnrNumber] = useState('');
  const [pnrData, setPnrData] = useState('Please Enter Pnr Number');


  const handleOnChangePnrNumber = (e) => {
    setPnrNumber(e.target.value);
  }
  const handleSearch = () => {
    console.log("pnr :value is =", pnrNumber);
    fetchData();

  }



  const fetchData = async () => {
    setPnrData('Searching');
    try {

    const data = await fetch(urlForPnrApi + pnrNumber, optionsForPnrApi);
    const jsonData = await data.json();
    {
      jsonData.status?    setPnrData(jsonData):setPnrData(jsonData.error);

    }
    console.log("Data is ", jsonData);
    }catch(error){
        <h1>Error</h1>
    }
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
        pnrData === 'Searching' ? (
          <div className='flex items-center justify-center w-screen'>
                      <ShimmerUiForPnrStatus />
            </div>
        ) : (
          pnrData === 'Please Enter Pnr Number' ? (
            <h1 className='flex justify-center items-center'>
              {pnrData}
            </h1>
          ) : 
          (
              pnrData === 'PNR info not found. PNR data not found.'?(
                <h1 className='flex justify-center items-center'>
                {pnrData}
              </h1>
              ): (
                pnrData?.status?
                <div className='w-auto h-auto flex flex-col justify-center items-center'>
                  <PnrBookingInfo data={pnrData?.data} />
                  <PnrInfoTable data={pnrData?.data} />
                  
                </div>:<>
                <h1 className='flex justify-center items-center'>
                PNR info not found. PNR data not found.
              </h1>
                </>
              )
          )
          
          
         
        )
      }

    </div>

  )
}

export default PnrStatusBody
