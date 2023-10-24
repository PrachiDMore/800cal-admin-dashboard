import React from 'react'

const Input = ({ label, placeholder, type, textarea, onChange, value, readOnly = false, id }) => {
  return (
    <>
      <div className='Lexend flex flex-col justify-center'>
        {label && <label className='text-white' htmlFor={id}>{label}: </label>}
        {!textarea ? <input id={id} readOnly={readOnly} value={value} onChange={onChange} className='read-only:cursor-pointer px-4 py-3 mt-1 outline-none border border-textGray text-white bg-darkGray rounded-lg' type={type} placeholder={placeholder} /> : <textarea id={id} readOnly={readOnly} value={value} onChange={onChange} className='read-only:cursor-pointer px-4 py-3 h-36 resize-none mt-1 outline-none border border-textGray text-white bg-darkGray rounded-lg' placeholder={placeholder} ></textarea>}
      </div>
    </>
  )
}

export default Input