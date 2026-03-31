// src/components/TaskForm.jsx
import { useState } from 'react';

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('low');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({ title, priority, date });
    
    // Reset form
    setTitle('');
    setPriority('low');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mb-8 flex flex-col sm:flex-row gap-4">
      <input 
        type="text" 
        placeholder="What needs to be done?" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 p-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white transition-all placeholder:text-slate-400"
      />
      <select 
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="p-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white transition-all cursor-pointer font-medium"
      >
        <option value="low">🟢 Low</option>
        <option value="medium">🟡 Medium</option>
        <option value="high">🔴 High</option>
      </select>
      <input 
        type="date" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white transition-all cursor-pointer text-sm"
      />
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95">
        Add
      </button>
    </form>
  );
}