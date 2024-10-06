import React, { useState, useContext } from "react";
import { IdolContext } from "./IdolContext";
import { useNavigate } from "react-router-dom";

function IdoldetailsList({ id, thumbnail, title, price, description }) {
  const { setIdolId, setIdolList } = useContext(IdolContext);
//  const [AuthorName, setAuthorName] = useState("");
  const navigate = useNavigate();

  async function player(id) {
    setIdolId({
      id: id,
      title: title,
      price: price,
      description: description,
    });
    navigate("/idolDetails");
  }

  function search(event) {
    console.log("10author", event);
    setAuthorName(event);
    searchAuthor(event);
  }

  async function searchAuthor(query) {
    console.log("11author", AuthorName);
    try {
      const response = await axios.get(`/api/search`, {
        params: { query: query },
      });
      const result = response.data;
      setIdolList(result.items);
    } catch (err) {
      console.log(err);
    }
    setAuthorName("");
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
