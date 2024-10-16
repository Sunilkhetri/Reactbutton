import React,{useState} from 'react';
function Checkbox() {
  const [name,setName]=useState("");
  const [tnc,settnc]=useState(false);
  const [interest,setInterest]=useState("");
  function getformData(e){
    console.log(name,tnc,interest);
    e.preventDefault();
  }
  return (
    <div className="App">
      <h1>Handle form in React</h1>
      <form onSubmit={getformData}>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}></input><br></br><br></br>
        <select onChange={(e)=>setInterest(e.target.value) }>
          <option>Select Option</option>
          <option>React</option>
          
          <option>Angular</option>
        </select>
        <br></br><br></br>
        <input type="checkbox" onChange={(e)=>settnc(e.target.checked)}/><span>Accept Terms and Conditions!!</span>
        <br></br><br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Checkbox;