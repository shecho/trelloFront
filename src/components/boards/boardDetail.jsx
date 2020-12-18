import React, { useState, useEffect } from "react";
import "./boards.css";
import { useParams } from "react-router-dom";

// import arrayMove from 'array-move';
import List from "../lists/list";

const BoardDetail = () => {
   const [list, setList] = useState([]);
   // const [cards, setCards] = useState([]);
   useEffect(() => {
      getList();
   }, []);

   const { id } = useParams();
   const getList = async () => {
      let url = `http://127.0.0.1:8000/boards/${id}`;
      console.log(url);
      let response = await fetch(url);
      let res = await response.json();
      setList(() => res.list);
   };
   return (
      <div className="list">
         <div className="child_list">
            <div className="box_list">
               {list.map((list) => {
                  return <List list={list} key={list.id} />;
               })}
            </div>
         </div>
      </div>
   );
};

export default BoardDetail;
