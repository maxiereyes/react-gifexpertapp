import React from "react";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInUp animate__delay-1s">
      <img alt="Gif images" src={url} />
      <p>{title}</p>
    </div>
  );
};
