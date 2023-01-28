import React from "react";
import Navbar from "../components/Navbar";
import ChloRelief from "../assets/images/ChloRelief.png";
import Lubie from '../assets/images/lubie.png'
const Home = () => {
  return (
    <div>
      <div className=" h-screen w-full backgroundImage relative "> </div>
      <div className="absolute text-xl bg-text ">
        <Navbar />
        <div className="mt-20 flex justify-center ">
          <div className="">
            <h1 className="text-3xl w-[300px] tracking-wider">
              To enhance and nurture the wellness of every individual
            </h1>
            <p className="text-xs text-[#c9c7c7] my-5">Providing innovative and cost- efficient products at a competitive price</p>
            <div className="flex gap-6 mt-2">
            <div className=' rounded-md p-2 bg-primary-500 text-light shadow-md hover:bg-primary-600 hover:text-secondary-400'>Order Now</div>
            <div className=' rounded-md p-2 text-light bg-secondary-500 shadow-md hover:bg-secondary-600 hover:text-primary-200 text-md'>Order Now</div>
            </div>

          </div>

          <div className="md:flex relative w-[250px] hidden ">
            <img src={ChloRelief} className="w-52 h-52 absolute bottom-0" />
            <img src={ChloRelief} className="w-52 h-52 absolute left-9 bottom-0" />
            <img src={Lubie} className="w-52 h-52 absolute -right-10 -bottom-5" />
            <img src={Lubie} className="w-52 h-52 absolute -right-20 -bottom-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
