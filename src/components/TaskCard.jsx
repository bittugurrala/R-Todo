import { Dot } from 'lucide-react' 

export default function TaskCard({idx,title, desc, prio, completed, toggleComplete, deleteTask}){
    // let values = ""
    // if (prio === "3"){
    //     values = "text-red flex bg-red-400 h-6 px-3 rounded-2xl"
    // }
    // else if(prio === "2"){
    //     values = "text-orange flex bg-orange-400 h-6 px-3 rounded-2xl"
    // }
    // else{
    //     values = "text-green flex bg-green-400 h-6 px-3 rounded-2xl"
    // }

    //Mapping the label styles with the priority order
    const priorityStyles = {
        "3": "text-red-700 bg-red-400",
        "2": "text-orange-700 bg-orange-400",
        "1": "text-green-700 bg-green-400",
    };
    const values = `flex items-center justify-center gap-1 h-6 rounded-2xl ${priorityStyles[prio]}`

    // Creating the buttons respective labels
    const priority = {
        "3": "High",
        "2": "Medium",
        "1": "Least",
    };

    // The respective priority value gets stored in the prio_value
    const prio_value = priority[prio]

    // const checkedd = ` ${completed ? "line-through text-gray-400" : "text-black"}`


    return( 
        <div>
            <div className={`my-7 bg-white rounded-2xl p-4 flex flex-row justify-between transition-all duration-300${
                    completed ? "bg-transparent opacity-50" : "bg-white"}  
                `}> {/* Completed status decides the bd of the card */}
                <div className="flex gap-3 min-w-0">
                    <input type = "checkbox" checked = {completed}  onChange={() => toggleComplete(idx)} className="h-10 w-5 flex-shrink-0"></input>

                    <div className='min-w-0'>
                        <h3 className= {`text-2xl font-bold text-black`}>{title}</h3>
                        <p className={`text-gray-600 my-3  whitespace-normal`}>{desc}</p>
                    </div>  
                </div>

                <div className='flex flex-col'>
                    <p className= {values}>{prio_value}</p>
                    <button className='text-black bg-amber-300 mt-5 rounded-2xl active:bg-red-500' onClick = {deleteTask}>Delete</button>
                </div>           
            </div>

        </div>
    )
}


// Check for the value in the completed as when I once clicks on the check button 
// As the check never knows weather it is checked or not so created a completed variable that updates on iteself
//depending on check status the background Opocity changes.