import React from "react";

function GiveAnOrder({ totalPrice, tickPrice, additionalPrice }) {
  return (
    <div className=" flex flex-row justify-between mb-40">
      <div className="w-[30%] pt-6 flex ">
        <button className="p-2 w-[33%] bg-yellow-400 h-[30%] rounded-md">
          -
        </button>
        <input
          type="number"
          className="w-[33%] h-[30%] text-center rounded-sm"
        />
        <button className="w-[33%] bg-yellow-400 h-[30%]  rounded-md">+</button>
      </div>
      <div className="w-[60%] flex flex-col">
        <div className="w-[100%] flex flex-col pt-6 pb-6">
          <h3 className="text-zinc-800 font-semibold font-barlow ml-7">
            Sipariş Toplamı
          </h3>
          <div className="flex justify-evenly mt-5">
            <h4 className="w-[50%]"> Seçimler </h4>
            <p className="w-[25%]">25.00₺</p>
          </div>
          <div className="flex justify-evenly mt-3">
            <h4 className="w-[50%]"> Toplam </h4>
            <p className="w-[25%]">
              {totalPrice + tickPrice + additionalPrice}₺
            </p>
          </div>
        </div>
        <button className="p-3 bg-yellow-400 text-zinc-800 rounded-md">
          SİPARİŞ VER{" "}
        </button>
      </div>
    </div>
  );
}

export default GiveAnOrder;
