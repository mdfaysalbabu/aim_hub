import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { company, location, Salary, position, image, id } = product;
  return (
    <div className="grid ">
      <div className="card text-start mt-4 border gap-4 mx-3 p-4  ">
        <img className="w-24   h-20 md:h-20 xl:h-20" src={image} alt="" />
        <h1 className="text-xl font-bold">{position}</h1>
        <h5>{company}</h5>
        <div className="flex gap-3">
          <button>Remote</button>
          <button>Full Time</button>
        </div>
        <div className="flex gap-3">
          <p>{location}</p>
          <p>{Salary}</p>
        </div>
        <Link to={`../details/${id}`}>
          <button
            className="w-24 text-white rounded p-1 bg-purple-500 mt-3"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
