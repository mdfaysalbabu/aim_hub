import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CartDetails from "./CartDetails";

const Details = () => {
  const params = useParams();
  console.log(params)
  const data=useLoaderData()

    const total=data.jobs.find(pd=>pd.id===params.id)
    

  console.log(total)

  return (
    <div className="bg-gray-100 my-container pt-20 pb-20 mb-10">
      <h1 className="text-center font-bold text-2xl">Job Details</h1>
      <h1>{total.company}</h1>
    </div>
  );
};

export default Details;
