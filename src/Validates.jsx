import { useState } from 'react';
import React from 'react';
function Validates() {
  const [password,setPass]=useState("");
  const [passErr,setPassErr]=useState(false);
  const [emailErr,setEmailErr]=useState(false);

 const setPassword=()=>{
    setPass(password);
  }
  const validate=(e)=>{
      const email=e.target.value;
     if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) 
      setEmailErr(true)
      else
      setEmailErr(false);
    
  }
  const passwordHandler=(e)=>{

    if(e.target.value.length<8)
      setPassErr(true);
    else
      setPassErr(false);

  }
  const loginHandler=(e)=>{
    e.preventDefault();
  }
  return (
    <div className='App'>
      <h1>Form Validation</h1>
      <form onSubmit={loginHandler}> 
      
           Email : <input type="text" onChange={validate}></input><br/><br/>
           <span style={{'color':'red'}}>{emailErr?<p>Invalid email address</p>:null}</span>
          <br/><br/>
          Password : <input type="password" onChange={passwordHandler}></input>
          <span style={{'color':'red'}}>{passErr?<p>Invalid Password</p>:null}</span><br/><br/>
          <button type='submit' onClick={setPassword}>Submit</button>
       </form>
    </div>
  );
}

export default Validates;