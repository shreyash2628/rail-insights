import React, { useState } from 'react';
import FromToIcon from '../Assests/transfer.png';
import DatePickerMUI from '../Components/DatePickerMUI';
import ScrollableDiv from './ScrollableDiv.js';

const SearchTrains = () => {

  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);

  };

  const handleFromStationChange = (e) => {
    setFromStation(e.target.value);
  };

  const handleToStationChange = (e) => {
    setToStation(e.target.value);
  };

  function formatDate(inputDate) {

    const dateString = inputDate.toDateString();
    const date = dateString.split(' ').slice(1).join(' ');

    console.log(date);

    const months = {
      Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
      Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
    };
   

    const [month, day, year] = date.split(' ');

    const formattedDate = `${year}-${months[month]}-${day.length === 1 ? '0' + day : day}`;
    console.log(formattedDate);
    return formattedDate;
  }

  const handleSearch = () => {
    console.log('From Station:', fromStation);
    console.log('To Station:', toStation);
    const date = formatDate(selectedDate);

    console.log('Date:', date);
  };
  return (
    <div>
      <div className='w-screen h-auto  flex px-8 flex-row   h-auto my-4  justify-center'>
        <input
          type="text"
          placeholder="From Station"
          className="border-2 border-gray-500 hover:border-blue-500 rounded-md px-4 mx-4 my-4  h-12"
          value={fromStation}
          onChange={handleFromStationChange}
        />
        <img src={FromToIcon} className='h-14 py-2 mt-2'></img>
        <input
          type="text"
          placeholder="To Station"
          className="border-2 border-gray-500 hover:border-blue-500 rounded-md px-4 mx-4 my-4 h-12"
          value={toStation}
          onChange={handleToStationChange}
        />
        <div className=" rounded-md px-4 mx-4 my-1 w-56 h-12"
        >
          <DatePickerMUI onDateChange={handleDateChange} />

        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 w-48 h-12 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

       <div className='w-screen h-screen bg-slate-200 flex flex-row'>
        <div className='border border-4 bg-white rounded-xl w-1/5 h-screen'> 
              {/* //FILTER SECTION */}
        </div>

        <div className='border border-4 bg-slate-200 rounded-xl w-4/5 h-screen'> 
        <ScrollableDiv/>
        </div>



      </div> 

    </div>
  )
}

export default SearchTrains
