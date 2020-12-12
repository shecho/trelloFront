import React, { useState, useEffect } from "react";
import Board from './board'
const Boards = () => {
  let [boards, setBoards] = useState([]);
  useEffect(() => {
    getBoards();
  }, []);

  const getBoards = async () => {
    let url = "http://127.0.0.1:8000/boards/";

    let response = await fetch(url);
    console.log(response);
    let res = await response.json();
    console.log(res);
    setBoards(() => res);
  };

  return (
    <div className="App">
      <div className="container">
        {boards.map((board) => {
          return (
            <Board board={board} id={board.id}/>
            
            // <div className="col-md-4 m-2 text-center" key={board.id}>
            //   <div className="card bg-dark text-light">
            //     <div className="card-body">
            //       <h5 className="card-title"> {board.name}</h5>
            //       <p> {board.description}</p>
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );

};

export default Boards;
