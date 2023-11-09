import React from "react";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const history = useHistory();

  const handleClick = () => {
    history.push("./pizza");
  };
  return (
    <>
      <div className="flex flex-col">
        <div>
          <div className="w-screen bg-red-600  flex flex-col justify-between items-center">
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
        </div>
        <div className="w-[100%] h-[10vh] bg-slate-700 flex  justify-center text-zinc-800 bg-white">
          <div className="flex justify-between w-[75%] gap-5">
            <div className="flex gap-3">
              <img src="src/img/kore.svg" />
              <h1 className="font-barlow flex items-center gap-1">
                YENİ! <span>Kore</span>{" "}
              </h1>
            </div>
            <div className="flex gap-3">
              <img src="src/img/pizza.svg" />
              <h1 className="font-barlow flex items-center gap-1">Pizza</h1>
            </div>
            <div className="flex gap-3">
              <img src="src/img/burger.svg" />
              <h1 className="font-barlow flex items-center gap-1">Burger</h1>
            </div>
            <div className="flex gap-3">
              <img src="src/img/kizartma.svg" />
              <h1 className="font-barlow flex items-center gap-1">
                Kızartmalar
              </h1>
            </div>
            <div className="flex gap-3">
              <img src="src/img/fast-food.svg" />
              <h1 className="font-barlow flex items-center gap-1">
                Fast food
              </h1>{" "}
            </div>
            <div className="flex gap-3">
              <img src="src/img/icecek.svg" />
              <h1 className="font-barlow flex items-center gap-1">
                Gazlı İçecek
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[100%] bg-amber-100">
          <div className="w-[65%] mx-auto mt-10 flex flex-col">
            <div className="w-[100%] bg-black  flex justify-between p-2">
              <div className="w-[48%]  bg-yellow-500 rounded-md">
                <img
                  src="src/adv-aseets/kart-1.png"
                  className="bg-cover w-[100%] rounded-lg"
                />
              </div>
              <div className="w-[48%]  flex flex-col justify-between">
                <div className="w-[100%] ">
                  <img
                    src="src/adv-aseets/kart-2.png"
                    className="bg-cover w-[100%] rounded-lg"
                  />
                </div>
                <div className="w-[100%] ">
                  <img
                    src="src/adv-aseets/kart-3.png"
                    className="bg-cover w-[100%] rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-yellow-200">
              <p> en çok paketlenen menüler</p>
              <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
            </div>
            <div className="flex justify-between  gap-5">
              <div className="flex gap-3">
                <img src="src/img/kore.svg" />
                <h1 className="font-barlow flex items-center gap-1">
                  YENİ! <span>Kore</span>{" "}
                </h1>
              </div>
              <div className="flex gap-3">
                <img src="src/img/pizza.svg" />
                <h1 className="font-barlow flex items-center gap-1">Pizza</h1>
              </div>
              <div className="flex gap-3">
                <img src="src/img/burger.svg" />
                <h1 className="font-barlow flex items-center gap-1">Burger</h1>
              </div>
              <div className="flex gap-3">
                <img src="src/img/kizartma.svg" />
                <h1 className="font-barlow flex items-center gap-1">
                  Kızartmalar
                </h1>
              </div>
              <div className="flex gap-3">
                <img src="src/img/fast-food.svg" />
                <h1 className="font-barlow flex items-center gap-1">
                  Fast food
                </h1>{" "}
              </div>
              <div className="flex gap-3">
                <img src="src/img/icecek.svg" />
                <h1 className="font-barlow flex items-center gap-1">
                  Gazlı İçecek
                </h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="h-[200px] w-[32%] bg-slate-700"></div>
              <div className="h-[200px] w-[32%] bg-slate-700"></div>
              <div className="h-[200px] w-[32%] bg-slate-700"></div>
            </div>
          </div>
        </div>
        <footer className="h-[300px] w-[100%] bg-black"></footer>
      </div>
    </>
  );
}
