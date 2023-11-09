import React from "react";

function Additional({ checkSelection, itemsArr, formError }) {
  return (
    <>
      <div className="text-zinc-800  mt-5">
        <h3 className=" font-semibold font-barlow leading-normal">
          Ek Malzemeler
        </h3>
        <p className="text-zinc-500 text-base text-[13px] font-barlow leading-7">
          En Fazla 10 malzeme seçebilirsiniz. 5₺
        </p>
        <p className="text-red-600">{formError.addItems}</p>
      </div>
      <div className=" mt-2 flex flex-row flex-wrap gap-2 font-barlow text-zinc-500 text-base accent-blue-600 ">
        <div className="w-[30%]">
          <label>
            <input
              type="checkbox"
              name="Pepperoni"
              onChange={checkSelection}
              id="pepperoni"
              disabled={
                itemsArr.length >= 10 && !itemsArr.includes("Pepperoni")
              }
            />
            Pepperoni
          </label>
        </div>
        <div className="w-[30%]">
          <label>
            <input
              type="checkbox"
              name="Sosis"
              id="sosis"
              onChange={checkSelection}
              disabled={itemsArr.length >= 10 && !itemsArr.includes("Sosis")}
            />
            Sosis
          </label>
        </div>
        <div className="w-[30%]">
          <label>
            <input
              type="checkbox"
              name="Kanada Jambonu"
              id="jambon"
              onChange={checkSelection}
              disabled={
                itemsArr.length >= 10 && !itemsArr.includes("Kanada Jambonu")
              }
            />
            Kanada Jambonu
          </label>
        </div>
        <div className="w-[30%]">
          <label>
            <input
              type="checkbox"
              name="Tavuk Izgara"
              id="izgara"
              onChange={checkSelection}
              disabled={
                itemsArr.length >= 10 && !itemsArr.includes("Tavuk Izgara")
              }
            />
            Tavuk Izgara
          </label>
        </div>
        <div className="w-[30%]">
          <label>
            <input
              type="checkbox"
              name="Soğan"
              id="sogan"
              onChange={checkSelection}
              disabled={itemsArr.length >= 10 && !itemsArr.includes("Soğan")}
            />
            Soğan
          </label>
        </div>
        <div className="w-[30%]">
          <label>
            <input
              type="checkbox"
              name="Domates"
              id="domates"
              onChange={checkSelection}
              disabled={itemsArr.length >= 10 && !itemsArr.includes("Domates")}
            />
            Domates
          </label>
        </div>
        <div className="w-[30%]">
          <label>
            <input
              type="checkbox"
              name="Mısır"
              id="misir"
              onChange={checkSelection}
              disabled={itemsArr.length >= 10 && !itemsArr.includes("Mısır")}
            />
            Mısır
          </label>
        </div>
        <div className="w-[30%]">
          <label>
            <input
              type="checkbox"
              name="Sucuk"
              id="sucuk"
              onChange={checkSelection}
              disabled={itemsArr.length >= 10 && !itemsArr.includes("Sucuk")}
            />
            Sucuk
          </label>
        </div>
        <div className="w-[30%]">
          <label>
            <input
              type="checkbox"
              name="Jalepeno"
              id="jalepeno"
              onChange={checkSelection}
              disabled={itemsArr.length >= 10 && !itemsArr.includes("Jalepeno")}
            />
            Jalepeno
          </label>
        </div>
        <div className="w-[30%]">
          <label>
            <input
              type="checkbox"
              name="Sarımsak"
              id="sarimsak"
              onChange={checkSelection}
              disabled={itemsArr.length >= 10 && !itemsArr.includes("Sarımsak")}
            />
            Sarımsak
          </label>
        </div>
        <div className="w-[30%]">
          <label>
            <input
              type="checkbox"
              name="Biber"
              id="biber"
              onChange={checkSelection}
              disabled={itemsArr.length >= 10 && !itemsArr.includes("Biber")}
            />
            Biber
          </label>
        </div>
        <div className="w-[30%]">
          <label>
            <input
              type="checkbox"
              name="Salam"
              id="salam"
              onChange={checkSelection}
              disabled={itemsArr.length >= 10 && !itemsArr.includes("Salam")}
            />
            Salam
          </label>
        </div>
        <div className="w-[30%]">
          <label>
            <input
              type="checkbox"
              name="Ananas"
              id="ananas"
              onChange={checkSelection}
              disabled={itemsArr.length >= 10 && !itemsArr.includes("Ananas")}
            />
            Ananas
          </label>
        </div>
        <div className="w-[30%]">
          <label>
            <input
              type="checkbox"
              name="Kabak"
              id="kabak"
              onChange={checkSelection}
              disabled={itemsArr.length >= 10 && !itemsArr.includes("Kabak")}
            />
            Kabak
          </label>
        </div>
      </div>
    </>
  );
}

export default Additional;
