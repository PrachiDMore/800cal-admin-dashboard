import React from 'react'
import Link from 'next/link'

const Button = ({ className, text, link, onClick, type }) => {
  return (
    <>
      {link ? <div className={'Lexend flex items-center  ' + className}>
        <Link href={link} className='w-full bg-lightgreen text-center px-4 py-3 rounded-lg hover:bg-darkgreen duration-300'>{text}</Link>
      </div> : <div className={'Lexend flex items-center  ' + className}>
        <button type={type} onClick={onClick} className='w-full bg-lightgreen text-center px-4 py-3 rounded-lg hover:bg-darkgreen duration-300'>{text}</button>
      </div>}
    </>
  )
}

export default Button