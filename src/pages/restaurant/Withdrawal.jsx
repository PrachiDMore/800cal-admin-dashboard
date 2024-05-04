import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import Input from '../../components/Input'
import axios from 'axios'
import moment from 'moment'

const Withdrawal = () => {
  const [transaction, setTransaction] = useState([])
  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_URL}restaurant-transaction/all`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => {
        setTransaction(res.data.transactions)
      })
  }, [])

  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Withdrawals
            {/* <img onClick={() => { setShowResto(true) }} className='border-green border-2 rounded-3xl p-1 h-12 w-12' src="/assets/resto.png" alt="" /> */}
          </div>

          <div className='w-full p-5 grid gap-4'>
            <h1 className='text-xl font-medium'>Wallet</h1>
            <div className='w-full hidden gap-5'>
              <div className='bg-darkGray rounded-md w-full flex items-center justify-between p-5'>
                <div>
                  {/* <p className='text-sm text-textGray'>Available Balance: <span className='text-lg text-white font-medium'>KWD. {user?.wallet}</span></p> */}
                </div>
                <div>
                  {/* <Button onClick={() => {
                    axios(`${process.env.REACT_APP_BASE_URL}/restaurant-transaction/create`, {
                      method: "POST",
                      data: {
                        amount: user?.wallet,
                        restaurant: user?._id,
                        description: "Payout requested"
                      }
                    })
                    .then((res) => {
                      alert(res.data.message)
                    })
                  }} text={"Requset Payout"} /> */}
                </div>
              </div>
              <div className='bg-darkGray rounded-md w-1/2 hidden items-center justify-between p-5'>
                <div className=''>
                  <h1 className='font-medium text-lg'>Payout account</h1>
                  <p className='text-sm text-textGray'>78****78</p>
                  <p className='text-sm text-textGray'>bank</p>
                </div>
                <div>
                  <Button text={"Set Account"} />
                </div>
              </div>
            </div>

            <div className='w-full hidden items-center gap-3'>
              <Input type={"date"} placeholder={"Start Date"} />
              <Input type={"date"} placeholder={"End Date"} />
            </div>

            <div className='hidden gap-4 '>
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Excel"} />
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Print"} />
            </div>
            <div className="w-full text-white  overflow-hidden rounded-lg">
              <table className="w-full text-left bg-darkGray ">
                <thead className='overflow-hidden '>
                  <tr className='bg-mediumGray rounded-t-lg'>
                    <th className="px-6 py-3">Amount</th>
                    <th className="px-6 py-3">Description</th>
                    <th className="px-6 py-3">Transaction</th>
                    <th className="px-6 py-3">Date Processed</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>

                <tbody className='text-sm'>
                  {
                    transaction?.map((data, index) => {
                      return <tr key={index} className="border-b border-mediumGray">
                        <td className="px-6 py-4">KWD. {data?.amount}</td>
                        <td className='px-6 py-4 grid gap-1'>
                          <div className="">{data?.description}</div>
                          {data?.completed && <div className="text-xs px-2 py-1 w-14 text-center bg-green/50 rounded-md">Paid</div>}
                          {!data?.completed && <div className="text-xs px-2 py-1 w-14 text-center bg-red-800/50 rounded-md">Unpaid</div>}
                        </td>
                        <th className="px-6 py-4 ">{moment(data?.time_stamp).format("Do MMM, YYYY hh:mm a")}</th>
                        <th className="px-6 py-4 ">{data?.dispursed_date ? moment(data?.dispursed_date).format("Do MMM, YYYY hh:mm a") : "-"}</th>
                        <th className="px-6 py-4 "><Button disabled={data?.completed} text={"Pay"} onClick={() => {
                          axios(`${process.env.REACT_APP_BASE_URL}restaurant-transaction/approve/${data?._id}`, {
                            method: "PATCH",
                            headers: {
                              Authorization: `Bearer ${localStorage.getItem("token")}`
                            },
                          })
                            .then((res) => {
                              alert(res.data.message)
                            })
                        }} /></th>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </Layout>
    </>
  )
}

export default Withdrawal