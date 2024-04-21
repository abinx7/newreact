import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Customcard from './components/CustomCard/Customcard';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Customcard/> */}
      <Homepage/>
      {/* <Welcome/> */}
      <Routes>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
