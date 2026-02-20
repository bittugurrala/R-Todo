import { useEffect, useState } from "react"
import Tasks from "./components/Tasks"
import TasksInputs from "./components/TasksInputs"

function App() {
  const[title, setTitle] = useState("")   //Title useState

  const[desc, setDesc] = useState("")   //Description useState

  const[prio, setPrio] = useState("")     //Priority useState

  // useState of Task depending on Local storage
  const[tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks")
    return saved ? JSON.parse(saved) : []
  })

  // Change in the tasks should also update the Local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  // submitHandler to catch the form submission
  const submitHandler = (e)=>{
    e.preventDefault()

    // console.log(`${title} ----- ${desc} ----  ${prio}`)
    // console.log(`form submitted`)
    // const copy = [...tasks]
    // copy.push({title, desc, prio})
    // setTasks(copy)
    // console.log(`${tasks}`)
    setTasks(prev => [...prev, {title, desc, prio, completed: false}])   //Update the Tasks when the form creates a new values

    setTitle("")  //Set the title to empty that reflects in the input 
    setDesc("")
    setPrio("")
  }


  // To catch the the checked box in the TaskCards
  const toggleComplete = (idx) =>{
    let copy = [...tasks];

    copy[idx] = {
      ...copy[idx], completed : !copy[idx].completed
    };

    setTasks(copy)


  }

// Deleting function 
  const deleteTask = (idx) =>{
    const copy = [...tasks]
    copy.splice(idx, 1)
    setTasks(copy)

  }

  return (
    <div className="h-screen w-full flex md:flex-row flex-col p-4 m-0">
      <TasksInputs 
          submitHandler = {submitHandler}
          title = {title} 
          desc = {desc} 
          prio = {prio} 
          setTitle = {setTitle} 
          setDesc= {setDesc} 
          setPrio = {setPrio}/>

      <Tasks tasks = {tasks} toggleComplete = {toggleComplete} deleteTask = {deleteTask}/>
    </div>
  )
}

export default App
