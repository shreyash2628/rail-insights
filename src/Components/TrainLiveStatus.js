import React, { useState } from 'react';
import Dot from '../Assests/dot.png';

const TrainLiveStatus = () => {
  const[trainNumber,setTrainNumber] = useState('');
  const[showLiveLocationOfTrain,setShowLiveLocationOfTrain] = useState(false);


  const handleSearchLiveLocationOfTrain = ()=>{
      console.log('Train Number',trainNumber);
      // setTrainNumber('')
      setShowLiveLocationOfTrain(true);
  }

  const handleOnChangeTrainNumber = (e)=>{
    setTrainNumber(e.target.value)
  }

  return (
    <div className='border border-4 border-black w-screen h-auto flex flex-col m-4'>

      <div className='flex flex-col'>
        <div className='w-screen h-auto  flex px-8 flex-row   h-auto my-4  justify-center'>
          <input
            type="text"
            placeholder="Enter Train Number"
            className="border-2 border-gray-500 hover:border-blue-500 rounded-md px-4 mx-4 my-4  h-12"
           value={trainNumber }
         onChange={handleOnChangeTrainNumber}
          />


          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 w-48 h-12 rounded"
           onClick={handleSearchLiveLocationOfTrain}
          >
            Search
          </button>
        </div>

      </div>

        {/* container */}

        {
          showLiveLocationOfTrain?<div className='flex bg-green-300 w-auto pt-4 lg:h-96 m-8 overflow-y-auto flex-col'>


          <div className='h-20  border border-3 border-black mx-8 flex flex-row'>
            <div className='w-1/6 flex items-center py-4 justify-center'>
              <h1>02:21 am</h1>
            </div>
            <div className='w-1/12 flex items-center justify-center'>
              <div className='w-3 bg-yellow-400 h-full flex items-center justify-center'>
                <img src={Dot} alt='' />
              </div>
            </div>
          </div>
  
          <div className='h-20  border border-3 border-black mx-8 flex flex-row'>
            <div className='w-1/6 flex items-center py-4 justify-center'>
              <h1>02:21 am</h1>
            </div>
            <div className='w-1/12 flex items-center justify-center'>
              <div className='w-3 bg-yellow-400 h-full flex items-center justify-center'>
                <img src={Dot} alt='' />
              </div>
            </div>
          </div>
  
  
  
        </div> :<></>
        }

      

    </div>
  );
};

export default TrainLiveStatus;

