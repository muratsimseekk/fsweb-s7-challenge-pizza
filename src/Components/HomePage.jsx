import React from "react";

export default function HomePage() {
  return (
    <>
      <h1 className="absolute left-[600px] top-[80px] text-[30px] font-['Londrina']">
        Teknolojik Yemekler
      </h1>
      <div className="w-screen  h-[100vh] flex flex-col justify-between items-center bg-red-600">
        <div className="= w-3/5 mt-32 h-80 justify-center items-center flex flex-col gap-5 ">
          <div className="text-center text-[35px] uppercase ">
            KOD ACIKTIRIR
            <br />
            Pizza, DOYURUR
          </div>
          <div className=" w-2/5 bg-yellow-400 rounded-[50px] flex justify-center">
            <div className="w-[93.47px] h-[52px] text-center text-zinc-800 text-lg font-semibold font-['Barlow'] leading-[56px]">
              ACIKTIM
            </div>
          </div>
        </div>
        <img className="w-[70%] " src="src/Components/banner.png" />
      </div>
    </>
  );
}
