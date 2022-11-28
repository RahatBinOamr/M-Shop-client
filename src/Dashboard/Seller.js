import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../Hook/UseTitle';
import Loading from '../Shared/Loading';

const Beyer = () => {
  useTitle('seller')
    const { data: sellerData = [],isLoading} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await fetch("https://used-mobile-server-rahatbinoamr.vercel.app/seller");
          const data = await res.json();
          return data;
        },
      });

      
    //   console.log(beyerseller);
      if(isLoading){
        <Loading></Loading>
      }
    return (
        <div>
            <h2 className='text-xl font-semibold'>All Seller</h2>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Type</th>
           
            </tr>
          </thead>
          <tbody>
            {sellerData.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>{seller.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Beyer;