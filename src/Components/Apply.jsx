import React from 'react';
import {
    CalculatorIcon,
    LightBulbIcon,
    AcademicCapIcon,
    BanknotesIcon,
  } from "@heroicons/react/24/solid";

const Apply = ({category}) => {
    console.log(category)
    const{Name,Jobs,image}=category;
    
    
    
    return (
        <section className="mb-10 ">
        
        
          <div className="border text-start card w-48 h-48 shadow-md mt-4  gap-4 mx-3 p-4 bg-purple-50">
            <span className="border shadow-xl text-purple-400 ">
              <img className='w-12 object-cover text-purple-400' src={image} alt="" />
            </span>
            <h4 className="font-bold">{Name}</h4>
            <p>{Jobs}</p>
          </div> 
        
      </section>
    );
};

export default Apply;