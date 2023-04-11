import React, { useEffect, useState } from "react";
import {
  CalculatorIcon,
  LightBulbIcon,
  AcademicCapIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";
import { Link, useLoaderData } from "react-router-dom";
import Card from "./Card";
import Apply from "./Apply";

const Home = () => {
  const [catData, Setcategory] = useState([]);

  useEffect(() => {
    fetch("../../public/job.json")
      .then((rse) => rse.json())
      .then((data) => Setcategory(data));
  }, []);

  const [datas, SetData] = useState([]);
  const products = useLoaderData();
  useEffect(() => {
    const items = products.jobs.slice(0, 4);
    SetData(items);
  }, [products]);

  const showAll = () => {
    SetData(products);
    document.getElementById("show").style.display = "none";
  };

  return (
    <>
      <div className="my-container flex flex-col items-center justify-between lg:flex-row bg-gray-100">
        {/* Text Content */}
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              One Step <br className="hidden md:block text-6xl" /> Closer To
              Your{" "}
              <span className="inline-block text-blue-400 text-5xl">
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
            <Link to="/books" className="btn md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="mr-3">Get Started</p>
              </div>
            </Link>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <img
              src="https://img.lovepik.com/free-png/20211214/lovepik-business-man-leaving-his-job-sad-png-image_401612240_wh300.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <section className="mb-10 ">
        <h2 className="text-4xl text-center mb-4">Job Category List</h2>
        <p className="text-center mb-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid md:grid-cols-4 my-container items-center justify-center text-center gap-4 ">
          <div className="border text-start p-3 shadow-xl">
            <span className="border shadow-xl">
              <CalculatorIcon className="w-10 shadow-xl border p-2"></CalculatorIcon>
            </span>
            <h4 className="font-bold">Account & Finance</h4>
            <p>300 Jobs Available</p>
          </div>
          <div className="border text-start p-3 shadow-xl">
            <span className="border shadow-xl">
              <LightBulbIcon className="w-10 shadow-xl border p-2"></LightBulbIcon>
            </span>
            <h4 className="font-bold">Account & Finance</h4>
            <p>300 Jobs Available</p>
          </div>
          <div className="border text-start p-3 shadow-xl">
            <span>
              <AcademicCapIcon className="w-10 shadow-xl border p-2"></AcademicCapIcon>
            </span>
            <h4 className="font-bold mt-5">Account & Finance</h4>
            <p>300 Jobs Available</p>
          </div>
          <div className="border text-start p-4 shadow-xl">
            <span>
              <BanknotesIcon className="w-10 shadow-xl border p-2"></BanknotesIcon>
            </span>
            <h4 className="font-bold mt-5">Account & Finance</h4>
            <p>300 Jobs Available</p>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <div>
          <h2 className="text-center text-3xl mb-4">Featured Jobs</h2>
          <p className="text-center">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid md:grid-cols-2 card text-center justify-center items-center mx-28 ">
          {products.jobs.map((product) => (
            <Card product={product}></Card>
          ))}
        </div>

        {/* {catData.map((category) => (category = { category }))} */}

        <button onClick={showAll} id="show" className="">
          Show All
        </button>
      </section>
    </>
  );
};

export default Home;
