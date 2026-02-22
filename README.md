# To-Do List Web Application

A modern, responsive **To-Do List web application** built using **React + Vite**, designed to help users efficiently create, manage, and track daily tasks with persistent storage.

**Live Demo:** https://bittugurrala.github.io/R-Todo/  
**Source Code:** https://github.com/bittugurrala/R-Todo

---

## Features

- Add tasks with title, description, and priority
- Mark tasks as completed / uncompleted
- Delete tasks instantly
- Persistent data storage using **Local Storage**
- Fully responsive UI for mobile and desktop
- Fast performance powered by **Vite**
- Component-based architecture using React Hooks

---

## Tech Stack

- **Frontend:** React (Functional Components)
- **Build Tool:** Vite
- **Styling:** CSS / Tailwind CSS *(if applicable)*
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Storage:** Browser Local Storage
- **Deployment:** GitHub Pages

---

## Project Structure

R-Todo/ <br>
│<br>
├── src/<br>
│ ├── components/<br>
│ │ ├── Tasks.jsx<br>
│ │ ├── TaskCard.jsx<br>
│ │ ├── TasksInputs.jsx<br>
│ │<br>
│ ├── styles/<br>
│ │ └── Tasks.css<br>
│ │<br>
│ ├── App.jsx<br>
│ └── main.jsx<br>
│<br>
├── public/<br>
├── index.html<br>
├── package.json<br>
└── vite.config.js<br>

---

## How It Works

- Tasks are stored in **Local Storage**, ensuring data persistence even after page refresh.
- State is lifted to parent components to manage task creation, updates, and deletion.
- Props are passed to child components for modularity and reusability.
- Controlled form inputs ensure predictable UI behavior.

---

## Installation & Setup

Clone the repository and run the project locally:

```bash
git clone https://github.com/bittugurrala/R-Todo.git
cd R-Todo
npm install
npm run dev
