import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../../Shared/Loading';

const MyPhones = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
// console.log(url);
    const { data:bookings =[],isLoading} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                   authorization: `bearer ${localStorage.getItem('accessToken')}` 
                }
            });
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return  <Loading></Loading>
        }
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
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings?.map((booking, i) => <tr key={booking._id}>
                            <th>{i+1}</th>
                            <td>{booking.name}</td>
                            <td>{booking.title}</td>
                            <td>${booking.price}</td>
                            <td>{booking.date}</td>
                         
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyPhones;