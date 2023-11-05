import React from "react";

const OrderForm = () => {
  return (
    <div className="w-screen h-[100vh] bg-red-600 flex flex-col items-center">
      <div className="w-[100%] h-[16vh] bg-slate-300"></div>
      <div className="w-[40%] h-[16vh] bg-gray-600 absolute ">
        <div className="relative h-[16vh]">
          <h1 className="text-[34px] font-londrina text-center relative top-7 text-white">
            Teknolojik Yemekler
          </h1>
          <nav className="absolute bottom-0 flex font-barlow">
            <a className="text-[14px] text-gray-400 hover:text-white hover:cursor-pointer ">
              Anasayfa-Secenekler-
            </a>
            <a className="text-[14px] text-white hover:text-white hover:cursor-pointer active:text-white ">
              Siparis Olustur
            </a>
          </nav>
        </div>
      </div>
      <div className="w-[40%] h-[82vh] bg-blue-400"></div>
    </div>
  );
};

export default OrderForm;
