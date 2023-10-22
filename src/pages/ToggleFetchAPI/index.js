import { useEffect, useState } from "react";
import styles from "./ToggleFetchAPI.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);
const btns = ["posts", "comments", "albums"];
function ToggleFetchAPI() {
  // useState
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(180);
  // useEffect handle toggle mock api
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((arrayPost) => setPosts(arrayPost));
  }, [type]);
  // useEffect handle toggle mock api
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // use Effect handle when resize page
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // useEffect handle countdown
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      if (count === 1) {
        setCount(0);
      }
    };
  }, []);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Return UI
  return (
    <div className={cx("app")}>
      <div className={cx("btns")}>
        {btns.map((item, index) => (
          <button
            style={
              item === type
                ? {
                    backgroundColor: "#5cb85c",
                    color: "#000",
                  }
                : {}
            }
            onClick={() => setType(item)}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      <ul>
        {posts.map((item, index) => (
          <li key={index}>{item.title || item.name}</li>
        ))}
      </ul>
      <h1>Width: {windowWidth}</h1>
      <h1>{count}</h1>
      {showButton && (
        <button
          style={{ position: "fixed", bottom: 20, right: 20 }}
          onClick={handleClick}
        >
          Go to Top
        </button>
      )}
    </div>
  );
}
export default ToggleFetchAPI;
