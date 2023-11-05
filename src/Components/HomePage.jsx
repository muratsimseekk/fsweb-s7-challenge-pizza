import React from "react";

export default function HomePage() {
  return (
    <>
      <h1 className="absolute left-[600px] top-[70px] text-[34px] font-londrina text-white">
        Teknolojik Yemekler
      </h1>
      <div className="w-screen  h-[100vh] flex flex-col justify-between items-center bg-red-600 text-white">
        <div className="= w-3/5 mt-32 h-80 justify-center items-center flex flex-col gap-5 ">
          <div className="text-center text-[60px] uppercase font-bebas font-thin leading-[75px]  ">
            KOD ACIKTIRIR
            <br />
            Pizza, DOYURUR
          </div>

          <button className=" bg-yellow-400 pl-11 pr-11 rounded-[40px] text-center text-zinc-800 text-lg font-semibold font-['Barlow'] leading-[45px] hover:cursor-pointer hover:text-zinc-700 ">
            ACIKTIM
          </button>
        </div>
        <img className="w-[70%] " src="src/Components/banner.png" />
      </div>
    </>
  );
}
