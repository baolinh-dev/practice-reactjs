import styles from "./CheckInputBox.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
let cx = classNames.bind(styles);

function CheckInputBox() {
  // data
  const courses = [
    {
      id: 1,
      name: "HTML CSS",
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
  const [checks, setChecks] = useState([]);  
  // function 
  function handleCheck(nameItem) { 
    setChecks((prev) => { 
      let resultArray = [...prev, nameItem] 
      const isChecked = checks.includes(nameItem)
      if(isChecked) { 
        return checks.filter((value) => value !== nameItem)
      } else { 
        return resultArray
      }
    })
  }
  // Return UI
  return (
    <div className="app">
      <ul>
        {courses.map((item, index) => (
          <li key={index} className={cx("item")}>
            <input 
              checked = {checks.includes(item.name)}
              type="checkbox"
              onChange={() => handleCheck(item.name)}
            />
            <p>{item.name}</p>
          </li>
        ))}
      </ul> 
      <ul>
        {
          checks.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}
export default CheckInputBox;
