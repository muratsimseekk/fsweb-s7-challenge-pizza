import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import Sizing from "./Sizing";
import Additional from "./Additional";
import GiveAnOrder from "./GiveAnOrder";
import Info from "./Info";
import { useHistory } from "react-router-dom";

const formData = {
  pizzaSize: "",
  pizzaDough: "",
  addItems: [],
  fullName: "",
  orderQuantity: "",
  totalBasket: "",
};

const OrderForm = () => {
  const history = useHistory();

  const [productInPrice, setProductInPrice] = useState(85.5);
  const [size, setSize] = useState("sm");
  const [tickness, setTickness] = useState("Normal");
  const [totalPrice, setTotalPrice] = useState(productInPrice);
  const [tickPrice, setTickPrice] = useState(0);
  const [itemsArr, setItemsArr] = useState([]);
  const [additionalPrice, setAdditionalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [textName, setTextName] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [sentData, setSentData] = useState([]);

  const [formValid, setFormValid] = useState(false);

  const [formError, setFormError] = useState({
    pizzaSize: "",
    pizzaDough: "",
    addItems: [],
    fullName: "",
    orderQuantity: "",
    totalBasket: "",
  });

  const mainPage = () => {
    history.push("./");
  };

  console.log("siparis ozetim ", formData);
  const textValue = (even) => {
    setTextName(even.target.value);
  };

  // console.log(textName);

  const orderNoteChange = (x) => {
    setOrderNote(x.target.value);
  };
  // console.log(orderNote);
  const countUp = () => {
    setQuantity(quantity + 1);
  };

  const countDown = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRadioChange = (event) => {
    setSize(event.target.value);
  };
  const optionSelection = (e) => {
    setTickness(e.target.value);
  };
  const checkSelection = (event) => {
    const item = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      if (itemsArr.length < 10) {
        setItemsArr([...itemsArr, item]);
      }
      // } else if(itemsArr.length<4){
      //   console.log("4ten fazla secin");
      // }
      else {
        console.log("10 dan fazla secemezsin ");
      }
    } else {
      const updatedItem = itemsArr.filter((i) => i !== item);
      setItemsArr(updatedItem);
    }
  };
  let formDataSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("İsim alanı boş bırakılamaz.")
      .min(2, "Isim 2 karakterden daha az olamaz."),
    pizzaSize: Yup.string().required("Pizza boyutu seçin ."),
    addItems: Yup.array()
      .required("En az 4 adet malzeme seçin .")
      .min(4, "En az 4 adet malzeme seçin."),
    pizzaDough: Yup.string().required("Geçerli bir pizza hamuru seçin ."),

    orderQuantity: Yup.number().required("Lütfen en az 1 ürün seçimi yapın."),
    totalBasket: Yup.number().required("Lütfen ödeme için ürün girin."),
  });

  const checkValidationFor = async (field, value) => {
    try {
      await Yup.reach(formDataSchema, field).validate(value);
      setFormError((prevFormErrors) => ({ ...prevFormErrors, [field]: "" }));
    } catch (err) {
      console.log("HATA! ", field, err.errors[0]);
      setFormError((prevFormErrors) => ({
        ...prevFormErrors,
        [field]: err.errors[0],
      }));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    for (let key in formData) {
      checkValidationFor(key, formData[key]);
    }
  };

  useEffect(() => {
    if (Object.values(formError).every((error) => !error)) {
      axios
        .post("https://reqres.in/api/users", formData)
        .then((response) => {
          // Yollanan veriyi sentData'ya atadık.
          setSentData(response.data);
          // İşlem başarılı olduğunda yapılacak işlemler
          console.log("Veri başarıyla gönderildi. ", response.data);
          // Veri gönderildikten sonra yönlendirme işlemini burada yapabiliriz
          history.push("./summary");
        })
        .catch((error) => {
          // İşlem sırasında bir hata olursa yapılacak işlemler
          console.error("Veri gönderilirken hata oluştu:", error);
        });
    }
  }, [formError]);

  // useEffect(() => {
  //   if (Object.values(formError).every((error) => !error)) {
  //     history.push("./summary");
  //   }
  // }, [formError]);

  useEffect(() => {
    // console.log(quantity);
  }, [quantity]);

  useEffect(() => {
    // console.log("item arrayi ", itemsArr);

    let price = 0;

    price = price + itemsArr.length * 5;

    setAdditionalPrice(price);
  }, [itemsArr]);

  // console.log("ekstralarin ucreti ", additionalPrice);

  useEffect(() => {
    // console.log("useeffect icerisindeki size degeri  :  ", size);
    let price = productInPrice;
    if (size === "sm") {
      price = price;
      //   console.log("small size icin toplam ucret", totalPrice);
    } else if (size === "md") {
      price += 15;
      //   console.log("medium size icin toplam ucret", totalPrice);
    } else if (size === "lg") {
      price += 25;
      //   console.log("large size icin toplam ucret", totalPrice);
    }

    // console.log("useEffect icerisinden degisen ucret", price);

    setTotalPrice(price);
  }, [size]);

  // console.log("globalde totalprice", totalPrice);

  useEffect(() => {
    // console.log("hamur icin baslangic fiyati", tickPrice);
    let price = 0;

    if (tickness === "thin") {
      price += 10;
      //   console.log("ince hamur icin toplam ucret", tickPrice);
    } else if (tickness === "normal") {
      price = 0;
      //   console.log("normal hamur icin toplam ucret", tickPrice);
    } else if (tickness === "cheese") {
      price += 20;
      //   console.log("peynirli hamur icin toplam ucret", tickPrice);
    } else {
      price = 0;
    }
    setTickPrice(price);
  }, [tickness]);

  useEffect(() => {
    formData.pizzaSize = size;
    formData.pizzaDough = tickness;
    formData.addItems = itemsArr;
    formData.fullName = textName;
    formData.orderQuantity = quantity;
    formData.totalBasket =
      (totalPrice + tickPrice + additionalPrice) * quantity;
  }, [
    size,
    tickness,
    itemsArr,
    textName,
    totalPrice,
    tickPrice,
    additionalPrice,
    quantity,
  ]);
  //   console.log("globalde tick price;", tickPrice);

  return (
    <form onSubmit={submitHandler}>
      <div className="w-screen  bg-stone-100 flex flex-col items-center">
        <div className="w-[100%] h-[16vh] bg-red-600"></div>
        <div className="w-[40%] h-[16vh] bg-red-600 absolute ">
          <div className="relative h-[16vh]">
            <h1 className="text-[34px] font-londrina text-center relative top-7 text-white">
              Teknolojik Yemekler
            </h1>
            <nav className="absolute bottom-3 flex font-barlow">
              <a
                onClick={mainPage}
                className="text-[14px] text-gray-400 hover:text-white hover:cursor-pointer "
              >
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
          <div className="flex justify-between">
            <h1 className="text-zinc-800 font-bold text-[22px] w-[25%] font-barlow leading-10">
              {productInPrice}₺
            </h1>
            <div className="flex font-barlow text-zinc-500 w-[40%] items-center justify-between">
              <p>4.9</p>
              <p>(200)</p>
            </div>
          </div>
          <div>
            <p className="text-zinc-500 text-base text-[13px] font-barlow leading-5">
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </div>
          <Sizing
            size={size}
            handleRadioChange={handleRadioChange}
            tickness={tickness}
            optionSelection={optionSelection}
          />
          <Additional checkSelection={checkSelection} itemsArr={itemsArr} />
          <Info
            textValue={textValue}
            textName={textName}
            orderNoteChange={orderNoteChange}
            orderNote={orderNote}
          />
          <hr className="mt-5 mb-5" />
          <GiveAnOrder
            totalPrice={totalPrice}
            tickPrice={tickPrice}
            additionalPrice={additionalPrice}
            countUp={countUp}
            countDown={countDown}
            quantity={quantity}
            submitHandler={submitHandler}
          />
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
