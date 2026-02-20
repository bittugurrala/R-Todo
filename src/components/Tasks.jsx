import TaskCard from "./TaskCard";

export default function Tasks({tasks,toggleComplete, deleteTask}){
    return(
        <>
            <div className="flex-1 md:min-w-1/2 md:border-l-2 p-4 w-full">
                <h3 className="text-3xl font-bold">Tasks</h3>
                <div className="h-full md:overflow-y-scroll md:overflow-x-hidden scrollbar-hide">

                    {/* Mapping the tasks array items with the new Tasks card */}
                    {tasks.map((item, idx) => (
                        <TaskCard key= {idx} idx = {idx} title = {item.title} desc = {item.desc} prio = {item.prio} completed = {item.completed} toggleComplete = {toggleComplete} deleteTask ={deleteTask}/>
                    ))}
                </div>
                    
            </div>
        </>
            
    )
}