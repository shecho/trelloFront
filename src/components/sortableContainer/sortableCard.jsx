import React from 'react';
import { SortableElement } from "react-sortable-hoc";


const SortableCard = SortableElement(({ value }) => {
    return (
      <li className="list-group-item">
        <h1>
          {value.sorting}. {value.title}
        </h1>
        <p>{value.description}</p>
        <p>{value.id}</p>
      </li>
    );
  });

  export default SortableCard
