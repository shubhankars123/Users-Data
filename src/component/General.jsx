import React from 'react'

function General(props) {
  const {fName, lName, email, phone, age, user} = props
  return (
    <div className='card mb-2'>
        <div className='card-header'>
            <h5 className='text-center text-success'>General Details</h5>
        </div>
        <div className="card-body">
            <h5 className='text-center text-primary'>{fName} {lName}</h5>
            <p>
                <strong>Email</strong>
                <span className='float-end text-danger'>{email}</span>
            </p>
            <p>
                <strong>Phone</strong>
                <span className='float-end text-danger'>{phone}</span>
            </p>
            <p>
                <strong>Age</strong>
                <span className='float-end text-danger'>{age}</span>
            </p>
            <p>
                <strong>Email</strong>
                <span className='float-end text-danger'>{user}</span>
            </p>
        </div>

    </div>
  )
}

export default General