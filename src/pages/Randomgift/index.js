import { useState } from "react";

function Randomgift() {
  // data
  const gifts = [
    "Phần quà 1",
    "Phần quà 2",
    "Phần quà 3",
    "Phần quà 4",
    "Phần quà 5",
  ];  
  // useState 
  const [gift, setGift] = useState()
  function handleSetGifts() { 
    let randomIndex = Math.floor(Math.random() * gifts.length) 
    let randomGift = gifts[randomIndex] 
    setGift(randomGift)
  }
  return ( 
    <div className="app">
      <h1>{gift || "Chưa có phần thưởng"} </h1> 
      <button onClick={handleSetGifts}>Lấy thưởng</button>
    </div>
  )
}
export default Randomgift;
