import React from "react";
const Gif = ({ url, title }) => {
  return (
    <>
      <h3>{title}</h3>
      <img src={url} alt="gif" />
    </>
  );
};
export default Gif;