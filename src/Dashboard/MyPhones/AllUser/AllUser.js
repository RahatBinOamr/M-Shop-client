import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

import Loading from "../../../Shared/Loading";

const AllUser = () => {

  const [deleteUser,setDeleteUser]=useState(null)
  const { data: users = [], refetch ,isLoading} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://used-mobile-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });
  const handleMakeAdmin = id => {
    fetch(`https://used-mobile-server.vercel.app/users/admin/${id}`, {
        method: 'PUT', 
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            toast.success('Make admin successful.')
            refetch();
        }
      console.log(data)
    })
}
const handelDeleteUser = ()=>{
fetch(`https://used-mobile-server.vercel.app/users`,{
  method:"DELETE",
  headers: {
    // authorization: `bearer ${localStorage.getItem('accessToken')}`
    'content-type':'application/json'
},
body:JSON.stringify(deleteUser)
})
.then(res=>res.json())
.then(data=>{
  if(data.acknowledged){
    toast.success('delete successfully')
    refetch()

  }
  console.log(data)
})
}
if(isLoading){
  <Loading></Loading>
}
  return (
    <div>
      <h2 className="text-3xl">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs btn-primary"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td> <button onFocus={()=>setDeleteUser(user)} onClick={handelDeleteUser} className="btn bg-warning btn-xs"> Delete</button> </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
