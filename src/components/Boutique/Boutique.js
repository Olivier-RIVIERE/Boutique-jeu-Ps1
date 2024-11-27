import React, { useState } from "react";
import './Boutique.css';
import dataBoutique from "../../dataBoutique.js";
import Card from "../Card/Card.js";


function Boutique() {
  // dataBoutiqueState => getter (qui me donne les informations) || setDataBoutiqueState => (une fonction) setter 
  // useState(valeur) assigne une valeur à mon state
  const [dataBoutiqueState, setDataBoutiqueState] = useState(dataBoutique);
  function decrease(id) {
    let tmp = dataBoutiqueState[id];
    tmp.qte--;
    setDataBoutiqueState([...dataBoutiqueState,tmp]);
  }
  return (
    <div className="is-flex is-flex-wrap-wrap is-justify-content-space-evenly" style={{ margin: '5% 0 0' }}>
      {dataBoutiqueState.map((element, index) => {
        //element.id = index
        // spread operator => ...element, id:index
        return <Card key={index} data={{...element, id:index}} click={(e)=>decrease(e)}></Card>
      })}
      {/* {dataBoutiqueState.map((element, index) => <Card key={index} data={element}></Card>)} */}
    </div>
  )
}

// const Mafonction = () => {
//   //ici je peux ajouter plusieurs instructions contrairement à la Mafonction2
//   return <div>Ma fonction</div>
// }

// const Mafonction2 = () => <div>Ma fonction2</div>


export default Boutique