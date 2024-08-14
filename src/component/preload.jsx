import React from "react";
import { FaHeart } from "react-icons/fa";

function Preload({ onClick }) {
  return (
    <div className="preload">
      <div className="img-container">
        <div>
          <img src="/assets/img/sample_gif8.gif" />
        </div>
      </div>
      <button onClick={onClick} className="btn container">
        <FaHeart />
      </button>
      <p>Pencet Love-nya sayaang 🥰</p>
    </div>
  );
}

export default Preload;
