"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi';

const NavItem = ({ link, items, title, order }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      {
        link ?
          <Link href={link?.url} className='flex items-center gap-2 select-none bg-darkGray py-3 px-3 rounded-lg'>{link?.title}</Link>
          :
          <div>
            <div onClick={() => { setShow(!show) }} className='flex items-center gap-2 select-none cursor-pointer bg-darkGray py-3 px-3 rounded-lg'>
               {title}
            </div>
            <div className={show ? 'bg-darkGray rounded-lg flex flex-col mt-2' : "hidden"}>
              {
                items?.map((item) => {
                  return <Link href={item?.url} className='flex gap-2 items-center select-none text-sm py-3 px-3 rounded-lg'>
                    <FiChevronRight className='text-green' />
                    <div className='flex justify-between items-center w-full'>
                      <div>{item?.title}</div>
                      <div className={order ? 'text-xs bg-green/30 font-medium rounded-full px-2 py-1' : 'hidden'} > 2</div>
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