import React from "react";

const OrderForm = () => {
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
        <div>
          <h1 className="text-zinc-800 font-bold text-[22px] font-barlow leading-10">
            85.50₺{" "}
          </h1>
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
        <div className=" flex flex-row  mt-5">
          <div className="w-[50%]  flex flex-col">
            <h3 className="text-zinc-800 font-semibold font-barlow mb-3 leading-normal ">
              Boyut Sec <span className="text-rose-700">*</span>
            </h3>
            <div className="flex flex-col gap-3 text-[13px] text-zinc-600 text-base font-medium font-barlow accent-blue-600">
              <label>
                <input type="radio" name="myRadio" value="kucuk" />
                Küçük
              </label>
              <label>
                <input type="radio" name="myRadio" value="kucuk" />
                Orta
              </label>
              <label>
                <input type="radio" name="myRadio" value="kucuk" />
                Büyük
              </label>
            </div>
          </div>
          <div className="w-[50%] ">
            <h3 className="text-zinc-800 font-semibold font-barlow leading-normal mb-3">
              Hamur Seç <span className="text-red-600">*</span>
            </h3>
            <label>
              <select
                className="bg-zinc-200 text-[13px] text-zinc-800"
                name="selectionTickness"
              >
                <option value="hamur">Hamur Kalınlığı</option>
                <option value="ince">İnce</option>
                <option value="kalin">Kalın</option>
              </select>
            </label>
          </div>
        </div>
        <div className="text-zinc-800  mt-5">
          <h3 className=" font-semibold font-barlow leading-normal">
            Ek Malzemeler
          </h3>
          <p className="text-zinc-500 text-base text-[13px] font-barlow leading-7">
            En Fazla 10 malzeme seçebilirsiniz. 5₺
          </p>
        </div>
        <div className=" mt-2 flex flex-row flex-wrap gap-2 font-barlow text-zinc-500 text-base accent-blue-600 ">
          <div className="w-[30%]">
            <label>
              <input type="checkbox" />
              Pepperoni
            </label>
          </div>
          <div className="w-[30%]">
            <label>
              <input type="checkbox" />
              Sosis
            </label>
          </div>
          <div className="w-[30%]">
            <label>
              <input type="checkbox" />
              Kanada Jambonu
            </label>
          </div>
          <div className="w-[30%]">
            <label>
              <input type="checkbox" />
              Tavuk Izgara
            </label>
          </div>
          <div className="w-[30%]">
            <label>
              <input type="checkbox" />
              Soğan
            </label>
          </div>
          <div className="w-[30%]">
            <label>
              <input type="checkbox" />
              Domates
            </label>
          </div>
          <div className="w-[30%]">
            <label>
              <input type="checkbox" />
              Mısır
            </label>
          </div>
          <div className="w-[30%]">
            <label>
              <input type="checkbox" />
              Sucuk
            </label>
          </div>
          <div className="w-[30%]">
            <label>
              <input type="checkbox" />
              Jalepeno
            </label>
          </div>
          <div className="w-[30%]">
            <label>
              <input type="checkbox" />
              Sarımsak
            </label>
          </div>
          <div className="w-[30%]">
            <label>
              <input type="checkbox" />
              Biber
            </label>
          </div>
          <div className="w-[30%]">
            <label>
              <input type="checkbox" />
              Sucuk
            </label>
          </div>
          <div className="w-[30%]">
            <label>
              <input type="checkbox" />
              Ananas
            </label>
          </div>
          <div className="w-[30%]">
            <label>
              <input type="checkbox" />
              Kabak
            </label>
          </div>
        </div>

        <div className=" mt-10 flex flex-col gap-3 ">
          <h3 className="text-zinc-800 font-semibold font-barlow">
            Sipariş Notu
          </h3>
          <input
            className="w-2/3 h-10 border-zinc-400 border-2 "
            type="text"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
        </div>
        <hr className="mt-5 mb-5" />
        <div className=" flex flex-row justify-between">
          <div className="w-[30%] bg-slate-600 h-[15vh]"></div>
          <div className="w-[60%] bg-blue-500 h-[15vh]"></div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
