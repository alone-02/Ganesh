import React, { useContext, useState } from "react";
//import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IdolContext } from "./IdolContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function IdolList({ id, thumbnail, title, author, price }) {
  const { setVideoId, setVideoList } = useContext(IdolContext);
  const [AuthorName, setAuthorName] = useState("");
  const navigate = useNavigate();

  async function player(id) {
    setVideoId({
      id: id,
      title: title,
      author: author,
      price: price,
    });
    navigate("/videoplayer");
  }

  function search(event) {
    console.log("author", event);
    setAuthorName(event);
    searchAuthor(event);
  }

  async function searchAuthor(query) {
    console.log("author", AuthorName);
    try {
      const response = await axios.get(`/api/search`, {
        params: { query: query },
      });
      const result = response.data;
      setVideoList(result.items);
    } catch (err) {
      console.log(err);
    }
    setAuthorName("");
  }

  return (
    <>
      <div className="note">
        <div className="thumbnail">
          <img
            className="thumbnailImg"
            id={id}
            src={thumbnail}
            alt="thumbnail"
            onClick={() => player(id)}
          ></img>
        </div>
        <div className="desc">
          <textarea
            className="p1"
            rows={2}
            value={title}
            readOnly
            onClick={() => player(id)}
          >{title}</textarea>
          </div>
          <div className="price">
            <p className="p2">Price : {price}</p>
          </div>
        
        <button className="bookbtn">Book Now</button>
        <button className="buybtn" onClick={() => search(author)}>
          Buy Now
        </button>
      </div>
    </>
  );
}

export default IdolList;
