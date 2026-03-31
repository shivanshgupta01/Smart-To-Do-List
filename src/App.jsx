import { useState, useEffect } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import FilterBar from './components/FilterBar'
import TaskItem from './components/TaskItem'
import DeleteModal from './components/DeleteModal'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("smart-todo-tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [taskToDelete, setTaskToDelete] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [sortBy, setSortBy] = useState('dueDate');

  useEffect(() => {
    localStorage.setItem("smart-todo-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = ({ title, priority, date }) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      priority,
      dueDate: date || new Date().toISOString().split('T')[0],
      status: 'pending',
      tags: [],
      createdAt: new Date().toISOString()
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTaskStatus = (id) => setTasks(tasks.map(task => task.id === id ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' } : task));
  const confirmDelete = () => { setTasks(tasks.filter(task => task.id !== taskToDelete)); setTaskToDelete(null); };

  const getProcessedTasks = () => {
    let processed = [...tasks];
    if (filterStatus !== 'all') processed = processed.filter(task => task.status === filterStatus);
    if (filterPriority !== 'all') processed = processed.filter(task => task.priority === filterPriority);
    processed.sort((a, b) => {
      if (sortBy === 'dueDate') return new Date(a.dueDate) - new Date(b.dueDate);
      if (sortBy === 'priority') {
        const weight = { high: 3, medium: 2, low: 1 };
        return weight[b.priority] - weight[a.priority];
      }
      if (sortBy === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
      return 0;
    });
    return processed;
  };

  const displayedTasks = getProcessedTasks();

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 py-12 px-4 font-sans relative">
        <div className="max-w-3xl mx-auto">
          
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <TaskForm onAddTask={addTask} />

          {tasks.length > 0 && (
            <FilterBar 
              filterStatus={filterStatus} setFilterStatus={setFilterStatus}
              filterPriority={filterPriority} setFilterPriority={setFilterPriority}
              sortBy={sortBy} setSortBy={setSortBy}
            />
          )}

          {tasks.length === 0 ? (
            <div className="text-center py-16 px-4 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl bg-slate-50/50 dark:bg-slate-800/20">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">No tasks yet</h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">Your schedule is clear! Add a task above to start organizing your day.</p>
            </div>
          ) : displayedTasks.length === 0 ? (
            <div className="text-center py-12 px-4 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl bg-slate-50/50 dark:bg-slate-800/20">
              <div className="text-5xl mb-3">🔍</div>
              <h2 className="text-lg font-bold text-slate-700 dark:text-slate-200 mb-1">No matches found</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Try adjusting your filters to see your tasks.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {displayedTasks.map(task => (
                <TaskItem 
                  key={task.id} 
                  task={task} 
                  toggleTaskStatus={toggleTaskStatus} 
                  setTaskToDelete={setTaskToDelete} 
                />
              ))}
            </div>
          )}
          
        </div>

        {taskToDelete && (
          <DeleteModal setTaskToDelete={setTaskToDelete} confirmDelete={confirmDelete} />
        )}

      </div>
    </div>
  )
}

export default App