import React from "react";

const List = (props) => {
  const { id, position, name, members } = props.list;
  return (
    <div className="text-center" key={id}>
      <div className="card bg-dark text-light">
        <div className="d-flex justify-content-center p-2 ">
          <div className="m-2">
            <i className="fa fa-plus-circle text-success" aria-hidden="true" />
          </div>
          <div className="m-2">
            <i className="fa fa-trash text-danger" aria-hidden="true" />
          </div>
          <div className="d-flex justify-content-end p-2 ">
            <i className="fa fa-ellipsis-h " aria-hidden="true" />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title"> {name}</h5>
          <p> {position}</p>
          <div className="d-flex justify-content-center ">
            <button type="button" className="btn btn-primary mr-1">
              <i className="fa fa-check bnt btn-success" aria-hidden="true" />
              Participantes
              <span className="badge bg-secondary p-1">{members.length}</span>
            </button>
            <button type="button" className="btn btn-primary">
              <i className="fa fa-plus bnt btn-success" aria-hidden="true" />
              Invitados <span className="badge bg-secondary p-1"> </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
