import React from 'react'

function Technical(props) {
  
  return (
    <div className='card mb-2'>
        <div className='card-header'>
            <h5 className='text-danger text-center'>Technical</h5>
        </div>
        <div className="card-body">
            <p>
                <strong>Domain</strong>
                <a href={props.url} target="" className='float-end text-warning' > {props.url} </a>
            </p>
            <p>
                <strong>Mac</strong>
                <span className='float-end text-danger'>{props.mac}</span>
            </p>
            <p>
                <strong>Ip</strong>
                <span className='float-end text-danger'>{props.ip}</span>
            </p>
        </div>

    </div>
  )
}

export default Technical