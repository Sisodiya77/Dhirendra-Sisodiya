import React from 'react'


export default function Navbar(props) {
  return (
    <div className='flex justify-between itemd-center'>
      <div className='md:w-24 w-12 md:ml-24 ml-12'><img src={props.logo} alt=""/></div>
      <div className='md:mr-24 mr-12 my-4'>
        <a className='bg-indigo-900 rounded-lg p-2 text-white' href={props.Resume} download='Resume'>Resume</a></div>
    </div>
  )
}
