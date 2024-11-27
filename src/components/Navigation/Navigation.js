import React from 'react';
import Logo from '../Logo/Logo';
import UlMenu from '../UlMenu/UlMenu';
import Burger from '../Burger/Burger';
import Search from '../Search/Search';

const dataMenu = [
  {
    titre: "Boutique",
    url: "#",
  },
  {
    titre: "Panier",
    url: "#",
  },
  {
    titre: "Contact",
    url: "#",
  }
]

const Navigation = () => {
  return (
    <nav className='navbar is-fixed-top is flex is-justify-content-space-between'>
      {/* La props children (ici"Ceppic) sera systematiquement au format string */}
      <div className='navbar-brand is flex is-align-items-center'>
        <Logo>Retro Game</Logo>
        {/* dataMenu (le 1er) est un props (un attribut)*/}
        <div className="navbar-burger is-hidden-desktop">
          <Burger></Burger>
        </div>
      </div>
      <UlMenu dataMenu={dataMenu}></UlMenu>
      <div className="navbar-item is-flex is-align-items-center is-justify-content-flex-start is-hidden-touch">
        <Search></Search>
      </div>
    </nav>
  )
}

export default Navigation