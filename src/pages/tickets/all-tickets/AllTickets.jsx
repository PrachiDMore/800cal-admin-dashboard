import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";
import { UseTicketContext } from "../../../context/Tickets";

const AllTickets = () => {
  const { tickets } = UseTicketContext();

  return (
    <>
      <Layout>
        <div className="w-4/5  Lexend">
          {/* topbar */}
          <div className="w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold">
            All Tickets
          </div>

          <div className="w-full p-5 grid gap-4">
            <div className="w-full text-white overflow-scroll rounded-lg max-h-[72vh]">
              <table className="w-full text-left bg-darkGray h-full max-h-full">
                <thead className="sticky top-0">
                  <tr className="bg-mediumGray rounded-t-lg">
                    <th className="px-6 py-3">#</th>

                    <th className="px-6 py-3">Customer</th>
                    <th className="px-6 py-3">Resturant</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>

                <tbody className="text-sm">
                  {tickets?.map((ticket, index) => {
                    return (
                      <tr key={index} className="border-b border-mediumGray">
                        <td className="px-6 py-4">{ticket?._id.slice(18)}</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <span>{ticket?.customers?.firstname}</span>
                              <span> {ticket?.customers?.firstname}</span>
                            </div>

                            <div>
                              <p className="text-mediumGray">
                                {ticket?.customers?.username}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 ">
                          <div className="flex flex-col gap-1">
                            <span>{ticket?.calendar?.restaurant?.title}</span>
                            <span className="text-mediumGray">
                              {ticket?.calendar?.restaurant?.username}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">{ticket?.status}</td>
                        <td className="cursor-pointer px-6 py-4">
                          <Link
                            to={`/tickets/${ticket._id}`}
                            className="h-10 w-10 bg-blue-500"
                          >
                            <AiFillEye />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AllTickets;
