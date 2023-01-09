import React,{useState} from 'react'
import './App.css';

function App() {

  const toDoListApp = 'Todo List App'
  const add  = 'Add'

  //use State

  const [newitem,setNewItem] = useState("");
  const [items,setItems] = useState([]);

  //helper 
  function addItem (){
    

    if(!newitem){
      alert("Please Enter new item")
      return;
    }

    const item = {
    id:Math.floor(Math.random() *1000),
    value:newitem
    }

    setItems((oldList) => [...oldList,item])
    setNewItem('')

    
  }

  function deleteItem(id){
    const newArray = items.filter(item=>item.id !==id)
    setItems(newArray)
  }
  return (
    <div className="App">
    {/*1.Header*/}
    <h1>{toDoListApp}</h1>

   { /*2.input(input and button)*/}
   <input
   type="text"
   placeholder='Add an item..'
   value={newitem}
   onChange={(e)=>setNewItem(e.target.value)}

   />
   <button onClick={()=>addItem()}>{add}</button>

    {/*3.List of items*/}

    <ul>
     {items.map(item=>{
      return(
        <li key={item.id}>{item.value} <button className='delete-button' style={{color:"red"}} onClick={()=>deleteItem(item.id)}>X</button></li>
      )
     })}
    </ul>

    </div>
  );
}

export default App;
