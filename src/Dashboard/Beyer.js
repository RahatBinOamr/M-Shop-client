import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../Hook/UseTitle';
import Loading from '../Shared/Loading';

const Beyer = () => {
  useTitle('beyer')
    const { data: beyerData = [],isLoading} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await fetch("https://used-mobile-server.vercel.app/beyer");
          const data = await res.json();
          return data;
        },
      });
    //   console.log(beyerData);
      if(isLoading){
        <Loading></Loading>
      }
    return (
        <div>
            <h2 className='text-xl font-semibold'>All Beyer</h2>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
           
            </tr>
          </thead>
          <tbody>
            {beyerData.map((beyer, i) => (
              <tr key={beyer._id}>
                <th>{i + 1}</th>
                
                <td>{beyer.name}</td>
                <td>{beyer.email}</td>
                <td>{
                  beyer?.verify==='true'?'verified':'not verified'
                  
                  }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Beyer;