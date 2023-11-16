import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { AiFillEye } from 'react-icons/ai';
import Button from '../../components/Button';
import ViewRider from '../../components/modal/ViewRider';
import { UseRidersContext } from '../../context/Riders';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RiderDetails = () => {
  const [rider, setRider] = useState(false);
  const { _id } = useParams()
  useEffect(() => {
    if (_id) {
      axios(`${process.env.REACT_APP_BASE_URL}rider/info/${_id}`, {
        method: "GET"
      })
      .then((res) => {
        setRider(res.data.rider)
      })
    } else return
  }, [_id])

  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Rider Details
            {/* <img onClick={() => { setShowResto(true) }} className='border-green border-2 rounded-3xl p-1 h-12 w-12' src="/assets/resto.png" alt="" /> */}
          </div>
          <div className='w-full grid gap-3 p-5'>

            <div className='flex w-full gap-3'>
              <Button text={"Print"} />
            </div>

            <div className="w-full text-white overflow-scroll rounded-lg max-h-[72vh]">
              <img src={rider?.image} alt="" className='h-32 w-32 object-cover rounded-lg' />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default RiderDetails