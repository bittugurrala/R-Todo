export default function TasksInputs({submitHandler, title, desc, prio, setTitle, setDesc, setPrio}){
    return (
        <div className="flex-1 p-4">
            <h3 className="text-3xl font-bold">Add To Do Tasks here</h3>
            <form className="my-7" onSubmit={submitHandler}>
                <input className = "border-2 rounded p-3 w-full" value = {title} onChange = {(e) => setTitle(e.target.value)} placeholder="Enter a Task"></input>
                <textarea className = "border-2 rounded p-3 w-full my-4 h-60" value = {desc} onChange = {(e) => setDesc(e.target.value)} placeholder="Description"></textarea>
                <div className="flex justify-between my-5">
                    <label className="flex justify-center gap-2 text-red-500"><input type="radio" name="gender" value="3" onChange = {(e) => setPrio(e.target.value)}/>High Priority</label>
                    <label className="flex justify-center gap-2 text-orange-300"><input type="radio" name="gender" value="2" onChange = {(e) => setPrio(e.target.value)}/>Medium Priority</label>
                    <label className="flex justify-center gap-2 text-green-300"><input type="radio" name="gender" value="1" onChange = {(e) => setPrio(e.target.value)}/>Least Priority</label>
                </div>
                <button className="rounded bg-white text-black my-8 w-full active:bg-gray-500">Add</button>
            </form>
        </div>
    )
}