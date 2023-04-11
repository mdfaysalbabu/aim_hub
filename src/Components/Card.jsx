import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon,CurrencyDollarIcon} from '@heroicons/react/24/solid'

const Card = ({ product }) => {
  const { company, location, salary, position, image, id,site,time } = product;
  return (
    <div className="grid ">
      <div className="card text-start mt-4 border gap-4 mx-3 p-4  ">
        <img className="w-24   h-20 md:h-20 xl:h-20" src={image} alt="" />
        <h1 className="text-xl font-bold">{position}</h1>
        <h5>{company}</h5>
        <div className="flex gap-3">
          <button className="btn-outline">{site}</button>
          <button className="btn-outline">{time}</button>
        </div>
        <div className="flex gap-4">
          <p className="flex"><MapPinIcon className="w-4 bg-white text-gray-400"></MapPinIcon>{location}</p>
          <p className="flex gap-1 items-center justify-center text-center"><CurrencyDollarIcon className="w-4 text-center text-gray-400"></CurrencyDollarIcon> salary: {salary}</p>
        </div>
        <Link to={`../details/${id}`}>
          <button
            className="w-24 buttonMain p-1"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
