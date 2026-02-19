export default function TasksInputs(){
    return (
        <div className="flex-1 p-4">
            <h3 className="text-3xl font-bold">Add To Do Tasks here</h3>
            <form className="my-7">
                <input className = "border-2 rounded p-3 w-full" placeholder="Enter a Task"></input>
                <textarea className = "border-2 rounded p-3 w-full my-4 h-60" placeholder="Description"></textarea>
                <div className="flex justify-between my-5">
                    <label className="flex justify-center gap-2 text-red-500"><input type="radio" name="gender" value="3"/>High Priority</label>
                    <label className="flex justify-center gap-2 text-orange-300"><input type="radio" name="gender" value="2"/>Medium Priority</label>
                    <label className="flex justify-center gap-2 text-green-300"><input type="radio" name="gender" value="1"/>Least Priority</label>
                </div>
                <button className="rounded bg-white text-black my-8 w-full">Add</button>
            </form>
        </div>
    )
}