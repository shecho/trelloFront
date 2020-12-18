import React, { useState, useEffect } from "react";
import "./boards.css";
import {useParams} from 'react-router-dom'

// import arrayMove from 'array-move';
import List from "../lists/list";

const BoardDetail = () => {
  const [list, setList] = useState([]);
  // const [cards, setCards] = useState([]);
  useEffect(() => {
    getList();
  }, []);


  const {id} = useParams()
console.log(id);

  const getList = async () => {
    let url = `http://127.0.0.1:8000/boards/${id}`;
    let response = await fetch(url);
    console.log(response);
    let res = await response.json();
    console.log(res.list);
    setList(() => res.list);
    console.log(list);
  };
  return (
    <div className="list">
      listas
      {/* {list.map((list) => { */}
      {/*   return <List list={list} key={list.id} />; */}
      {/* })} */}
    </div>
  );
};

export default BoardDetail;
