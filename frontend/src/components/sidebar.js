import React from 'react'

function Sidebar() {
  return (
    <div className='container border bg-primary text-white mx-1 my-4'>
        <div className='row  bg-primary text-white'>
            products
        </div>
        <div className='row mx-1 my-4 '>
            car
        </div>
        <div className='row mx-1 my-4 '>
            bike
        </div>
        <div className='row mx-1 my-4 '>
            other
        </div>
    </div>
  )
}

export default Sidebar;