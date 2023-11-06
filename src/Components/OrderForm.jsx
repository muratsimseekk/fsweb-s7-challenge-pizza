import React, { useEffect, useState } from "react";
import Sizing from "./Sizing";
import Additional from "./Additional";
import GiveAnOrder from "./GiveAnOrder";
import Info from "./Info";

const OrderForm = () => {
  const [productInPrice, setProductInPrice] = useState(85.5);
  const [size, setSize] = useState("sm");
  const [totalPrice, setTotalPrice] = useState(productInPrice);

  const handleRadioChange = (event) => {
    setSize(event.target.value);
  };

  useEffect(() => {
    console.log("useeffect icerisindeki size degeri  :  ", size);
  }, [size]);

  return (
    <div className="w-screen  bg-stone-100 flex flex-col items-center">
      <div className="w-[100%] h-[16vh] bg-red-600"></div>
      <div className="w-[40%] h-[16vh] bg-red-600 absolute ">
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
      <div className="flex flex-col w-[40%]   gap-2">
        <div className=" w-[70%] p-4 pl-0 mt-2 ">
          <h3 className=" text-zinc-800 font-semibold font-barlow">
            Position Absulute Pizza
          </h3>
        </div>
        <div className="flex justify-between">
          <h1 className="text-zinc-800 font-bold text-[22px] w-[25%] font-barlow leading-10">
            {productInPrice}₺
          </h1>
          <div className="flex font-barlow text-zinc-500 w-[40%] items-center justify-between">
            <p>4.9</p>
            <p>(200)</p>
          </div>
        </div>
        <div>
          <p className="text-zinc-500 text-base text-[13px] font-barlow leading-5">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
        <Sizing size={size} handleRadioChange={handleRadioChange} />
        <Additional />
        <Info />
        <hr className="mt-5 mb-5" />
        <GiveAnOrder />
      </div>
    </div>
  );
};

export default OrderForm;
