import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
// import Footer from './Components/Footer.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Gallery from './Pages/Gallery.js';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path='/Gallery' element={<About/>} />
        </Routes>
      {/* <Footer /> */}
    </Router>
  </div>
  );
}

export default App;
