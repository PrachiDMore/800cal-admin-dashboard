import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Layout from "../../../components/Layout";
import Select from "../../../components/Select";
import { UseGlobalContext } from "../../../context/Global";

const DetailTicket = () => {
  const { id } = useParams();
  const { token } = UseGlobalContext();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      try {
        axios(`${process.env.REACT_APP_BASE_URL}tickets/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res);
          setData(res.data.tickets);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios(`${process.env.REACT_APP_BASE_URL}tickets/${id}`, {
      method: "PATCH",
      data: {
        status: data.status,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        // Issue here
        console.log(res);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <Layout>
        <div className="w-4/5  Lexend overflow-y-auto">
          {/* topbar */}
          <div className="w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold ">
            Ticket #{id.slice(18)}
          </div>

          <form onSubmit={handleSubmit} className="w-full grid gap-3 p-5 ">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <div
                onClick={() => navigate(`/customer/${data?.customers?._id}`)}
              >
                <Input
                  value={data?.customers?._id}
                  label={"Customer Id"}
                  readOnly={true}
                  type={"text"}
                />
              </div>

              <Input
                value={`${data?.customers?.firstname} ${data?.customers?.lastname}`}
                label={"Name"}
                readOnly={true}
                type={"text"}
              />
              <Input
                value={data?.customers?.username}
                label={"Username"}
                readOnly={true}
                type={"text"}
              />
              <Input
                value={data?.customers?.phonenumber}
                label={"Phone Number"}
                readOnly={true}
                type={"text"}
              />
              <Input
                value={data?.customers?.email}
                label={"Email"}
                readOnly={true}
                type={"text"}
              />
              <Input
                value={data?.calendar?._id}
                label={"Calendar Id"}
                readOnly={true}
                type={"text"}
              />
              <Input
                value={moment(data?.calendar?.date).format("DD-MMM-YYYY")}
                label={"Calendar Date"}
                readOnly={true}
                type={"text"}
              />

              <div onClick={() => navigate(`/order/${data?.calendar?.order}`)}>
                <Input
                  value={data?.calendar?.order}
                  label={"Order Id"}
                  readOnly={true}
                  type={"text"}
                />
              </div>

              <div
                onClick={() =>
                  navigate(`/restaurant/${data?.calendar?.restaurant}`)
                }
              >
                <Input
                  value={data?.calendar?.restaurant}
                  label={"Restaurant Id"}
                  readOnly={true}
                  type={"text"}
                />
              </div>

              <div
                onClick={() => navigate(`/program/${data?.calendar?.program}`)}
              >
                <Input
                  value={data?.calendar?.program}
                  label={"Program Id"}
                  readOnly={true}
                  type={"text"}
                />
              </div>

              <div onClick={() => navigate(`/meal/${data?.calendar?.meals}`)}>
                <Input
                  value={data?.calendar?.meals}
                  label={"Meal Id"}
                  readOnly={true}
                  type={"text"}
                />
              </div>

              <Select
                label={"Status"}
                value={data?.status}
                onChange={(e) => setData({ ...data, status: e.target.value })}
                options={[
                  { label: "New", value: "new" },
                  {
                    label: "Processing",
                    value: "processing",
                  },
                  { label: "Resolved", value: "resolved" },
                ]}
              />
            </div>
            <Input
              value={data?.description}
              label={"Description"}
              textarea={true}
              readOnly={true}
              type={"text"}
            />
            <Button text={"Update Status"} type={"submit"} className={"mt-2"} />
          </form>
        </div>
      </Layout>
    </>
  );
};

export default DetailTicket;
