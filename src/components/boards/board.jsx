import React, { useState } from "react";

const Board = (props) => {
  const { id, description, name, members } = props.board;
  console.log(props);
  return (
    <div className="container text-center" key={id}>
      <div className="col-md-4 m-2 text-center">
        <div className="card bg-dark text-light">
          <i class="fa fa-ellipsis-h " aria-hidden="true" />
          <div className="card-body">
            <h5 className="card-title"> {name}</h5>
            <p> {description}</p>
            <div className='d-flex'>
            <i className="fa fa-check" aria-hidden="true" />
            <p> {members}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
