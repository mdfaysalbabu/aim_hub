import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "./Utilites/Fakedb";
import JobShow from "./JobShow";

const CartDetails = () => {
  const jobSet = useLoaderData();
  const [cart, SetCart] = useState([]);
  useEffect(() => {
    const storeCart = getShoppingCart();
    const saveCart = [];
    for (const id in storeCart) {
      const addedCart = jobSet.find((job) => job.id === id);
      if (addedCart) {
        saveCart.push(addedCart);
      }
    }
    SetCart(saveCart);
  }, [jobSet]);

  return (
    <div>
       <div className="bg-gray-100 w-full  pb-20 mb-10 pt-10 ">
        <h1 className="text-center font-bold text-2xl">Job Details</h1>
      </div>
        <div className= "gap-6 mx-20  h-20 mb-10 mt-10">
          {cart.map((job) => (
            <JobShow job={job} key={job.id}></JobShow>
          ))}
        </div>
      
    </div>
  );
};

export default CartDetails;
