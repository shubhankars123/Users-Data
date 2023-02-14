import React from 'react'

function Education(props) {
  return (
    <div className='card '>
        <div className='card-header'>
            <h5 className='text-center text-primary'>University</h5>
        </div>
        <div className="card-body">
            <p>
                <strong>University</strong>
                <span className='float-end text-danger'>{props.university}</span>
            </p>
        </div>

    </div>
  )
}

export default Education