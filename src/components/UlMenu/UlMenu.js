import React from 'react';
import ItemMenu from '../ItemMenu/ItemMenu';




const UlMenu = (props) => {
  console.dir(props.dataMenu);
  return (
    <div className='navbar-menu'>
      <ul className="navbar-start">
        {/* array.map() est quasiment l'equivalent de array.forEach() */}
        {
          props.dataMenu.map((element, index) => {
            return (<ItemMenu data={element} key={index}></ItemMenu>);
          })
        }
      </ul>
    </div>
  )
};

export default UlMenu;