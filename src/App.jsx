import { useState } from "react"
import Tasks from "./components/Tasks"
import TasksInputs from "./components/TasksInputs"

function App() {

  const[title, setTitle] = useState("")
  const[desc, setDesc] = useState("")
  const[prio, setPrio] = useState("")
  const[tasks, setTasks] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

    // console.log(`${title} ----- ${desc} ----  ${prio}`)
    // console.log(`form submitted`)
    // const copy = [...tasks]
    // copy.push({title, desc, prio})
    // setTasks(copy)
    // console.log(`${tasks}`)
    
    setTasks(prev => [...tasks, {title, desc, prio}])
    setTitle("")
    setDesc("")
    setPrio("")
    console.log(`${tasks}`)
  }

  return (
    <div className="h-screen w-screen flex md:flex-row flex-col align-start justify-between p-4">
      <TasksInputs submitHandler = {submitHandler} title = {title} desc = {desc} prio = {prio} setTitle = {setTitle} setDesc= {setDesc} setPrio = {setPrio}/>
      <Tasks/>
    </div>
  )
}

export default App
