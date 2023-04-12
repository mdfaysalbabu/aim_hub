import React from "react";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  PhoneIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

const JobShow = ({ job }) => {
  console.log(job);
  const { position, location, salary, company, image, site, time, id } = job;
  return (
    <div>
      <div className="md:flex lg:flex mb-10 border rounded-lg shadow-lg p-8 items-center ">
        <div className="w-60 h-40 flex justify-center items-center rounded-lg img-background">
          <img
            className="w-40 h-24 shadow-xl object cover  p-3 bg-gray-100 rounded"
            src={image}
            alt=""
          />
        </div>
        <div className="ml-8 flex-grow">
          <div className="">
            <p className="font-bold text-xl">{position}</p>
            <p className="mt-2 mn-4">{company}</p>
            <div className="flex gap-3">
              <button className="btn-outline">{site}</button>
              <button className="btn-outline">{time}</button>
            </div>
            <div className="flex gap-6 mb-6">
              <p className="flex items-center justify-start gap-1">
                <MapPinIcon className="w-4"></MapPinIcon>
                <div>
                  <span className=" mt-1 mb-2">Address : </span>
                  {location}
                </div>
              </p>
              <p className="flex items-center justify-start text-center gap-1">
                <CurrencyDollarIcon className="w-4 "></CurrencyDollarIcon>
                <div>
                  <span className=" mb-3">Salary:</span>
                  {salary}
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to={`../details/${id}`}>
            <button className="buttonMain">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobShow;
