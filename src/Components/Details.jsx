import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  // const total=useLoaderData()
  const params = useParams();
  console.log(params)
  // const jobs=useLoaderData()
  // const {id}=params
  const [job, SetJobs] = useState({});
  useEffect(() => {
    fetch("../../public/data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="bg-gray-100 my-container pt-20 pb-20 mb-10">
      <h1 className="text-center font-bold text-2xl">Job Details</h1>
    </div>
  );
};

export default Details;
