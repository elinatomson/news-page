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
          <li><Link to="/new">New</Link></li>
          <li><Link to="/popular">Popular</Link></li>
          <li><Link to="/trending">Trending</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;