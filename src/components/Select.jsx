import React from 'react'

const Select = ({ label, onChange, value, id, options }) => {
  return (
    <>
      <div className='Lexend flex flex-col justify-center'>
        <label className='text-white' htmlFor="">{label}</label>
        <select id={id} value={value} onChange={onChange} className='px-4 py-3 mt-1 outline-none border border-textGray text-white bg-darkGray rounded-lg'>
        {!value && <option key={""} value={""}>{"Select"}</option>}
          {
            options?.map((option) => {
              return <option key={option.value} value={option.value}>{option.label}</option>
            })
          }
        </select>
      </div>
    </>
  )
}

export default Select