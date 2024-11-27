import React, { useState } from 'react';
import { FaBars, FaX } from "react-icons/fa6";


const Burger = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenu = () => {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('is-active');
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className="navbar-burger" onClick={toggleMenu}>
     {isMenuActive ? <FaX /> : <FaBars />}
    </div>
  );
};

export default Burger;