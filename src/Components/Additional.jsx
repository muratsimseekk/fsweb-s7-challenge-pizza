import React from "react";

function Additional() {
  return (
    <>
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
    </>
  );
}

export default Additional;
