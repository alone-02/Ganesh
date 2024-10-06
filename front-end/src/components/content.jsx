import React, { useEffect, useContext } from "react";
import IdolList from "./IdolList";
import { IdolContext } from "./IdolContext";
import axios from "axios";

function Content() {
  const { idolList, setIdolList } = useContext(IdolContext);

  useEffect(() => {
    async function fetchIdol() {
      try {
        const response = await axios.get("/api");
        const result = response.data;
        setIdolList(result.data.best_sellers);
      } catch (err) {
        console.log(err);
      }
    }
    fetchIdol();
  }, [setIdolList]);

  return idolList.map((idol) => (
    <IdolList
      key={idol.rank}
      id={idol.rank}
      title={idol.product_title}
      thumbnail={idol.product_photo}
      price={idol.product_price}
    />
  ));
}

export default Content;
