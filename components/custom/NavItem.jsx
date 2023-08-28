import React, { useState } from 'react'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi';

const NavItem = ({ link, items, title }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      {
        link ?
          <Link href={link?.url} className='select-none bg-darkGray py-2 px-3 rounded-lg'>{link?.title}</Link>
          :
          <div>
            <div onClick={() => { setShow(!show) }} className='select-none cursor-pointer bg-darkGray py-2 px-3 rounded-lg'>
              {title}
            </div>
            <div className={show ? 'bg-darkGray rounded-lg flex flex-col mt-2' : "hidden"}>
              {
                items?.map((item) => {
                  return <Link to={item?.url} className='flex gap-2 items-center select-none text-sm py-2 px-3 rounded-lg'>
                    <FiChevronRight className='text-green' />
                    <div>
                      {item?.title}
                    </div>
                  </Link>
                })
              }
            </div>
          </div>
      }
    </>
  )
}

export default NavItem