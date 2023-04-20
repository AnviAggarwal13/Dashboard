import React from "react";

const Block = ({ color }) => {
  const style = {
    backgroundColor: color,
    width: "40vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 72,
    fontWeight: 700,
    FontFace: "Montserrat"
  };

  return (
    <div style={style}>
      <span>Board.</span>
    </div>
  );
};

export default Block;
