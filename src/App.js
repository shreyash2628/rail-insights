import './App.css';
import HeaderContainer from './Components/HeaderContainer';
import BodyContainer from './Components/BodyContainer';
import { useState } from 'react';

function App() {
  const[selectedComp,setSelectedComp]=useState('searchTrain');
  const getData = (data)=>{
    // console.log(data);
    setSelectedComp(data);
  }
  return (
    <div className="flex flex-col bg-black h-screen  w-screen ">
     <p className='underline flex justify-center text-white text-4xl mb-8'>Train-iNsights</p>
     <HeaderContainer function={getData} />
     <BodyContainer activeTab={selectedComp}/>
    </div>
  );
}

export default App;
