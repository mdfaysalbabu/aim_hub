import React from "react";

const JobShow = ({ job }) => {
  console.log(job);
  const { position, location, salary, company, image, site, time } = job;
  return (
    <div>
      
      <div className="flex mb-10 border rounded-lg shadow-lg p-8 items-center ">
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
              <button className="btn-outline">
                {site}
              </button>
              <button className="btn-outline">
                {time}
              </button>
            </div>
            <div className="flex gap-6 mb-6">
              <p>{location}</p>
              <p>{salary}</p>
            </div>
          </div>
        </div>
        <div>
          <button className="buttonMain">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default JobShow;
