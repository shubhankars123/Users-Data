import React from 'react'

function Personal(props) {
  return (
    <div className='card'>
      <img src={props.image} alt="" className='card-img-top' />
      <div className='card-body'></div>
    </div>
  )
}

export default Personal
