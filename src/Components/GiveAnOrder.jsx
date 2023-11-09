import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function GiveAnOrder({
  totalPrice,
  tickPrice,
  additionalPrice,
  countUp,
  countDown,
  quantity,
  submitHandler,
}) {
  useEffect(() => {}, []);

  return (
    <div className=" flex flex-row justify-between mb-40">
      <div className="w-[30%] pt-6 flex ">
        <button
          type="button"
          onClick={countDown}
          className="p-2 w-[33%] bg-yellow-400 h-[30%] rounded-md"
        >
          -
        </button>
        <p className="w-[33%] h-[30%] text-center pt-3 rounded-sm">
          {quantity}
        </p>

        <button
          type="button"
          onClick={countUp}
          className="w-[33%] bg-yellow-400 h-[30%]  rounded-md"
        >
          +
        </button>
      </div>
      <div className="w-[60%] flex flex-col">
        <div className="w-[100%] flex flex-col pt-6 pb-6">
          <h3 className="text-zinc-800 font-semibold font-barlow ml-7">
            Sipariş Toplamı
          </h3>
          <div className="flex justify-evenly mt-5">
            <h4 className="w-[50%]"> Seçimler </h4>
            <p className="w-[25%]">{additionalPrice}₺</p>
          </div>
          <div className="flex justify-evenly mt-3">
            <h4 className="w-[50%]"> Toplam </h4>
            <p className="w-[25%]">
              {(totalPrice + tickPrice + additionalPrice) * quantity}₺
            </p>
          </div>
        </div>
        <button
          onClick={submitHandler}
          id="order-button"
          className="p-3 bg-yellow-400 text-zinc-800 rounded-md"
        >
          SİPARİŞ VER{" "}
        </button>
      </div>
    </div>
  );
}

export default GiveAnOrder;
