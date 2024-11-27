import React from 'react';




const ItemMenu = (props) => (
  <a className="navbar-item" href={props.data.url}>
    <li>{props.data.titre}</li>
  </a>
);

export default ItemMenu;