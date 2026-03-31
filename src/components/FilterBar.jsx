// src/components/FilterBar.jsx
export default function FilterBar({ 
  filterStatus, setFilterStatus, 
  filterPriority, setFilterPriority, 
  sortBy, setSortBy 
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
      
      {/* Status Tabs */}
      <div className="flex bg-slate-100 dark:bg-slate-900/50 p-1 rounded-xl w-full sm:w-auto">
        {['all', 'pending', 'completed'].map(status => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-semibold transition-all capitalize ${
              filterStatus === status 
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Priority & Sort Selectors */}
      <div className="flex gap-2 w-full sm:w-auto">
        <select 
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="flex-1 sm:flex-none p-2 text-sm bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white transition-all cursor-pointer font-medium"
        >
          <option value="all">All Priorities</option>
          <option value="high">🔴 High</option>
          <option value="medium">🟡 Medium</option>
          <option value="low">🟢 Low</option>
        </select>

        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="flex-1 sm:flex-none p-2 text-sm bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white transition-all cursor-pointer font-medium"
        >
          <option value="dueDate">Sort by Date</option>
          <option value="priority">Sort by Priority</option>
          <option value="newest">Sort by Added</option>
        </select>
      </div>

    </div>
  );
}