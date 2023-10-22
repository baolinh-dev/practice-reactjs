import { Link } from "react-router-dom";

import styles from "./Navigation.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles); 

function Navigation() { 

  return (
    <>
      <ul className={cx('list')}>
        <Link to="/todolist" className={cx('item')}>To Do List </Link>
        <Link to="/checkradio" className={cx('item')}>Check radio </Link>  
        <Link to="/checkinputbox" className={cx('item')}>Check Input Box</Link>
        <Link to="/radomgift" className={cx('item')}>Random Gift </Link> 
        <Link to="/submitexample" className={cx('item')}>Submit Example</Link> 
        <Link to="/changetitle" className={cx('item')}>Change Title</Link> 
        <Link to="/togglefetchapi" className={cx('item')}>Toggle Fetch API</Link>  
        <Link to="/previewimage" className={cx('item')}>Preview Image</Link>  
        <Link to="/weather" className={cx('item')}>Weather App</Link> 
      </ul>
    </>
  );
}

export default Navigation;
