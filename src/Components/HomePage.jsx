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

            <div className="w-[70%] mx-auto">
              <img src="src/Components/banner.png" />
            </div>
          </div>
        </div>
        <div className="w-[100%] p-4  flex justify-center text-zinc-800 bg-white">
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
            <div className="w-[100%]   flex justify-between p-2">
              <div className="w-[48%] rounded-md relative">
                <img
                  src="src/adv-aseets/kart-1.png"
                  className="bg-cover w-[100%] rounded-lg"
                />
                <div className=" absolute bottom-32 text-white left-8">
                  <div className="flex flex-col gap-3 font-barlow">
                    <h1 className="font-quattrocento flex flex-col text-[40px] font-bold ">
                      Özel <span>Lezzetus</span>
                    </h1>
                    <p>Position:Absolute Acı Burger</p>
                    <button
                      type="button"
                      className=" bg-white w-[50%] p-2 text-[12px] rounded-full text-red-600"
                    >
                      {" "}
                      SİPARİŞ VER
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[48%]  flex flex-col justify-between">
                <div className="w-[100%] relative">
                  <img
                    src="src/adv-aseets/kart-2.png"
                    className="bg-cover w-[100%] rounded-lg"
                  />
                  <div className="text-white absolute bottom-10 left-8 ">
                    <h1 className="flex flex-col text-[20px] gap-1">
                      Hackathlon <span>Burger Menü</span>
                    </h1>
                    <button
                      type="button"
                      className=" bg-white w-[70%] p-2 text-[10px] rounded-full text-red-600 mt-4"
                    >
                      {" "}
                      SİPARİŞ VER
                    </button>
                  </div>
                </div>
                <div className="w-[100%] relative">
                  <img
                    src="src/adv-aseets/kart-3.png"
                    className="bg-cover w-[100%] rounded-lg"
                  />
                  <div className="text-white absolute bottom-10 left-8 ">
                    <h1 className="flex flex-col text-[20px] gap-1 text-black">
                      <span>
                        <span className="text-red-600">Çoooook</span> hızlı
                      </span>{" "}
                      <span>npm gibi kurye</span>
                    </h1>
                    <button
                      type="button"
                      className=" bg-white w-[70%] p-2 text-[10px] rounded-full text-red-600 mt-4"
                    >
                      {" "}
                      SİPARİŞ VER
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center ">
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
            <div className="flex justify-between mb-20 font-barlow">
              <div className=" w-[32%] bg-white p-6">
                <img src="src/adv-aseets/food-1.png" className="w-[100%]" />
                <div className="flex flex-col gap-2 mt-4">
                  <h3>Terminal Pizza</h3>
                  <div className="flex justify-between">
                    <p className="text-zinc-500">4.9</p>
                    <p className="text-zinc-500">(200)</p>
                    <p>60₺</p>
                  </div>
                </div>
              </div>
              <div className=" w-[32%] bg-white p-6">
                <img src="src/adv-aseets/food-2.png" className="w-[100%]" />
                <div className="flex flex-col gap-2 mt-4">
                  <h3>Position Absolute Acı Pizza</h3>
                  <div className="flex justify-between">
                    <p className="text-zinc-500">4.9</p>
                    <p className="text-zinc-500">(928)</p>
                    <p>85₺</p>
                  </div>
                </div>
              </div>
              <div className=" w-[32%] bg-white p-6">
                <img src="src/adv-aseets/food-3.png" className="w-[100%]" />
                <div className="flex flex-col gap-2 mt-4">
                  <h3>useEffect Tavuklu Burger</h3>

                  <div className="flex justify-between">
                    <p className="text-zinc-500">4.9</p>
                    <p className="text-zinc-500">(462)</p>
                    <p>75₺</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className=" w-[100%] bg-black flex justify-center text-white">
          <div className="w-[65%] h-[100%] flex flex-col justify-around">
            <div className="flex justify-between flex-wrap  border-solid border-b-2 py-8  ">
              <div className=" w-[30%]  flex flex-wrap flex-col justify-between gap-10">
                <div>
                  <h1 className="font-londrina flex flex-col text-[32px] tracking-wider">
                    Teknolojik <span>Yemekler</span>
                  </h1>
                </div>
                <div className="flex flex-col gap-4 font-barlow">
                  <div className="flex gap-4">
                    <img src="src/adv-aseets/icons/icon-1.png" />
                    <p className="flex flex-col">
                      341 Londonderry Road, <span>Istanbul Türkiye</span>
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <img src="src/adv-aseets/icons/icon-2.png" />
                    <p className="text-[13px]">
                      aciktim@teknolojikyemekler.com
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <img src="src/adv-aseets/icons/icon-3.png" />
                    <p>+90 216 123 45 67</p>
                  </div>
                </div>
              </div>
              <div className=" w-[25%]  flex flex-wrap flex-col justify-around font-barlow">
                <div>
                  <h1 className="text-[25px]">Sıccacık Menuler</h1>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Terminal Pizza</p>
                  <p>5 Kişilik Hackathlon Pizza</p>
                  <p>useEffect Tavuklu Pizza</p>
                  <p>Beyaz Console Frosty</p>
                  <p>Testler Geçti Mutlu Burger</p>
                  <p>Position Absolute Acı Burger</p>
                </div>
              </div>
              <div className=" w-[35%] flex flex-wrap flex-col justify-between">
                <div>
                  <h1 className="font-barlow text-[22px]">Instagram</h1>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1">
                    <img
                      src="src/adv-aseets/insta/li-0.png"
                      className="rounded-md"
                    />

                    <img
                      src="src/adv-aseets/insta/li-1.png"
                      className="rounded-md"
                    />

                    <img
                      src="src/adv-aseets/insta/li-2.png"
                      className="rounded-md"
                    />

                    <img
                      src="src/adv-aseets/insta/li-3.png"
                      className="rounded-md"
                    />

                    <img
                      src="src/adv-aseets/insta/li-4.png"
                      className="rounded-md"
                    />

                    <img
                      src="src/adv-aseets/insta/li-5.png"
                      className="rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" text-zinc-300 flex justify-between my-5">
              <p className="font-barlow">© 2023 Teknolojik Yemekler.</p>
              <img src="src/adv-aseets/icons/twitter.png" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
