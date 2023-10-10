import Button from '@/components/custom/Button'
import Layout from '@/components/custom/Layout'
import React from 'react'

const page = () => {
  return (
    <div>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Programs
          </div>

          <div className='w-full p-5 grid gap-4'>
            <div className='w-full flex gap-4 '>
              <input className='w-full outline-none bg-darkGray rounded-lg px-4 py-3' type="text" placeholder='Search...' />
              {/* <Button text={"Add Food"} onClick={() => {  }} className={"w-1/6"} /> */}
            </div>

            <div className='flex gap-4 '>
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Excel"} />
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Print"} />
            </div>

            <div className="w-full text-white  overflow-hidden rounded-lg">
              <table className="w-full text-left bg-darkGray ">
                <thead className='overflow-hidden '>
                  <tr className='bg-mediumGray rounded-t-lg'>
                    <th className="px-6 py-3">Id</th>
                    <th className="px-6 py-3">Restaurant Name</th>
                    <th className="px-6 py-3">Image</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Tag</th>
                    <th className="px-6 py-3">Rating</th>
                  </tr>
                </thead>

                <tbody className='text-sm'>
                  <tr className="border-b border-mediumGray">
                    <th className="px-6 py-4 ">#1</th>
                    <th className="px-6 py-4 "><div className='flex items-center gap-3'><img  className='border-green border-2 rounded-3xl p-1 h-8 w-8' src="/assets/resto.png" alt="" /> Chilis</div></th>
                    <td className="px-6 py-4">
                      <img className='h-10 w-10 rounded-md' src="/assets/food.png" alt="" />
                    </td>
                    <td className="px-6 py-4">Keto Diet</td>
                    <td className="px-6 py-4">#good</td>
                    <td className="px-6 py-4">4.5</td>
                  </tr>
                  {/* {
                    program?.map((data) => {
                      return <tr className="border-b border-mediumGray">
                        <th className="px-6 py-4 ">#{data._id?.slice(20)}</th>
                        <td className="px-6 py-4">
                          <img className='h-10 w-10 rounded-md' src={data?.logo} alt="" />
                        </td>
                        <td className="px-6 py-4">{data?.name}</td>
                        <td className="px-6 py-4">{data?.tag}</td>
                        <td className="px-6 py-4">{data?.rating}</td>
                      </tr>
                    })
                  } */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default page
