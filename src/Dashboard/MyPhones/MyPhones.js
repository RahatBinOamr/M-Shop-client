import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../Hook/UseTitle";
import Loading from "../../Shared/Loading";

const MyPhones = () => {
  useTitle("MyPhones");
  const { user } = useContext(AuthContext);
  // console.log(user);

  const url = `https://used-mobile-server.vercel.app/bookings?email=${user?.email}`;
  // console.log(url);
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  // console.log(bookings);
  return (
    <div>
      <h3 className="text-3xl mb-5">My Phones</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              

              <th>name</th>
              <th>Phone</th>
              <th>Price</th>
              <th>Date</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
               
                <td>{booking.name}</td>
                <td>{booking.title}</td>
                <td>${booking.price}</td>
                <td>{booking.date}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-warning btn-sm">Pay</button>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <span className="text-green-500">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPhones;
