import React from "react";

function Info({ textValue, textName, orderNote, orderNoteChange }) {
  return (
    <>
      <div className="mt-5 flex flex-col gap-3">
        <h3 className="text-zinc-800 font-semibold font-barlow">
          İsim Soyisim :
        </h3>
        <input
          id="name-input"
          type="text"
          className="w-2/3 h-10 border-zinc-400 border-2 rounded-md"
          placeholder="Siparişi teslim alacak kişi.."
          value={textName}
          onChange={textValue}
        />
      </div>
      <div className=" mt-5 flex flex-col gap-3 ">
        <h3
          id="special-text"
          className="text-zinc-800 font-semibold font-barlow"
        >
          Sipariş Notu
        </h3>
        <input
          className="w-2/3 h-10 border-zinc-400 border-2 rounded-md "
          type="text"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          onChange={orderNoteChange}
          value={orderNote}
        />
      </div>
    </>
  );
}

export default Info;
