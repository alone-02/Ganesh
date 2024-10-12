import React, { useContext, useState } from "react";
import { IdolContext } from "../ContextApi/IdolContext";
import IdolList from "../Container/IdolList";

function Idoldetails() {
  const { idolId,idolList } = useContext(IdolContext);
 
  const { id, title, thumbnail, price } = idolId;
  console.log(idolId);

  return (
    <>
    <div className="playerContainer">
      <div className="player">
        <div id="player">
          <img
            src={thumbnail}
            style={{
              borderRadius: "15px",
              border: "none",
              outline: "none",
              width: "640px",
              height: "500px"
            }}
          />
        </div>

      </div>
      <div className="playerVideos">
        <div className="desc_div">
          <textarea
            className="desc_textarea"
            rows={1}
            value={title}
            readOnly
            onClick={() => feature(id)}
          >{title}</textarea>
        </div>
        <div className="price_div">
          <p className="price_para">Price : ${price}</p>
        </div>

        <button className="buybtn" onClick={() => feature(id)}>
          Buy Now
        </button>


      </div>
    </div>
    <div>
    {idolList.map((idol) => (
      <IdolList
        key={idol._id}
        id={idol._id}
        title={idol.title}
        thumbnail={idol.thumbnail.image_url}
        price={idol.price}
      />
    ))}
    </div>
    </>)
}

export default Idoldetails;
