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
        <div className="w-[100%] h-[15vh]  flex justify-center text-zinc-800 bg-white">
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
                Fast <span>food</span>
              </h1>{" "}
            </div>
            <div className="flex gap-3">
              <img src="src/img/icecek.svg" />
              <h1 className="font-barlow flex items-center gap-1">
                Gazlı <span>İçecek</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[100%] bg-amber-50">
          <div className="w-[65%] mx-auto mt-10 flex flex-col gap-10">
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
              <p className="font-satisfy text-[30px] text-red-600">
                {" "}
                en çok paketlenen menüler
              </p>
              <h1 className="font-barlow uppercase text-[32px] font-bold">
                Acıktıran Kodlara Doyuran Lezzetler
              </h1>
            </div>
            <div className="flex justify-between  gap-5">
              <div className="flex  gap-3 justify-center text-[14px] rounded-full bg-white px-7 py-2">
                <img src="src/img/kore.svg" />
                <h1 className="font-barlow flex items-center gap-1">Ramen</h1>
              </div>
              <div className="flex  gap-3 justify-center text-[14px] text-white rounded-full bg-black px-7 py-2">
                <img src="src/img/pizza.svg" />
                <h1 className="font-barlow flex items-center gap-1">Pizza</h1>
              </div>
              <div className="flex gap-3 justify-center text-[14px] rounded-full bg-white px-7 py-2">
                <img src="src/img/burger.svg" />
                <h1 className="font-barlow flex items-center gap-1">Burger</h1>
              </div>
              <div className="flex gap-3 justify-center text-[14px] rounded-full bg-white px-7 py-2">
                <img src="src/img/kizartma.svg" />
                <h1 className="font-barlow flex items-center gap-1">
                  Kızartmalar
                </h1>
              </div>
              <div className="flex gap-3 justify-center text-[14px] rounded-full bg-white px-7 py-2">
                <img src="src/img/fast-food.svg" />
                <h1 className="font-barlow flex items-center gap-1">
                  Fast <span>food</span>
                </h1>{" "}
              </div>
              <div className="flex gap-3 justify-center text-[14px] rounded-full bg-white px-7 py-2 ">
                <img src="src/img/icecek.svg" />
                <h1 className="font-barlow flex items-center gap-1">
                  Gazlı <span>İçecek</span>
                </h1>
              </div>
            </div>
            <div className="flex justify-between mb-20">
              <div className=" w-[32%] bg-white ">
                <img src="src/adv-aseets/food-1.png" className="w-[100%]" />
              </div>
              <div className=" w-[32%] bg-white ">
                <img src="src/adv-aseets/food-2.png" className="w-[100%]" />
              </div>
              <div className=" w-[32%] bg-white ">
                <img src="src/adv-aseets/food-3.png" className="w-[100%]" />
              </div>
            </div>
          </div>
        </div>
        <footer className="h-[500px] w-[100%] bg-black flex justify-center">
          <div className="w-[65%] h-[100%] bg-purple-300">
            <div className="h-[80%]  flex justify-between">
              <div className="bg-blue-300 w-[25%]">
                <div>
                  <h1>
                    Teknolojik <span>Yemekler</span>
                  </h1>
                </div>
                <div>
                  <div>
                    <img src="src/adv-aseets/icons/icon-1.png" />
                    <p>
                      341 Londonderry Road, <span>Istanbul Türkiye</span>
                    </p>
                  </div>
                  <div>
                    <img src="src/adv-aseets/icons/icon-2.png" />
                    <p>aciktim@teknolojikyemekler.com</p>
                  </div>
                  <div>
                    <img src="src/adv-aseets/icons/icon-3.png" />
                    <p>+90 216 123 45 67</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-300 w-[25%] flex flex-col justify-between">
                <div>
                  <h1>Sıccacık Menuler</h1>
                </div>
                <div>
                  <p>Terminal Pizza</p>
                  <p>5 Kişilik Hackathlon Pizza</p>
                  <p>useEffect Tavuklu Pizza</p>
                  <p>Beyaz Console Frosty</p>
                  <p>Testler Geçti Mutlu Burger</p>
                  <p>Position Absolute Acı Burger</p>
                </div>
              </div>
              <div className="bg-rose-600 w-[35%] flex flex-col justify-between">
                <div>
                  <h1>Instagram</h1>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2">
                    <li>
                      <img
                        src="src/adv-aseets/insta/li-0.png"
                        className="rounded-md"
                      />
                    </li>
                    <li>
                      <img
                        src="src/adv-aseets/insta/li-1.png"
                        className="rounded-md"
                      />
                    </li>
                    <li>
                      <img
                        src="src/adv-aseets/insta/li-2.png"
                        className="rounded-md"
                      />
                    </li>
                    <li>
                      <img
                        src="src/adv-aseets/insta/li-3.png"
                        className="rounded-md"
                      />
                    </li>
                    <li>
                      <img
                        src="src/adv-aseets/insta/li-4.png"
                        className="rounded-md"
                      />
                    </li>
                    <li>
                      <img
                        src="src/adv-aseets/insta/li-5.png"
                        className="rounded-md"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-[20%] bg-pink-200"></div>
          </div>
        </footer>
      </div>
    </>
  );
}
