import Layout from "../../components/Layout";
import Input from "../../components/Input";
import { RiLink } from "react-icons/ri";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UploadComponent from "../../components/UploadComponent";
import Button from "../../components/Button";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import Select from "../../components/Select";
import UploadInput from "../../components/UploadInput";

const ViewSingleRestaurant = () => {
  const { _id } = useParams();
  const [license, setLicense] = useState("");
  const [agreement, setAgreement] = useState("");
  const initialState = {
    username: "",
    contactemail: "",
    contactname: "",
    contactnumber: "",
    title: "",
    enabled: true,
    companyname: "",
    license: "",
    licenseExpiry: 0,
    agreement: "",
    closed: false,
  };
  const [data, setData] = useState(initialState);
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert date to timestamp before submitting
    const timestampDate = moment(data.licenseExpiry).unix();
    axios(`${process.env.REACT_APP_BASE_URL}restaurant/admin/update/${_id}`, {
      method: "PATCH",
      data: {
        ...data,
        licenseExpiry: timestampDate, // Send timestamp to server
        logo: image,
        agreement: agreement,
        license: license,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    if (_id) {
      axios(`${process.env.REACT_APP_BASE_URL}restaurant/profile/${_id}`)
        .then((res) => {
          setData(res.data.restaurant);
          setImage(res?.data?.restaurant?.logo);
          setAgreement(res?.data?.restaurant?.agreement);
          setLicense(res?.data?.restaurant?.license);
          // Convert timestamp to date when fetching data
          setData({
            ...res.data.restaurant,
            licenseExpiry: moment
              .unix(res.data.restaurant.licenseExpiry)
              .format("YYYY-MM-DD"),
          });
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }, [_id]);

  return (
    <Layout>
      <div className="w-4/5  Lexend overflow-auto">
        {/* topbar */}
        <div className="w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold">
          Restaurant #{_id?.slice(18)}
          {/* <img onClick={() => { setShowResto(true) }} className='border-green border-2 rounded-3xl p-1 h-12 w-12' src="/assets/resto.png" alt="" /> */}
        </div>

        <form onSubmit={handleSubmit} className="w-full grid gap-3 p-5">
          <UploadComponent setImage={setImage} image={image} />
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <Input
              onChange={handleChange}
              value={data?.username}
              label={"Username"}
              type={"text"}
              placeholder={"Enter username of restaurant"}
            />
            <Input
              onChange={handleChange}
              value={data?.title}
              label={"Title"}
              type={"text"}
              placeholder={"Enter title of restaurant"}
            />
            <Input
              onChange={handleChange}
              value={data?.companyname}
              label={"Company Name"}
              type={"text"}
              placeholder={"Enter company name of restaurant"}
            />
            <Input
              onChange={handleChange}
              value={data?.contactname}
              label={"Contact Name"}
              type={"text"}
              placeholder={"Enter contact name of restaurant"}
            />
            <Input
              onChange={handleChange}
              value={data?.contactnumber}
              label={"Contact Number"}
              type={"text"}
              placeholder={"Enter contact number of restaurant"}
            />
            <Input
              onChange={handleChange}
              value={data?.contactemail}
              label={"Contact Email"}
              type={"text"}
              placeholder={"Enter contact email of restaurant"}
            />
            <Input
              onChange={handleChange}
              id="licenseExpiry"
              value={data?.licenseExpiry}
              label={"License Expiry"}
              type={"date"}
              placeholder={"Enter contact email of restaurant"}
            />
            <Input
              onChange={handleChange}
              value={data?.wallet}
              label={"Wallet"}
              type={"text"}
              placeholder={"Restaurant Wallet"}
            />
            <Select
              label={"Enabled"}
              value={data?.enabled}
              options={[
                { label: "Enabled", value: true },
                { label: "Disabled", value: false },
              ]}
            />
            <UploadInput
              onChange={setLicense}
              value={license}
              label={"Restaurant License"}
            />
            <UploadInput
              onChange={setAgreement}
              value={agreement}
              label={"Restaurant Agreement"}
            />

            <div className="col-span-2">
              <Input
                textarea={false}
                value={data?.description}
                label={"Restaurant Description"}
                type={"text"}
                placeholder={"Enter description of restaurant"}
              />
            </div>
          </div>
          <Button text={"Submit"} type={"submit"} className={"mt-2"} />
          <Link to={`/order/restaurant/${data?._id}`}>
            <Button text={"View Orders"} type={"button"} className={"mt-2"} />
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default ViewSingleRestaurant;
