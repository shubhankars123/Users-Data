import React, { useEffect, useState } from 'react'
import User from './component/User'

const url = "https://dummyjson.com"

function App() {

  const [users, setUsers] = useState([])

  const getUserData = async()=> {
    await fetch(`${url}/users`)
      .then(res => res.json())
      .then(out => {
        console.log('output =', out)
        setUsers(out.users)
      }).catch(err => console.log(err.message))
  }

  useEffect(() => {
    getUserData()
  },[])
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h3 className='display-3 text-success'>Users</h3>
        </div>
      </div>

    <div className='row'>
      {
        users.map((item,index)=>{
          return(

            users.map((item,index)=>{
              return(
                <User key={index} {...item} />
              )
            })

            // <div className='col-md-12 mt-2 mb-2' key={index}>
            //   <div className='card'>
            //     <div className='card-body'>
            //       <div className='row'>
            //         <div className='col-md-6'>
            //           <General name={item.firstName} email={item.email} />
            //         </div>
            //         <div className='col-md-6'>
            //           <Personal />
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>
          )
        })
      }
    </div>

    </div>
  )
}

export default App;