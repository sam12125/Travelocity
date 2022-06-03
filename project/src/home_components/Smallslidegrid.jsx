import React from 'react'

const Smallslidegrid = ({image,type,des}) => {
  return (
    <div>
        <div>
            <img src={image} alt="image" />
        </div>
        <h3>{type}</h3>
        <p>{des}</p>
    </div>
  )
}

export default Smallslidegrid