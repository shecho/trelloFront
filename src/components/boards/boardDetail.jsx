import React, {useState, useffect} from "react"
import './boards.css'
// import arrayMove from 'array-move';

// import SortableList from '../sortableContainer/sortableList'
// import SortableCard from '../sortableContainer/sortableCard'

const  BoardDetail= ()=>{
const [list, setList] = useState(initialState)
  useEffect(() => {
    getList();
  }, []);
  const getList = async() => {
    
    let url = "http://127.0.0.1:8000/lists/";

    let response = await fetch(url);
    console.log(response);
    let res = await response.json();
    console.log(res);
    setList(() => res);
    console.log(list)
  }


  return(
    <div>

    </div>
    )
}

export default BoardDetail
