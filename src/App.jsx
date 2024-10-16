import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from 'react-bootstrap'
import Employee from './Employee'
import Login from './Login'
import Checkbox from './Checkbox'
import Validates from './Validates'
import User from './User'
import Member from './Member'

function App() {
{/*const [status,setStatus]=useState(true);*/}

function getUser(){
  alert('Hello user')
}
function getMember(){
  alert('Hello member')
}
  return (
 <div className="App">       {/* <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <Employee/>
    </
   
  
      {
        status?
          <h1  >Hello World!!</h1>
          :null
          }
      <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Show</button>
      <button onClick={()=>setStatus(!status)}>Toggle</button>  
      <Login/>
      <Checkbox/> 
      <Validates/>*/}

      <User user={getUser}/>
      <User user={getUser}/>
      <User user={getUser}/>
      <Member member={getMember}/>


    </div>
  );
}

export default App
