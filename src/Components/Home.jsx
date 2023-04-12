import React, { useEffect, useState } from "react";

import { Link, useLoaderData } from "react-router-dom";
import Card from "./Card";
import Apply from "./Apply";

const Home = () => {
  const [catData, Setcategory] = useState([]);

  useEffect(() => {
    fetch("/job.json")
      .then((res) => res.json())
      .then((data) => Setcategory(data));
  }, []);

  const [data, SetData] = useState([]);
  const products = useLoaderData();
  useEffect(() => {
    const items = products.slice(0, 4);
    SetData(items);
  }, [products]);

  const showAll = () => {
    SetData(products);
    document.getElementById("show").style.display = "none";
  };

  return (
    <>
      <div className="my-container flex flex-col-reverse items-center justify-between  lg:flex-row bg-gray-50">
        {/* Text Content */}
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0 pl-20">
          <div className="max-w-xl mb-4 lg:mt-8 ">
            <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              <span className="text-5xl font-bold pb-1">One Step</span> <br /> <span className="text-5xl font-bold ">Closer To
              Your</span>
              <span className="inline-block text-violet-400 text-5xl pt-1">
                Dream Job
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link to="/new" className="buttonMain  md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <button className="mr-3 p-2">Get Started</button>
              </div>
            </Link>
          </div>
        </div>
        
        <div className="">
          <div className="w-full py-5 ">
            <img className="p-5 "
              src="https://i.ibb.co/mCmf72d/P3-OLGJ1-copy-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <section className="mb-10 ">
        <div>
          <h2 className="text-4xl text-center mb-4 mt-5">Job Category List</h2>
          <p className="text-center mb-5 m-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid md:grid-cols-4 mx-28  items-center justify-center text-center gap-4 ">
          {catData.map((category) => (
            <Apply category={category}></Apply>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <div>
          <h2 className="text-center text-3xl mb-4">Featured Jobs</h2>
          <p className="text-center m-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid md:grid-cols-2 card text-center justify-center items-center mx-28 ">
          {data.map((product) => (
            <Card product={product}></Card>
          ))}
        </div>
        <div className="text-center mt-8 ">
          <button onClick={showAll} id="show" className="text-center buttonMain ">
            Show All
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
