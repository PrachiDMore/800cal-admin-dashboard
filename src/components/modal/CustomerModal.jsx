import React from 'react'
import Input from '../Input'
import Button from '../Button'
import axios from 'axios'

const CustomerModal = ({ setShowModal, showModal }) => {
  const approve = () => {
    try {
      axios(`${process.env.REACT_APP_BASE_URL}customer/enable`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        data: {
          _id: showModal?.data?._id
        }
      })
        .then((res) => {
          alert(res.data.message)
          window.location.reload()
        })
    } catch (error) {
      alert(error.message)
    }
  }
  const suspend = () => {
    try {
      axios(`${process.env.REACT_APP_BASE_URL}customer/suspend`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        data: {
          _id: showModal?.data?._id
        }
      })
        .then((res) => {
          alert(res.data.message)
          window.location.reload()
        })
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <>
      <div id="defaultModal" tabindex="-1" aria-hidden="true" className={showModal?.show ? "Lexend flex items-center fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-black/50 overflow-y-auto h-screen opacity-100 duration-500" : "-translate-y-[50px] flex items-center fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-black/50 overflow-y-auto h-screen opacity-0 pointer-events-none duration-500"}>
        <div className="relative w-[80%] max-h-full overflow-y-scroll m-auto">

          <div className="relative rounded-lg shadow bg-darkGray">

            <div className="flex items-start justify-between p-4 border-b rounded-t border-textGray ">
              <h3 className="text-xl font-semibold text-white">
                Customer Profile
              </h3>
              <button onClick={() => {
                setShowModal({ show: false, update: true, data: undefined })
              }} type="button" className="text-white bg-transparent hover:bg-gray-600 duration-200 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center ">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className='grid grid-cols-2 gap-x-4'>
                <Input readOnly={true} value={showModal?.data?.username} label={"Username"} type={"text"} placeholder={"Enter username of customer"} />
                <Input readOnly={true} value={showModal?.data?.email} label={"Email"} type={"text"} placeholder={"Email Address"} />
              </div>
              <div className='grid grid-cols-2 gap-x-4'>
                <Input readOnly={true} value={showModal?.data?.firstname} label={"First Name"} type={"text"} placeholder={"Enter your First Name"} />
                <Input readOnly={true} value={showModal?.data?.lastname} label={"Last Name"} type={"text"} placeholder={"Enter your Last Name"} />
              </div>
              <div className='grid grid-cols-2 gap-x-4'>
                <Input readOnly={true} value={showModal?.data?.dob} label={"Date of Birth"} type={"text"} placeholder={"Enter your date of birth"} />
                <Input readOnly={true} value={showModal?.data?.gender} label={"Gender"} type={"text"} placeholder={"Gender"} />
              </div>
              <div className='grid grid-cols-2 gap-x-4'>
                <Input readOnly={true} value={showModal?.data?.weight} label={"Weight"} type={"text"} placeholder={"Enter your weight"} />
                <Input readOnly={true} value={showModal?.data?.height} label={"Height"} type={"text"} placeholder={"Enter your height"} />
              </div>
              {/* <Input readOnly={true} value={showModal?.data?.description} label={"Description"} textarea={true} placeholder={"Description"} /> */}
            </div>

            <div className="flex items-center justify-center pb-6  rounded-b gap-x-3 ">
              {!showModal?.data?.enabled && <Button onClick={approve} text={"Approve"} className={"text-darkGray w-1/6"} />}
              {showModal?.data?.enabled && <Button onClick={suspend} text={"Suspend"} className={"text-darkGray w-1/6"} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerModal