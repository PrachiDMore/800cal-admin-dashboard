import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { AiFillEye } from 'react-icons/ai';
import Button from '../../components/Button';
import ViewRider from '../../components/modal/ViewRider';
import { UseRidersContext } from '../../context/Riders';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UploadComponent from '../../components/UploadComponent';
import Input from '../../components/Input';

const ManagerDetails = () => {
  const [image, setImage] = useState("");
  const { _id } = useParams();
  const initialFormState = {
    username: "",
    email: "",
    password: "",
    role: "manager",
    firstname: "",
    lastname: ""
  }

  const [formState, setFormState] = useState(initialFormState)

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    })
  }
  const handleCreate = (e) => {
    e.preventDefault()
    if (image && formState.username) {
      if (!_id) {
        axios(`${process.env.REACT_APP_BASE_URL}manager/signup`, {
          method: "POST",
          data: {
            ...formState,
            image
          },
        })
          .then((res) => {
            alert(res.data.message)
          })
      } else {
        axios(`${process.env.REACT_APP_BASE_URL}manager/${_id}`, {
          method: "PATCH",
          data: {
            ...formState,
            image
          },
        })
          .then((res) => {
            alert(res.data.message)
          })
      }
    } else {
      alert("Please fill the form")
    }
  }

  useEffect(() => {
    if (_id) {
      axios(`${process.env.REACT_APP_BASE_URL}manager/info/${_id}`, {
        method: "GET",
      })
        .then((res) => {
          setFormState(res.data.manager)
          setImage(res.data.manager.image)
        })
    }
  }, [_id])


  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            {_id ? "Update Manager" : "Create Manager"}
          </div>
          <div className='w-full px-5 grid gap-4'>
            <div className="w-full text-white rounded-lg max-h-[90vh] overflow-y-scroll">
              <form onSubmit={handleCreate} className='p-10 flex flex-col gap-y-3'>
                <UploadComponent setImage={setImage} image={image} />
                <Input placeholder={"Enter the Manager firstname"} label={"Firstname"} id={"firstname"} type={"text"} value={formState.firstname} onChange={handleChange} />
                <Input placeholder={"Enter the Manager lastname"} label={"Lastname"} id={"lastname"} type={"text"} value={formState.lastname} onChange={handleChange} />
                <Input placeholder={"Enter the Manager username"} label={"Username"} id={"username"} type={"text"} value={formState.username} onChange={handleChange} />
                <Input placeholder={"Enter the Manager email"} label={"Email"} id={"email"} type={"text"} value={formState.email} onChange={handleChange} />
                <Input placeholder={"Enter the Manager password"} label={"Password"} id={"password"} type={"text"} value={formState.password} onChange={handleChange} />
                <Button type={"submit"} text={"Submit"} />
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ManagerDetails