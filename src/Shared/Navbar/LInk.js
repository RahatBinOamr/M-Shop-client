import React from 'react';

const LInk = ({raout}) => {
    console.log(raout)
    return (
        <div>
          
            <li className='mr-12'>
                <a href="{routs.path}">{raout.name} </a>
            </li>
        </div>
    );
};

export default LInk;