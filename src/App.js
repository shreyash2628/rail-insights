import logo from './logo.svg';
import './App.css';
import HeaderContainer from './Components/HeaderContainer';

function App() {
  return (
    <div className="flex flex-col bg-black h-screen ">
     <p className='underline flex justify-center text-white text-4xl mb-8'>Train-iN</p>

     <HeaderContainer />
    </div>
  );
}

export default App;
