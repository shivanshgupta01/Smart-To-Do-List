// src/components/TaskItem.jsx
export default function TaskItem({ task, toggleTaskStatus, setTaskToDelete }) {
  return (
    <div className={`p-5 rounded-2xl shadow-sm border transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group 
      ${task.status === 'completed' 
        ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-60' 
        : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:shadow-md dark:hover:border-slate-600'}`}
    >
      <div className="flex items-start sm:items-center gap-4">
        <div className="relative flex items-center justify-center w-6 h-6 mt-0.5 sm:mt-0">
          <input 
            type="checkbox" 
            checked={task.status === 'completed'}
            onChange={() => toggleTaskStatus(task.id)}
            className="peer appearance-none w-6 h-6 border-2 border-slate-300 dark:border-slate-600 rounded-md checked:bg-blue-500 checked:border-blue-500 cursor-pointer transition-all"
          />
          <svg className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div>
          <h3 className={`text-lg font-semibold ${task.status === 'completed' ? 'line-through text-slate-500 dark:text-slate-400' : 'text-slate-800 dark:text-slate-100'}`}>
            {task.title}
          </h3>
          <div className="flex flex-wrap gap-2 text-xs font-medium mt-2">
            <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md">
              📅 {task.dueDate}
            </span>
            <span className={`px-2.5 py-1 rounded-md flex items-center ${
              task.priority === 'high' ? 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400' :
              task.priority === 'medium' ? 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400' :
              'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
            }`}>
              {task.priority.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => setTaskToDelete(task.id)}
        className="text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors p-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100"
        title="Delete Task"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}