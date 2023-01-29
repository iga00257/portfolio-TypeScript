import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import Entry from './components/entry'
import './css/whatIdo.css' 
import { motion } from "framer-motion"
import { MyComponent } from './components/motion';


function App() {
  const [isActive, setisActive] = useState(false)
  const scrollHandler = e =>{
    // console.log(window.scrollY)
    if (window.scrollY>200) {
      setisActive(true);
    }else{
      setisActive(false);
    }
    console.log(isActive)
    console.log(window.scrollY)
  }
  useEffect(()=>{
    addEventListener('scroll',scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler);
  }
  ,[])
  return (
    <div className="container ">
      <Entry/>
      
      <div className=' page_container'>
        <div className={ ` ${isActive?'child_container move_left':'child_container'}`}></div>
        <div className=' child_body_container'>
          <div style={{width:'50%', border: 'solid'}}></div>
          <div style={{width:'50%'}}></div>
        </div>
        <div className={ ` ${isActive?'child_container move_right':'child_container'}`}/>

      </div>
      
    </div>
  )
}

export default App
