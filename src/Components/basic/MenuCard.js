import React from 'react'

const MenuCard = ({ menuData }) => {
  return (
    <>
      <div className="main-container">
        {
          menuData.map((currentElem) => {
            const { id, name, category, description, image, price } = currentElem;
            return (
              <>
                <div className="card-container" key={currentElem}>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-number">{id}</div>
                      <div className='card-author'> {category}</div>
                      <div className="card-title">{name}</div>
                      <img className='card-image' src={image} alt="" />
                      <div className="card-description">{description}</div>
                      <div className="card-read">Read</div>
                     
                      <div className="card-price"> Price : {price}</div>
                      <div className="card-tag">Order Now</div>
                    </div>
                  </div>
                </div>

              </>
            )
          })
        }
      </div>
    </>
  )
}

export default MenuCard
