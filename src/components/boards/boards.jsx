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
            <Board board={board} key={board.id}/>
          );
        })}
      </div>
    </div>
  );

};

export default Boards;
