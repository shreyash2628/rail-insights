import React from 'react';
import PnrInfoTable from './PnrInfoTable';

const PnrStatusBody = () => {
  return (
    <div className='flex flex-col'>
      <div className='w-screen h-auto  flex px-8 flex-row   h-auto my-4  justify-center'>
        <input
          type="text"
          placeholder="Enter PNR Number"
          className="border-2 border-gray-500 hover:border-blue-500 rounded-md px-4 mx-4 my-4  h-12"
        // value={fromStation}
        // onChange={handleFromStationChange}
        />


        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 w-48 h-12 rounded"
        // onClick={handleSearch}
        >
          Search
        </button>
      </div>


      <div className='w-auto h-auto   flex flex-col  justify-center items-center'>
      <PnrInfoTable />


         <PnrInfoTable/>

        </div>


      </div>

  )
}

export default PnrStatusBody
