import React from "react";

const JobShow = ({ job }) => {
  console.log(job);
  const { position, location, salary, company, image, site, time } = job;
  return (
    <div>
      <div className="bg-gray-100 w-full  pb-20 mb-10 px-6 py-16  ">
        <h1 className="text-center font-bold text-2xl">Job Details</h1>
      </div>
      <div className="flex mb-6 border rounded-lg shadow-lg p-8 items-center">
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
              <button className="rounded border-2 py-1 px-5 mb-3 mt-3 ">
                {site}
              </button>
              <button className="rounded border-2 py-1 px-5 mb-3 mt-3">
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
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default JobShow;
