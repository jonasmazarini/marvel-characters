import React from "react";
import { Link } from "react-router-dom";
import "./Character-card.css";
import PropTypes from "prop-types";

export default function characterCard({ data }) {
  return (
    <Link to={`/character/${data?.id}`}>
      <section className="generalContainer">
        <div className="imageContainer">
          <img
            src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}
            alt={data?.name}
          />
        </div>
        <div className="nameContainer">
          <span>{data?.name}</span>
        </div>
      </section>
    </Link>
  );
}

characterCard.prototype = {
  data: PropTypes.shape({
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
    name: PropTypes.name,
    id: PropTypes.number,
  }),
};
