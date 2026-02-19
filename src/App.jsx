import Tasks from "./components/Tasks"
import TasksInputs from "./components/TasksInputs"

function App() {

  return (
    <div className="h-screen w-screen flex md:flex-row flex-col align-start justify-between p-4">
      <TasksInputs/>
      <Tasks/>
    </div>
  )
}

export default App
