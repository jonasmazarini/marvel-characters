import React from "react";
import "./Comics-card.css";
import PropTypes from "prop-types";

export default function comicsCard({ data }) {
  return (
    <a href={data?.urls[0].url} target="_blank">
      <section className="generalContainer">
        <div className="imageContainer">
          <img
            src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}
            alt={data?.name}
          />
        </div>
        <div className="nameContainer">
          <span>{data?.title}</span>
        </div>
      </section>
    </a>
  );
}

comicsCard.prototype = {
  data: PropTypes.shape({
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
    name: PropTypes.name,
    id: PropTypes.number,
  }),
};
