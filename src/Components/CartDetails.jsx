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
      const addedCart = jobSet.jobs.find((job) => job.id === id);
      if (addedCart) {
        saveCart.push(addedCart);
      }
    }
    SetCart(saveCart);
  }, [jobSet]);

  return (
    <div>
      
        <div className= "gap-6 mx-20  h-20">
          {cart.map((job) => (
            <JobShow job={job} key={job.id}></JobShow>
          ))}
        </div>
      
    </div>
  );
};

export default CartDetails;
