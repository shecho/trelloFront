import React from 'react'
import { SortableContainer } from "react-sortable-hoc";
import SortableCard from './sortableCard'

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul className="list-group">
      {items.map((value, index) => (
        <SortableCard key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

export default SortableList
