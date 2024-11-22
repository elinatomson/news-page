import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer'
import Main from './components/sections/Main'
import Aside from './components/sections/Aside'

function App() {
  return (
    <Router>
      <Header/>
      <Main/>
      <Aside/>
      <Footer/>
    </Router>
  );
}

export default App;
