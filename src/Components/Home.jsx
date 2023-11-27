import React, {useState} from 'react'
import {useRef} from 'react'
// import Equi from './assets/equi'
import "./main.css"
const Home = () => {
    // const [isOpen,setisOpen]=useState(false);
    const [group,setGroup]=useState('status');
    const [order,setOrder]=useState('Priority');
    const handleGroup = (event) => {
      setGroup(event.target.value);
    };
  
    const handleOrder = (event) => {
      setOrder(event.target.value);
    };

    const displayRef=useRef();
    const displayHandler=()=>{
      displayRef.current.classList.toggle("active")
  }

  return (
    <div>
      <button className='display_btn' onClick={displayHandler}>
         Display
      </button>

      <div className='form'ref={displayRef}>
        <label for="Grouping" className='label' >Grouping   </label>
        <select name={group} value={group} id="Grouping" onChange={handleGroup}>
          <option value="Status" onClick={()=>handleGroup('Status')}>Status</option>
          <option value="Priority"onClick={()=>handleGroup('Priority')}>Priority</option>
          <option value="User"onClick={()=>handleGroup('User')}>User</option>
          
        </select>
        <br /><br />
        <label for="Order" className='label' >Ordering</label>
        <select name={order} value={order} id="Order" onChange={handleOrder}>
          <option value="Priority"onClick={()=>handleOrder('Priority')}>Priority</option>
          <option value="Title"onClick={()=>handleOrder('Title')}>Title</option>
          
        </select>
        
      </div>
      <br />
      
                {group}
                <br />
                {order}
    </div>
  )
}

export default Home
