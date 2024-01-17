import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import UploadComponent from "../../../components/UploadComponent"
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CreateIngredients = () => {
  const [image, setImage] = useState("");
  const { _id } = useParams();
  const initialFormState = {
    title: "",
    location: "",
    protien: "",
    carbs: "",
    fat: "",
    calories: ""
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
    if (image && formState.location) {
      if (!_id) {
        axios(`${process.env.REACT_APP_BASE_URL}ingredients/create`, {
          method: "POST",
          data: {
            ...formState,
            image
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
          .then((res) => {
            alert(res.data.message)
          })
      } else {
        axios(`${process.env.REACT_APP_BASE_URL}ingredients/${_id}`, {
          method: "PATCH",
          data: {
            ...formState,
            image
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
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
      axios(`${process.env.REACT_APP_BASE_URL}ingredients/${_id}`, {
        method: "GET",
      })
        .then((res) => {
          setFormState(res.data.ingredient)
          setImage(res.data.ingredient.image)
        })
    }
  }, [_id])

  return (
    <>
      <Layout>
        <div className='w-4/5  Lexend'>
          {/* topbar */}
          <div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
            {_id ? "Update Ingredient" : "Create Ingredient"}
          </div>

          <div className='w-full px-5 grid gap-4'>
            <div className="w-full text-white rounded-lg max-h-[90vh] overflow-y-scroll">
              <form onSubmit={handleCreate} className='p-10 flex flex-col gap-y-3'>
                <UploadComponent setImage={setImage} image={image} />
                <Input placeholder={"Enter the Ingredient name"} label={"Name"} id={"title"} type={"text"} value={formState.title} onChange={handleChange} />
                <Input placeholder={"Enter the Ingredient location"} label={"Location"} id={"location"} type={"text"} value={formState.location} onChange={handleChange} />
                <Input placeholder={"Enter the Ingredient protien"} label={"Protien"} id={"protien"} type={"number"} value={formState.protien} onChange={handleChange} />
                <Input placeholder={"Enter the Ingredient fat"} label={"Fat"} id={"fat"} type={"number"} value={formState.fat} onChange={handleChange} />
                <Input placeholder={"Enter the Ingredient carbs"} label={"Carbs"} id={"carbs"} type={"number"} value={formState.carbs} onChange={handleChange} />
                <Input placeholder={"Enter the Ingredient calories"} label={"Calories"} id={"calories"} type={"number"} value={formState.calories} onChange={handleChange} />
               <Button type={"submit"} text={"Submit"} />
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CreateIngredients