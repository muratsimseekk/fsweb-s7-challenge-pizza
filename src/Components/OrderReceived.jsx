import React from "react";

const OrderReceived = () => {
  return (
    <>
      <div className="bg-red-600 w-screen h-[100vh] flex justify-center items-center">
        <div className="w-1/3 h-3/5  mb-28 flex flex-col justify-between">
          <div className="font-londrina text-[34px] text-center text-white">
            Teknolojik Yemekler
          </div>
          <div className="font-bebas text-[55px] text-white text-center tracking-wider leading-[92px]">
            tebrikler! <br />
            Siparisiniz alindi!
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderReceived;
