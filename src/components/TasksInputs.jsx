

export default function TasksInputs({submitHandler, title, desc, prio, setTitle, setDesc, setPrio}){
    const Title_max_count = 100
    const MaxDesc = 500
    return (
        <div className="flex-1 p-4">
            {/* Container heading */}
            <h3 className="text-3xl font-bold">Add To Do Tasks here</h3>

            {/* Input form starts */}
            <form className="my-7" onSubmit={submitHandler}>

                {/* Input feild */}
                <input className = "border-2 rounded-2xl p-3 md:h-22 w-full" value = {title} onChange = {(e) =>{
                    if(e.target.value.length <= Title_max_count){    //Restricting the Title number of chars
                        setTitle(e.target.value)
                    }
                }} 
                placeholder="Enter a Task"></input>

                {/* Textarea feild */}
                <textarea className = "border-2 rounded-2xl p-3 w-full my-8 h-70" value = {desc} onChange = {(e) => {
                    if (e.target.value.length <= MaxDesc){      //Restricting the length of the description
                        setDesc(e.target.value)
                    }
                }} 
                placeholder="Description"></textarea>

                {/* Priority-radio buttons */}
                <div className="flex justify-around my-5">
                    <label className="flex justify-center gap-2 text-red-500"><input type="radio" name="priority" value="3" checked = {prio === "3"} onChange = {(e) => setPrio(e.target.value)}/>High Priority</label>
                    <label className="flex justify-center gap-2 text-orange-300"><input type="radio" name="priority" value="2" checked = {prio === "2"} onChange = {(e) => setPrio(e.target.value)}/>Medium Priority</label>
                    <label className="flex justify-center gap-2 text-green-300"><input type="radio" name="priority" value="1" checked = {prio === "1"} onChange = {(e) => setPrio(e.target.value)}/>Least Priority</label>
                </div>

                {/* Add button */}
                <button className="rounded bg-white text-black my-8 w-full active:bg-gray-500">Add</button>
            </form>
        </div>
    )
}


// Checked attibute in the radio is used to know weather a radio is active or not