import { useState } from "react";

function SubmitExample() {  

  // function 
  function handleSubmit() { 
    const resultObj = { 
      name, email 
    } 
    console.log(resultObj);
  } 
  function handleSetName(e) { 
    setName(() => e.target.value)
  } 
  function handleSetEmail(e) { 
    setEmail(() => e.target.value)
  }
  // useState 
  const [name, setName] = useState("") 
  const [email, setEmail] = useState("")  
  // test 
  // return UI
  return ( 
    <div className="app">
      <input value={name} onChange={(e) => handleSetName(e)} type="text" placeholder="Nhập name ..."/> 
      <input value={email} onChange={(e) => handleSetEmail(e)}type="text" placeholder="Nhập email ..."/> 
      <button onClick={handleSubmit}>Submit</button> 
    </div>
  );
}

export default SubmitExample;