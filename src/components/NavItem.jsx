import React, { useState } from 'react'
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NavItem = ({ link, items, title }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      {
        link ?
          <Link to={link?.url} className='flex items-center gap-2 select-none bg-darkGray py-3 px-3 rounded-lg'>{link?.title}</Link>
          :
          <div className='flex flex-col'>
            <div onClick={() => { setShow(!show) }} className='flex items-center gap-2 select-none cursor-pointer bg-darkGray py-3 px-3 rounded-lg'>
              {title}
            </div>
            <div className={show ? 'bg-darkGray rounded-lg flex flex-col mt-2' : "hidden"}>
              {
                items?.map((item, index) => {
                  return <Link to={item?.url} key={item.url + index} className='flex gap-2 items-center select-none text-sm py-3 px-3 rounded-lg'>
                    <FiChevronRight className='text-green' />
                    <div className='flex justify-between items-center w-full'>
                      <div>{item?.title}</div>
                      {item?.number !== null && <div className={'text-xs bg-green/30 font-medium rounded-full px-2 py-1'} >{item.number}</div>}
                    </div>
                  </Link>
                })
              }
            </div>
          </div >
      }
    </>
  )
}

export default NavItem