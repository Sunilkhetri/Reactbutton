import { useState } from "react";
export default function Login(){
    // const [user,setUser]=useState("");
    // const [pwd,setPwd]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [pwdErr,setPwdErr]=useState(false);

    function loginHandle(e){
     
        e.preventDefault();
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3)
            setUserErr(true);
        else
            setUserErr(false)
    }
    function pwdhandler(e){
        let item=e.target.value;
        if(item.length<3)
            setPwdErr(true);
        else
            setPwdErr(false)
    }
    return(
        <div>
            <h1>Login Form</h1>
        <form onSubmit={loginHandle}>
            <input type="text" onChange={userHandler} placeholder="Enter User Name" name="userName" required></input>
            {userErr?<span style={{'color':'red'}}>Invalid User </span>:""}
            <br/><br/>
            <input type="password" onChange={pwdhandler} placeholder="Enter Password" name="pwd" required></input>
            {pwdErr?<span style={{'color':'red'}}>Invalid Password</span>:""}
            <br/><br/>
            <button>Submit</button>
        </form>
        </div>
    )
}