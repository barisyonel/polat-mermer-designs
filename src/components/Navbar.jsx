import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import './navbar.css';
import logoImage from '../assets/polatmermer1.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoImage} className="navbar-logo-image" alt="Logo" />
        </Link>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">Ana Sayfa</Link>
          <Link to="/products" className="navbar-link">Ürünler</Link>
          <Link to="/designs" className="navbar-link">Tasarım Ürünler</Link>
          <Link to="/about" className="navbar-link">Hakkımızda</Link>
          <Link to="/contact" className="navbar-link">İletişim</Link>
        </div>

        <button ref={buttonRef} className="navbar-mobile-button" onClick={toggleMenu}>
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        <div ref={menuRef} className={`navbar-mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="navbar-mobile-links">
            <Link to="/" className="navbar-link" onClick={toggleMenu}>Ana Sayfa</Link>
            <Link to="/products" className="navbar-link" onClick={toggleMenu}>Ürünler</Link>
            <Link to="/designs" className="navbar-link" onClick={toggleMenu}>Tasarım Ürünler</Link>
            <Link to="/about" className="navbar-link" onClick={toggleMenu}>Hakkımızda</Link>
            <Link to="/contact" className="navbar-link" onClick={toggleMenu}>İletişim</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 