// src/components/Header.jsx
export default function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <header className="flex justify-between items-center mb-10">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Smart To-Do<span className="text-blue-500">.</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm font-medium">
          Manage your tasks efficiently.
        </p>
      </div>
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="p-3 bg-white dark:bg-slate-800 text-slate-600 dark:text-yellow-400 shadow-md rounded-full hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
}