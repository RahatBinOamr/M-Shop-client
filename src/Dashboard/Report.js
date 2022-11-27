import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";

const Report = () => {

    const { data: reportData = [],isLoading} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await fetch("https://used-mobile-server.vercel.app/report");
          const data = await res.json();
          return data;
        },
      });

  console.log(reportData.title);
  if(isLoading){
    <Loading></Loading>
  }
  return (
    <div>
      <h2 className="text-3xl font-semibold">ALL Report: </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Title</th>
              <th>Seller</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((report, i) => (
              <tr key={report._id}>
                <th>{i + 1}</th>
                <th>
                  {" "}
                  <div className="w-16 rounded">
                    <img src={report.img} alt='' />
                  </div>
                </th>
                <td>{report.title}</td>
                <td>{report.seller}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
