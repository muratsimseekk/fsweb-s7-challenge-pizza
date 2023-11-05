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
          <nav className="absolute bottom-3 flex font-barlow">
            <a className="text-[14px] text-gray-400 hover:text-white hover:cursor-pointer ">
              Anasayfa
            </a>
            <p className="text-gray-400">-</p>
            <a className="text-[14px] text-white hover:text-white hover:cursor-pointer active:text-white ">
              Siparis Olustur
            </a>
          </nav>
        </div>
      </div>
      <div className="flex flex-col w-[40%] h-[82vh] bg-blue-400 gap-2">
        <div className="bg-yellow-300 w-[70%] p-4 pl-0 mt-2 ">
          <h1 className="text-[15px]  text-zinc-800 font-semibold font-barlow">
            Position Absulute Pizza
          </h1>
        </div>
        <div className="bg-red-400 ">
          <h1 className="text-zinc-800 font-bold text-[22px] font-barlow leading-10">
            85.50₺{" "}
          </h1>
        </div>
        <div className="bg-blue-300  ">
          <p className="text-zinc-500 text-base text-[13px] font-barlow leading-7">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
        <div className="bg-black  h-[10vh]"></div>
        <div className="bg-green-500  h-[10vh]"></div>
        <div className="bg-purple-400  h-[10vh]"></div>
        <div className="bg-yellow-300  h-[10vh]"></div>
        <div className="bg-blue-400  h-[10vh]"></div>
      </div>
    </div>
  );
};

export default OrderForm;
