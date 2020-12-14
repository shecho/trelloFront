import React, {useState} from "react"
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';


const  SortableItem  = SortableElement(({ value }) => <p>{value}</p>);

const SortableList = SortableContainer(({ items }) => {
    return (

        <div className="card bg-dark text-light m-5 p-5">
            <ul>
                {items.map((value, index) => (
                    <SortableItem key={`item-${value}`} index={index} value={value} />
                ))}
            </ul>
        </div>
    );
});


const  BoardDetail= ()=>{
  return(
    <div>
      <p>Project name</p>
    </div>
    )
}

export default BoardDetail
