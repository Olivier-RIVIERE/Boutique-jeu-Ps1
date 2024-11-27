import React from 'react'
import "./Card.css"

function Card(props) {
  const handleClickCard = (id) => {
    props.click(id);
  }
  return (
    <div className='card is-flex is-flex-direction-column is-justify-content-space-between' style={{ width: '450px', margin: '10px' }}>
      <div className='card-content'>
        <div className='card-image'>
          <figure className='image is-128x128'>
            <img src={"./assets/img/" + props.data.imgUrl} alt={'props.data.name'} />
          </figure>
        </div>
        <div className='media-content'>
          <h2 className='title is-2' style={{ margin: '2% 0' }}>{props.data.name}</h2>
          <p className='is-size-7'>{props.data.description}</p>
          <p className='has-text-info-light'>{props.data.qte > 0 ? props.data.qte + " en stock" : "Ce produit n'est plus disponible"}</p>
          <p className='has-text-link'>{props.data.price}€</p>
          <button className='button is-light' style={{ width: '50%', margin: '3% 0' }} onClick={() => handleClickCard(props.data.id)}>Achat</button>
        </div>
      </div>
    </div>
  )
}

export default Card
