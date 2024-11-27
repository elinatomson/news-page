import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import Main from './components/sections/Main';
import Aside from './components/sections/Aside';
import New from './components/sections/New';
import Popular from './components/sections/Popular';
import Trending from './components/sections/Trending';

function App() {
  return (
    <Router>
      <Header/>
      <Main/>
      <Aside/>
      <Popular/>
      <New/>
      <Trending/>
      <Footer/>
    </Router>
  );
}

export default App;
