import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import SearchableSelect from '../../components/SearchableSelect'
import Button from '../../components/Button'
import { BsHandbag } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { SlLocationPin } from 'react-icons/sl'
import { LiaCarSideSolid } from 'react-icons/lia'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

const OrderDetails = () => {
  const { _id } = useParams();
  const [data, setData] = useState();
  const [rider, setRider] = useState("");

  useEffect(() => {
    if (_id) {
      axios(`${process.env.REACT_APP_BASE_URL}calendar/order/${_id}`, {
        method: "GET"
      })
        .then((res) => {
          setData(res.data?.calendar)
        })
        .catch((err) => {

        })
    }
  }, [_id])

  const assignRider = () => {

  }

  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Order Details
            {/* <img onClick={() => { setShowResto(true) }} className='border-green border-2 rounded-3xl p-1 h-12 w-12' src="/assets/resto.png" alt="" /> */}
          </div>

          <div className='w-full p-5'>
            <div className='w-full flex justify-between items-center'>
              <h1 className='text-2xl font-medium'>Current Status: <span className='text-green capitalize'>{data?.status}</span></h1>
              {/* <div><Button text={"Update Status"} /></div> */}
            </div>

            <div className='w-full grid gap-5'>
              <div className='w-full flex gap-5 mt-4'>
                <div className='bg-darkGray w-1/2 p-4 grid gap-4 rounded-lg'>
                  <div className='grid gap-1'>
                    <div className='flex items-center gap-6'>
                      <div className='flex items-center gap-3'>
                        <BsHandbag className='text-textGray text-xl' />
                        <p className='text-lg font-medium'>Order #{data?._id?.slice(18)}</p>
                      </div>
                      <p className='text-xs text-green bg-green/30 rounded-2xl px-4 py-1 capitalize'>{data?.status}</p>
                    </div>
                    <div className='ml-12'>
                      <p className='text-sm text-textGray '>Placed on {moment(data?.date).format("ddd, MMMM DD, YYYY hh:mm a")}</p>
                    </div>
                  </div>
                  <div className='grid gap-1'>
                    <div className='flex items-center gap-6'>
                      <div className='flex items-center gap-3'>
                        <FaRegUser className='text-textGray text-xl' />
                        <p className='text-lg font-medium'>Customer</p>
                      </div>
                    </div>
                    <div className='ml-12'>
                      <p className='text-sm text-textGray '>{data?.customer?.firstname} {data?.customer?.lastname} <br /> {data?.customer?.phonenumber} <br /> {data?.customer?.email}</p>
                      <p className='text-xs text-green'>{data?.food?.length} {data?.food?.length > 1 ? "Orders" : "Order"}</p>
                    </div>
                  </div>
                  <div className='grid gap-1'>
                    <div className='flex items-center gap-6'>
                      <div className='flex items-center gap-3'>
                        <SlLocationPin className='text-textGray text-xl' />
                        <p className='text-lg font-medium'>Delivery Information:</p>
                      </div>
                    </div>
                    <div className='ml-12'>
                      <p className='text-sm text-textGray '>{data?.customer?.firstname} {data?.customer?.lastname} <br /> {data?.customer?.phonenumber} <br /> Home: {data?.customer?.address}</p>
                      {/* <p className='text-xs text-green'>Get direction</p> */}
                    </div>
                  </div>
                  <div className='grid gap-2'>
                    <div className='flex items-center gap-6'>
                      <div className='flex items-center gap-3'>
                        <LiaCarSideSolid className='text-textGray text-xl' />
                        <p className='text-lg font-medium'>Driver:</p>
                      </div>
                    </div>
                    <div className='ml-12 '>
                      {/* <SearchableSelect options={}/> */}
                      {!data?.rider && <p>No rider assigned</p>}
                      {data?.rider && <div>
                        {data?.rider?.firstname} {data?.rider?.lastname} ({data?.rider?.username})
                      </div>}
                      {/* <Button onClick={assignRider} buttonClassName={"mt-2 w-auto text-sm px-3 py-1"} text={"Assign Driver"} /> */}
                    </div>
                  </div>
                </div>
                <div className='bg-darkGray w-1/2 p-4 rounded-lg'>
                  <p className='text-lg font-medium'>Summary</p>

                  <div className="w-full text-white mt-4 overflow-hidden rounded-lg">
                    <table className="w-full text-left bg-darkGray ">
                      <tbody className='text-sm'>
                        {
                          data?.food?.map((foodItem, index) => {
                            return <tr className="border-b border-mediumGray">
                              <td className="px-6 py-4 ">
                                <img className='h-8 w-8' src="/assets/food.png" alt="" />
                              </td>
                              <td className="px-6 py-4">
                                <p className='font-bold'>{foodItem?.name} <br /><span className='text-xs text-textGray'>Note: {data?.note && data?.note?.length != 0 ? data?.note[index] : "None"}</span></p>
                              </td>
                              <td className="px-6 py-4">
                                <p className='text-sm '>Calories {foodItem?.calories}</p>
                              </td>
                            </tr>
                          })
                        }

                        <tr className="hidden border-b border-mediumGray">
                          <td className="px-6 py-4 ">
                            <p></p>
                          </td>
                          <td className="px-6 py-4 ">
                            <p className='text-sm text-textGray'>Sub total (2 items)</p>
                            <p className='text-sm text-textGray'>Service Fee</p>
                            <p className='text-sm text-textGray'>Delivery Fee</p>
                            <p className='text-sm text-textGray'>Tax (10% include)</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className='text-sm text-textGray'>KWD 106.00</p>
                            <p className='text-sm text-textGray'>KWD 5.00</p>
                            <p className='text-sm text-textGray'>KWD 5.00</p>
                            <p className='text-sm text-textGray'>KWD 10.00</p>
                          </td>
                        </tr>

                        <tr className="">
                          <td className="px-6 py-4 ">
                            <p></p>
                          </td>
                          <td className="px-6 py-4">
                            <p className='text-base '>Total</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className=' '>KWD {data?.order?.category === "gold" ? data?.meals?.goldprice : data?.order?.category === "silver" ? data?.meals?.silverprice : data?.meals?.platinumprice}</p>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className='w-full flex gap-5'>
                <Button buttonClassName={"w-auto px-3 py-1"} text={"Print sticker"} />
                <Button onClick={() => window.print()} buttonClassName={"w-auto px-3 py-1 bg-accent border border-green"} text={"Download invoive"} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {/* <RestoProfile showResto={showResto} setShowResto={setShowResto} /> */}
    </>
  )
}

export default OrderDetails