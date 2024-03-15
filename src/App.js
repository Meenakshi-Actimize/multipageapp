import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Newarrivals from './pages/Newaarivals';
import Offercomp from './pages/Offers';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/Newarrivals' element = {<Newarrivals />}/>
        <Route path='/Offers' element = {<Offercomp />}/>
        <Route path='/Contact' element = {<Contact />}/>


      </Routes>

    </div>
  );
}

export default App;
