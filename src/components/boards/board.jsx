import React, { useState } from "react";

const Board = (props) => {
console.log(props);
  const {id,description,name} = props.board
  return (
    <div className="container text-center" id={id}>
      <div className="col-md-4 m-2 text-center">
        <div className="card bg-dark text-light">
          <div className="card-body">
            <h5 className="card-title"> {name}</h5>
            <p> {description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
