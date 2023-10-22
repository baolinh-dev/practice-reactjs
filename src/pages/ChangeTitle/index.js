import styles from "./ChangeTitle.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
let cx = classNames.bind(styles);

function ChangeTitle() {
  // useState
  const [title, setTitle] = useState(""); 
  // useEffect 
  useEffect(() => { 
    document.title = title
  })
  // Return UI
  return (
    <div className="app">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Change document title ..."
      />
    </div>
  );
}
export default ChangeTitle;
