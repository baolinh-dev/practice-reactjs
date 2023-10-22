import styles from "./CheckRadio.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
let cx = classNames.bind(styles);

function CheckRadio() {
  // data
  const courses = [
    {
      id: 1,
      name: "HTML, CSS",
    },
    {
      id: 2,
      name: "Javascript",
    },
    {
      id: 1,
      name: "ReactJS",
    },
  ];
  // useState
  // bien checked save name cua radio da check
  const [checked, setChecked] = useState("ReactJS"); 
  // function 
  function handleSubmit() {  
    const resultObj = {name: checked}
    console.log(resultObj);
  }
  // Return UI
  return (
    <div className="app">
      <ul>
        {courses.map((item, index) => (
          <li key={index} className={cx("item")}>
            <input
              checked={checked === item.name}
              type="radio"
              onChange={() => setChecked(item.name)}
            />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default CheckRadio;
