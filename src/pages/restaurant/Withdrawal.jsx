import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import Input from '../../components/Input'

const Withdrawal = () => {
  const [showResto, setShowResto] = useState(false)

  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            Billings
          </div>

          <div className='w-full p-5 grid gap-4'>
            <h1 className='text-xl font-medium'>Wallet</h1>
            <div className='w-full flex gap-5'>
              <div className='bg-darkGray rounded-md w-full flex items-center justify-between p-5'>
                <div>
                  <p className='text-sm text-textGray'>Available Balance: <span className='text-lg text-white font-medium'>KWD. 998750.00</span></p>
                </div>
                <div>
                  <Button text={"Requset Payout"} />
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

            <div className='w-full flex items-center gap-3'>
              <Input type={"date"} placeholder={"Start Date"} />
              <Input type={"date"} placeholder={"End Date"} />
            </div>

            <div className='flex gap-4 '>
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Excel"} />
              <Button buttonClassName={"w-auto px-3 py-1"} text={"Print"} />
            </div>

            <div className="w-full text-white  overflow-hidden rounded-lg">
              <table className="w-full text-left bg-darkGray ">
                <thead className='overflow-hidden '>
                  <tr className='bg-mediumGray rounded-t-lg'>
                    <th className="px-6 py-3">Amount</th>
                    <th className="px-6 py-3">Transaction</th>
                    <th className="px-6 py-3">Date Processed</th>
                  </tr>
                </thead>

                <tbody className='text-sm'>
                  <tr className="border-b border-mediumGray">
                    <td className="px-6 py-4">KWD. 10.00</td>
                    <td className='px-6 py-4 grid gap-1'>
                      <div className="">Payout to 78****78</div>
                      <div className="text-xs px-2 py-1 w-14 text-center bg-green/50 rounded-md">Paid</div>
                    </td>
                    <th className="px-6 py-4 ">Fri, September 29, 2023</th>
                  </tr>
                  <tr className="">
                    <td className="px-6 py-4">KWD. 10.00</td>
                    <td className='px-6 py-4 grid gap-1'>
                      <div className="">Payout to 78****78</div>
                      <div className="text-xs px-2 py-1 w-14 text-center bg-red-500/50 rounded-md">Unpaid</div>
                    </td>
                    <th className="px-6 py-4 ">Fri, September 29, 2023</th>
                  </tr>

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