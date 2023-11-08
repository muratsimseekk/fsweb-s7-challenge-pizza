import React, { useEffect } from "react";

function Sizing({ size, handleRadioChange, tickness, optionSelection }) {
  return (
    <div className=" flex flex-row  mt-5">
      <div className="w-[50%]  flex flex-col">
        <h3 className="text-zinc-800 font-semibold font-barlow mb-3 leading-normal ">
          Boyut Sec <span className="text-rose-700">*</span>
        </h3>
        <div className="flex flex-col gap-3 text-[13px] text-zinc-600 text-base font-medium font-barlow accent-blue-600">
          <label>
            <input
              type="radio"
              name="myRadio"
              value="sm"
              id="small"
              checked={size === "sm"}
              onChange={handleRadioChange}
            />
            Küçük
          </label>
          <label>
            <input
              type="radio"
              name="myRadio"
              value="md"
              id="medium"
              checked={size === "md"}
              onChange={handleRadioChange}
            />
            Orta
          </label>
          <label>
            <input
              type="radio"
              name="myRadio"
              value="lg"
              id="large"
              checked={size === "lg"}
              onChange={handleRadioChange}
            />
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
            value={tickness}
            onChange={optionSelection}
            id="ticknessDough"
          >
            <option value="" disabled>
              Hamur Kalınlığı
            </option>
            <option value="normal">Normal</option>
            <option value="thin">İnce</option>
            <option value="cheese">Peynirli</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default Sizing;
