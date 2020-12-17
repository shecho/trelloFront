import React, {useState, useEffect} from "react"
import './boards.css'
// import arrayMove from 'array-move';
import List from '../lists/list'

const BoardDetail = () => {
  const [list, setList] = useState([]);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getList();
  }, []);


  // const getCards = async (id) => {
  //   let url = `http://127.0.0.1:8000/list/${id}/cards`;
  //   let response = await fetch(url);
  //   console.log(response);
  //   let res = await response.json();
  //   console.log(res.results);
  //   setCards(() => res.results);
  //   console.log(cards);
  // };
  const getList = async () => {
    let url = "http://127.0.0.1:8000/list/";
    let response = await fetch(url);
    console.log(response);
    let res = await response.json();
    console.log(res.results);
    setList(() => res.results);
    console.log(list);
  };

  return (
    <div className="" style={{height:'100vh', overflowX:'hidden'}}>
      <div className="">
        {list.map((list) => {
          return (
            <List list={list} key={list.id}/>
          );
        })}
      </div>
    </div>
  );
};


export default BoardDetail;
