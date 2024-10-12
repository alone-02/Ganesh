import React, { useState, useContext } from "react";
import { IdolContext } from "../ContextApi/IdolContext";
import { useNavigate } from "react-router-dom";

function IdoldetailsList({ id, thumbnail, title, price, description }) {
  const { setIdolId, setIdolList } = useContext(IdolContext);
//  const [AuthorName, setAuthorName] = useState("");
  const navigate = useNavigate();

  async function player(id) {
    setIdolId({
      id: id,
      title: title,
      thumbnail : thumbnail,
      price: price
    });
    navigate(`/idolDetails/`);
  }


  return (
    <div className="playerList">
      <img
        className="playerImg"
        key={id}
        src={thumbnail}
        alt="thumbnail"
        onClick={() => player(id)}
      ></img>
      <div className="playerList-desc">
        <a onClick={() => player(id)}>
          <h3 className="playerList-Title">{title}</h3>
          <p className="playerList-author" onClick={() => search(author)}>
            {author}
          </p>
        </a>
      </div>
    </div>
  );
}

export default IdoldetailsList;
