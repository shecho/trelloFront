import React, { useState } from "react";



const Board = (props) => {
  const { id, description, name, members } = props.board;
  return (
    <div className="container text-center" key={id}>
      <div className="col-md-4 m-2 text-center">
        <div className="card bg-dark text-light">
          <i className="fa fa-ellipsis-h " aria-hidden="true" />
          <div className="card-body">
            <h5 className="card-title"> {name}</h5>
            <p> {description}</p>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-primary">
              <i className="fa fa-check bnt btn-success" aria-hidden="true" />
                Participantes <span className="badge bg-secondary p-1"> {members.length}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
