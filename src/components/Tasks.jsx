import TaskCard from "./TaskCard";
import "./Tasks.css"

export default function Tasks({tasks,toggleComplete, deleteTask}){
    return(
        <div className="flex-1 md:border-l-2 border-t-2 md:border-t-0 p-4">
            <h3 className="text-3xl font-bold">Tasks</h3>
            <div className="h-full overflow-auto scroll">

                {/* Mapping the tasks array items with the new Tasks card */}
                {tasks.map((item, idx) => (
                    <TaskCard key= {idx} idx = {idx} title = {item.title} desc = {item.desc} prio = {item.prio} completed = {item.completed} toggleComplete = {toggleComplete} deleteTask ={deleteTask}/>
                ))}
            </div>
                
        </div>
            
    )
}