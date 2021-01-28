import React from 'react';
import './list.css';

function List() {
  const someList = ["position", "display", "border", "padding", "margin", "overflow", "background", "font", "text", "transform"];
  
  const listItems = someList.map((stuff) =>
    <li key={stuff.toString()}>
    <input type="checkbox"/>
    <label for="smth">{stuff}</label>
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default List;