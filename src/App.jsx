import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AddStudent } from './components/AddStudent';
import { ShowStudents } from './components/ShowStudents';

function App() {
  const [show, setShow] = useState(false);
  return (

    <div className="App">

      {show ? <button onClick={() => setShow(!show)}>Show Student List</button> : <button onClick={() => setShow(!show)}>Add a new Student</button>}

      {show ? <AddStudent/> : <ShowStudents/>}
      {/* <button onClick={() => {
        setShow(!show);
      }}>Add</button> */}

      
    
    </div>
  )
}

export default App
