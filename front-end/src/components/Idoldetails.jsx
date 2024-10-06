import React, { useContext } from "react";
import { IdolContext } from "./IdolContext";
import PlayerList from "./IdoldetailsList";

function Idoldetails() {
  const { idolList } = useContext(IdolContext);

  return idolList.map((idol) => (
    <PlayerList
    key={idol.rank}
    id={idol.rank}
    title={idol.product_title}
    thumbnail={idol.product_photo}
    price={idol.product_price}
    />
  ));
}

export default Idoldetails;
