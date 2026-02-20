import { useEffect, useState } from "react"
import Tasks from "./components/Tasks"
import TasksInputs from "./components/TasksInputs"

function App() {

  
  const[title, setTitle] = useState("")
  const[desc, setDesc] = useState("")
  const[prio, setPrio] = useState("")
  const[tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const submitHandler = (e)=>{
    e.preventDefault()

    // console.log(`${title} ----- ${desc} ----  ${prio}`)
    // console.log(`form submitted`)
    // const copy = [...tasks]
    // copy.push({title, desc, prio})
    // setTasks(copy)
    // console.log(`${tasks}`)
    
    setTasks(prev => [...prev, {title, desc, prio, completed: false}])
    setTitle("")
    setDesc("")
    setPrio("")
  }

  const toggleComplete = (idx) =>{
    let copy = [...tasks];

    copy[idx] = {
      ...copy[idx], completed : !copy[idx].completed
    };

    setTasks(copy)


  }

  return (
    <div className="h-screen w-screen flex md:flex-row flex-col align-start justify-between p-4">
      <TasksInputs 
          submitHandler = {submitHandler}
          title = {title} 
          desc = {desc} 
          prio = {prio} 
          setTitle = {setTitle} 
          setDesc= {setDesc} 
          setPrio = {setPrio}/>

      <Tasks tasks = {tasks} toggleComplete = {toggleComplete}/>
    </div>
  )
}

export default App
