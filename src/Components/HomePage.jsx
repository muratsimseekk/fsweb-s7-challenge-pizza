import React from "react";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const history = useHistory();

  const handleClick = () => {
    history.push("./pizza");
  };
  return (
    <>
      <div className="w-screen bg-red-600 h-[100vh] flex flex-col justify-between items-center">
        <div className="text-center p-[60px]">
          <h1 className="bg-red-600 text-[34px] font-londrina text-white ">
            Teknolojik Yemekler
          </h1>
        </div>

        <div className="w-3/5 text-center bg-red-600 text-white">
          <div className="text-center text-[60px] uppercase font-bebas font-thin leading-[75px]  ">
            KOD ACIKTIRIR
            <br />
            Pizza, DOYURUR
          </div>

          <button
            onClick={handleClick}
            className=" bg-yellow-400 pl-11 pr-11 rounded-[40px] text-center text-zinc-800 text-lg font-semibold font-['Barlow'] leading-[45px] hover:cursor-pointer hover:text-zinc-700 "
          >
            ACIKTIM
          </button>
        </div>

        <div className="w-[70%] mr-auto ml-auto">
          <img src="src/Components/banner.png" />
        </div>
      </div>
    </>
  );
}
