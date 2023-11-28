import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ className, text, link, onClick, type, disabled }) => {
  return (
    <>
      {link ? <div className={'Lexend flex items-center  ' + className}>
        <Link to={link} className='w-full bg-lightgreen text-center px-4 py-3 rounded-lg hover:bg-darkgreen duration-300'>{text}</Link>
      </div> : <div className={'Lexend flex items-center  ' + className}>
        <button type={type} disabled={disabled} onClick={onClick} className='disabled:cursor-not-allowed w-full bg-lightgreen text-center px-4 py-3 rounded-lg hover:bg-darkgreen duration-300'>{text}</button>
      </div>}
    </>
  )
}

export default Button