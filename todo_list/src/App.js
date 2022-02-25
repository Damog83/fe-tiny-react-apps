import './App.css';
import {useState} from "react";


const PopulateList = ({tasks, setList}) => {
  return (<ul>{tasks.map((task, index) =>  
  <li key = {'task'+ index}><input type ='checkbox' checked = {task.checked} onChange = {(event)=> {
    setList((currentList) => {
      const newList = [...currentList]
      newList.forEach( (todo) => {
        if(todo.text === task.text){
          todo.checked = event.target.checked
        } 
      } )
      return newList
    }) 
  }}/>{task.text}</li>)}</ul>)
}

  
//   const checkbox = () => {
    
//     const [checked, setChecked] = useState(true)

// }

function App() {
const tasks = [];
const [list, setList] = useState(tasks)
const [task, setTask] = useState('')
  return (
    <div className="App">
     <h1>My To Do List</h1>
     <ul>
       <legend>To be completed</legend>
       <PopulateList tasks = {list} setList = {setList}/>
     </ul>
     <p>Add</p>:<input onChange = {(event) => {setTask(event.target.value)}} type = 'text'/>
    <button onClick = {() => { {setList((currentList) => {
       const copy = [...currentList]
       copy.push({text:task, checked: false});
       return copy;
       })}}}>Add</button>

    <button onClick= {() => {
      {setList((currentList) => {
       const copy = [...currentList]
       const filterCopy = copy.filter(task => task.checked === false) 
            return filterCopy
      })}
    }}>Remove</button>
    </div>
  );

}

export default App;
