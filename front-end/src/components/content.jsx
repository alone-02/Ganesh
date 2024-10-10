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
        setIdolList(result);
      } catch (err) {
        console.log(err);
      }
    }
    fetchIdol();
  }, []);

  return idolList.map((idol) => (
    <IdolList
      key={idol.id}
      id={idol.id}
      title={idol.title}
      thumbnail={idol.image}
      price={idol.price}
    />
  ));
}

export default Content;
