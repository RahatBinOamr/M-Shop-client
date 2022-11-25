import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import ProductsCardDetails from '../Product/ProductsCardDetails';

const ByNowBanner = ({img}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                    
                    <div className='mr-6 sm:w-full'>
                        <DayPicker 
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        {/* <p className= 'text-xl text-warning font-semibold'>you have selected data:{format(selectedDate,'PP')} </p> */}
                    </div>
                </div>
                <ProductsCardDetails selectedDate></ProductsCardDetails>
            </div>
              <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
        </header>
        <div>
      
        </div>
        </div>
    );
};

export default ByNowBanner;