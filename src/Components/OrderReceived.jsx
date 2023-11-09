import React from "react";
import { useLocation } from "react-router-dom";

const OrderReceived = () => {
  const location = useLocation();
  let takeData = {};
  if (location.state) {
    takeData = location.state; // Veriyi location üzerinden alıyoruz
    console.log("gelen data", takeData);
  } else {
    console.log("Veri yok");
  }
  return (
    <>
      <div className="bg-red-600 w-screen h-[100vh] flex flex-col justify-around items-center">
        <div className="w-1/2 h-[90vh] flex flex-col justify-between">
          <div className="font-londrina text-[50px] text-center text-white">
            Teknolojik Yemekler
          </div>
          <div className="flex flex-col items-center border-solid border-b">
            <p className="font-satisfy text-[35px] text-yellow-500 -mb-4">
              lezzetin yolda
            </p>
            <h1 className="font-bebas text-[90px] text-center text-white tracking-wider">
              SİPARİŞ Alındı
            </h1>
          </div>
          <div className="text-center text-white">
            <h1 className="font-barlow text-[29px]">
              Position Absolute Acı Pizza
            </h1>
          </div>
          <div className="w-[100%] flex justify-center font-barlow text-white">
            <div className="w-[40%]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 ">
                  <h1 className="text-zinc-300">
                    Boyut:{" "}
                    <span className="uppercase text-white">
                      {takeData.pizzaSize}
                    </span>
                  </h1>
                  <h1 className="text-zinc-300">
                    Hamur :{" "}
                    <span className="uppercase text-white">
                      {takeData.pizzaDough}
                    </span>{" "}
                  </h1>
                  <h1 className="text-zinc-300">
                    Ek Malzemeler:{" "}
                    <span className=" flex flex-wrap gap-3 text-white">
                      {takeData.addItems.map((item) => {
                        return `${item}, `;
                      })}
                    </span>{" "}
                  </h1>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-10 font-barlow text-white">
            <div className="w-[40%] flex flex-col items-center border-solid border border-stone-100 rounded-md">
              <div className="w-[90%] flex flex-col  gap-3 p-6 ">
                <h3 className="text-white font-semibold font-barlow ">
                  Sipariş Toplamı
                </h3>
                <div className="flex justify-between ">
                  <h4 className="w-[50%]"> Seçimler </h4>
                  <p className="w-[25%]">{takeData.addItems.length * 5}₺</p>
                </div>
                <div className="flex justify-between ">
                  <h4 className="w-[50%]"> Toplam </h4>
                  <p className="w-[25%]">
                    {takeData.totalBasket}₺
                    {/* {(totalPrice + tickPrice + additionalPrice) * quantity}₺ */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderReceived;
