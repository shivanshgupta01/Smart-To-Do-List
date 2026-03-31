# 📝 Smart To-Do List

**Organize your life. Prioritize your day. Get things done.**

A beautiful, high-performance task management web app designed to help you crush your daily goals. Featuring priority-based organization, smart filtering, and persistent local storage within a sleek, modern UI.

![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Styled with Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)
![Data Persistence](https://img.shields.io/badge/Data-Local%20Storage-F7DF1E?style=flat-square)
![No Login Required](https://img.shields.io/badge/No%20Login-Required-green?style=flat-square)

## 🌐 Live Demo
🔗 **[smart-todo-shivansh.vercel.app](https://smart-to-do-list-pi.vercel.app)**

---

## ✨ Features

* **🧠 Smart Sorting** — Auto-sorts tasks by nearest deadline or highest priority.
* **🔍 Deep Filtering** — Instantly filter your list by status (Pending/Completed) or priority level.
* **🎯 Priority Tags** — Assign High 🔴, Medium 🟡, or Low 🟢 priorities to your tasks.
* **📅 Due Dates** — Set deadlines so nothing slips through the cracks.
* **💾 Data Persistence** — No database needed! Tasks are instantly saved to `localStorage` and survive page refreshes.
* **🌗 Theme Toggle** — Full Light/Dark mode support that respects your system preferences.
* **🛑 Fail-Safe Deletion** — Beautiful glass-morphic confirmation modal to prevent accidental task deletions.
* **🎨 Aesthetic UI/UX** — Clean, distraction-free card layout with smooth hover animations and custom SVG checkboxes.

---

## 🚀 How It Works

User opens app  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓  
Types a task, selects priority & due date  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓  
Clicks "Add" → Task appears instantly  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓  
App auto-saves data to browser `localStorage`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓  
User uses Control Bar to filter or sort tasks  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓  
Checks off completed tasks or deletes them safely  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓  
**Stays productive and organized! 🚀**

---

## 🎨 Design & UI

* **Style:** Modern minimal — soft shadows, rounded corners (`rounded-2xl`), and clean typography.
* **Themes:** Sleek Slate Dark Mode (`bg-slate-900`) and Crisp Light Mode (`bg-slate-50`).
* **Animations:** Smooth transitions on hover, state changes, and modal pop-ups.
* **Mobile First:** Fully responsive layout that stacks perfectly on phones and expands on desktop.

---

## 🛠️ Tech Stack

| Technology | Usage |
| :--- | :--- |
| **React 18** | Frontend UI Framework |
| **Vite** | Lightning-fast build tool & HMR |
| **Tailwind CSS v4** | Utility-first styling & dark mode |
| **React Hooks** | State management (`useState`, `useEffect`) |
| **Browser API** | `localStorage` for data persistence |
| **UUID** | `crypto.randomUUID()` for unique keys |

---

## 📁 Project Structure

```text
smart-todo/
├── src/
│   ├── components/
│   │   ├── Header.jsx         ← Theme toggle & branding
│   │   ├── TaskForm.jsx       ← Data entry & validation
│   │   ├── FilterBar.jsx      ← Smart sorting/filtering controls
│   │   ├── TaskItem.jsx       ← Individual task cards
│   │   └── DeleteModal.jsx    ← Confirmation UI
│   ├── App.jsx                ← Master state manager
│   ├── main.jsx               ← React entry point
│   └── index.css              ← Tailwind v4 directives
├── index.html
├── vite.config.js
└── package.json

## ⚙️ Getting Started

### Prerequisites

  * Node.js v18+
  * npm v9+

### 1\. Installation

Clone the repository and install dependencies:

```bash
git clone [https://github.com/shivanshgupta01/smart-todo.git](https://github.com/shivanshgupta01/smart-todo.git)
cd smart-todo
npm install
```

### 2\. Run Locally

Start the Vite development server:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser. ✅

-----

## 🚀 Deployment on Vercel

**Step 1 — Push to GitHub**

```bash
git add .
git commit -m "initial commit: Smart To-Do List complete 🚀"
git push origin main
```

**Step 2 — Deploy on Vercel**

1.  Go to [vercel.com](https://vercel.com) and import your repository.
2.  Click **Deploy** (No environment variables needed\!) ✅

-----

## 🗺️ Roadmap

  - [ ] Push notifications for due date reminders
  - [ ] Cloud sync via Firebase for cross-device access
  - [ ] Drag & drop task reordering
  - [ ] AI task prioritization suggestions
  - [ ] Tagging system for custom categories

-----

## 🏗️ Part of 30 Days Mini Projects

This app is **Day 07** of my **30 Days Mini Projects** challenge — building one web app every day.

| Day | Project | Status |
| :---: | :--- | :--- |
| 01 | Daily Habit Tracker | ✅ Live |
| 02 | Skill Progress Tracker | ✅ Live |
| 03 | Focus Timer | ✅ Live |
| 04 | Accountability Board | ✅ Live |
| ... | ... | ... |
| **07** | **Smart To-Do List** | **✅ Live** |

-----

## 👨‍💻 Author

**Shivansh Gupta**

  * Instagram: [@flowkraftai](https://www.google.com/search?q=https://instagram.com/flowkraftai)
  * GitHub: [@shivanshgupta01](https://www.google.com/search?q=https://github.com/shivanshgupta01)

## 📄 License

MIT License — free to use, modify, and distribute.

-----

*Built with ❤️ by Shivansh Gupta* ⭐ **Star this repo if you found it useful\!**
