import { useState } from 'react';
import logo from '../../assets/Logo.svg';
import menu from '../../assets/Menu_icon.svg';
import menu_close from '../../assets/Menu_close.svg';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prevOpen) => {
      const newOpenState = !prevOpen;
      if (newOpenState) {
        document.body.classList.add('darken');
      } else {
        document.body.classList.remove('darken');
      }
      return newOpenState;
    });
  };

  return (
    <header>
      <Link to="/" aria-label="Go to homepage">
        <img src={logo} alt="Logo"/>
      </Link>
      <img src={menu}  className='menu' alt="Menu" onClick={toggleMenu} />
      <nav className= {`${isOpen ? "is-open" : ""}`}>
        <img src={menu_close}  className='close-menu' alt="Menu" onClick={toggleMenu} />
        <ul aria-label="Main navigation">
          <li><Link to="/">Home</Link></li>
          <li><a href="#popular">Popular</a></li>
          <li><a href="#new">New</a></li>
          <li><a href="#trending">Trending</a></li>
          <li className="dropdown-center">
            <button className="dropdown-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" type="button">Business</button></li>
              <li><button className="dropdown-item" type="button">Technology</button></li>
              <li><button className="dropdown-item" type="button">Sports</button></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;