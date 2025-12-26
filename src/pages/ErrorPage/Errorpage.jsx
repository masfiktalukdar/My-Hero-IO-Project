import React from 'react';
import errorPage from '../../assets/error-404.png'

const Errorpage = () => {
    return (
        <div>
            <div>
           <img className='w-100 mx-auto' src={errorPage} alt="" />
        </div>
        <div className='flex flex-col justify-center  items-center' >
            <h1 className='text-4xl font-bold'>Oops, page not found!</h1>
          <p className='text-[15px] text-gray-500'>The page you are looking for is not available.</p>
          <button  className="btn btn-active btn-primary text w-20">Go Back!</button>
         </div>

        </div>
    );
};

export default Errorpage;