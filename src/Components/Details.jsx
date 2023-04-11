import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import CartDetails from "./CartDetails";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  PhoneIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "./Utilites/Fakedb";

const Details = () => {
    
  const params = useParams();
  console.log(params);
  const data = useLoaderData();

  const total = data.find((pd) => pd.id === params.id);
  const {
    id,
    description,
    responsibilities,
    qualification,
    experience,
    salary,
    position,
    location,
    phone,
    email,
  } = total;

  

  const handleAddToCart=(id)=>{
    console.log(id)


    // SetCart(newCart)
    addToDb(id)

}

//   console.log(total);

  return (
    <div>
      <div className="bg-gray-100  pt-14 pb-20 mb-10 px-5 py-16  ">
        <h1 className="text-center font-bold text-2xl">Job Details</h1>
      </div>
      <div className="md:flex px-5 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-28  lg:px-20 lg:py-20 gap-4 ">
        <div className="gap-3 ">
          <p className="mb-3">
            <span className="font-bold text-xl ">Job Description: </span>
            {description}
          </p>
          <p className="mb-3">
            <span className="font-bold text-xl">Job Job Responsibility: </span>
            {responsibilities}
          </p>
          <p className="mb-3">
            <span className="font-bold text-xl">
              Job Educational Requirements:{" "}
            </span>
            {qualification}
          </p>
          <p>
            <span className="font-bold text-xl">Job Experiences: </span>
            {experience}
          </p>
        </div>
        <div className="border bg-purple-200 text-start p-4 flex-cols w-full">
          <h3 className="font-bold  mb-2 ">Job Details</h3>
          <hr className="bg-gray-300" />
          <p className="flex items-center justify-start gap-2">
            <CurrencyDollarIcon className="w-4 "></CurrencyDollarIcon>
            <div>
              <span className="font-bold mb-3">Salary: </span>
              {salary}
            </div>
          </p>
          <p className="flex items-center justify-start gap-2">
            <CalendarIcon className="w-4"></CalendarIcon>
            <div>
              <span className="font-bold mb-4">Job Title :</span>
              {position}
            </div>
          </p>
          <p className="font-bold mt-1 mb-2">Contact Information</p>
          <hr className="bg-gray-300 mb-2" />
          <p className="flex items-center justify-start gap-2">
            <PhoneIcon className="w-4"></PhoneIcon>
            <div>
              <span className="font-bold mt-1 mb-4">Phone: </span>
              {phone}
            </div>
          </p>
          <p className="flex items-center justify-start gap-2">
            <InboxIcon className="w-4"></InboxIcon>
            <div>
              <span className="font-bold mt-1 mb-4">Email: </span>
              {email}
            </div>
          </p>
          <p className="flex items-center justify-start gap-2">
            <MapPinIcon className="w-4"></MapPinIcon>
            <div>
              <span className="font-bold mt-1 mb-2">Address: </span>
              {location}
            </div>
          </p>
        </div>
        <Link to="/cart"><button onClick={()=>handleAddToCart(id)} className="btn inline-block">Apply Now</button></Link>
      </div>
    </div>
  );
};

export default Details;
