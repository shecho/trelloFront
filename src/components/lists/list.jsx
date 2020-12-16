import React from "react";

const List = (props) => {
  const { id, position, name, members } = props.list;
  return (
    <div className="text-center" key={id}>
      <div className="card bg-dark text-light">
          <h5 className="card-title "> <span className='dx-2'> N°{position}</span> {name}</h5>
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
          
          <div className="justify-content-center ">
            <div>
            card
            </div>
            <div>
            card
            </div>
            <div>
            card
            </div>
            <div>
            card
            </div>
            <div>
            card
            </div>
            <div>
            card
            </div>
            <div>
            card
            </div>
            <div>
            card
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
