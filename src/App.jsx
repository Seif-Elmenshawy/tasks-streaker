import React, { useEffect, useState } from "react";
import { FaFireAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const App = () => {
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "";
  });
  const [currentStreak, setCurrentStreak] = useState(0);
  const [permenantTasks, setPermenantTasks] = useState([]);
  const [addTask, setAddTask] = useState(true);

  const handleNameEntry = (e) => {
    e.preventDefault();
    const enteredName = document.getElementById("name-input").value.trim();
    setName(enteredName);
    if (!enteredName) {
      document.getElementById("input-error").innerText =
        "Don't leave the input empty, it is required";
    } else {
      localStorage.setItem("name", enteredName);
    }
  };

  const handleAddTask = () => {
    
  }

  const listTasks = permenantTasks.map((task) => <li>{task.name}</li>);

  return (
    <>
      <div
        id="name-card"
        className={
          name ? "hidden" : "flex h-screen flex-col items-center justify-center"
        }
      >
        <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-800 px-13 py-13">
          <h1>Welcome!</h1>
          <p>Please Enter Your Name</p>
          <input
            id="name-input"
            type="text"
            className="mt-10 rounded-md bg-slate-600 p-1.5 focus:outline-2 focus:outline-slate-400"
            placeholder="Seif"
            required
          />
          <p id="input-error" className="w"></p>
          <button
            className="mt-5 w-30 cursor-pointer rounded-md bg-slate-600 px-2.5 text-sm text-wrap transition hover:-translate-y-1.5 hover:shadow-md hover:shadow-slate-50 active:bg-slate-700"
            onClick={handleNameEntry}
          >
            Enter your name
          </button>
        </div>
      </div>
      <div id="dashboard" className={!name ? "hidden" : "z-0 p-5"}>
        <div
          id="welcome"
          className="flex flex-row items-center justify-between rounded-xl bg-slate-800 p-5"
        >
          <h1 className="text-3xl">
            Welcome <span className="font-[Pacifico]">{name} !</span>
          </h1>
          <div id="streak" className="flex flex-row flex-nowrap items-center">
            <h1 className="text-xl">Current Streak: {currentStreak} </h1>
            <FaFireAlt
              className={currentStreak == 0 ? "mx-1" : "mx-2.5 text-amber-500"}
            />
          </div>
        </div>
        <div id="tasks" className="my-10 flex flex-row justify-between">
          <div
            id="permenant"
            className="mr-2.5 flex h-1/3 w-1/2 flex-col items-center rounded-xl bg-slate-800 p-5"
          >
            <h1 className="text-xl font-bold">Daily Repeated Tasks</h1>
            <p className={permenantTasks.length === 0 ? "" : "hidden"}>
              No Tasks
            </p>
            <ul>{listTasks}</ul>
            <button onClick={()=>setAddTask(true)} className="mt-5 w-full cursor-pointer rounded-md bg-gray-900 py-2.5 hover:bg-gray-950 hover:transition-colors active:scale-95 active:transition">
              Add a Task
            </button>
          </div>
          <div
            id="daily"
            className="ml-2.5 flex h-1/3 w-1/2 flex-col items-center rounded-xl bg-slate-800 p-5"
          ></div>
        </div>
      </div>
      <div
        id="add-task-modal"
        className={
          addTask
            ? "fixed inset-0 z-10000 flex items-center justify-center backdrop-blur-sm transition"
            : "hidden"
        }
      >
        <div
          id="card"
          className="md flex w-2/3 flex-col items-center justify-center rounded bg-slate-800 p-5"
        >
          <div className="flex w-full flex-row justify-end">
            <ImCross id="close-modal" className="scale-110 cursor-pointer active:scale-90 active:transition" onClick={()=> setAddTask(false)} />
          </div>
          <h1 className="text-2xl font-bold">Add a Task</h1>
          <form className="my-10 flex w-full flex-col items-center justify-center">
            <input
              type="text"
              className="w-9/10 rounded-md border-2 border-solid border-white bg-slate-800 p-2.5 focus:outline-0"
              placeholder="Read 10 pages"
            />
            <button className="mt-10 w-9/10 cursor-pointer rounded-md bg-slate-600 p-2.5 active:scale-95 active:bg-slate-700 active:transition">
              Add the Task
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
