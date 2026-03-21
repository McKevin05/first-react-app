import './App.css'
import React, { useState } from 'react';
import TaskForm from './Views/TaskForm';
import TaskList from './Views/TaskList';
import TaskItem from './Views/TaskItem';

function App() {

  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState('create');
  const [selectedTask, setSelectedTask] = useState(null);
  const [apiError, setApiError] = useState(null);

  const openCreate = () => {
    setMode('create');
    setSelectedTask(null);
    setShowModal(true);
  };

  const onEdit = (task) => {
      setSelectedTask(task);
      setMode("edit");
      setShowModal(true);
    };

  const onDelete = (task) => {
    console.log('delete', task);
    setSelectedTask(task);
    setMode("delete");
    setShowModal(true);
  };

  const onToggle = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const rows = tasks.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      onEdit={onEdit}
      onDelete={onDelete}
      onToggle={onToggle}
    />
  ));

  React.useEffect(() => {
    if (!apiError) return;
    const timer = setTimeout(() => setApiError(null), 4000);
    return () => clearTimeout(timer);
  }, [apiError]);

  return (
    <>
      {apiError && (
        <div className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 rounded-lg bg-red-600 px-4 py-3 text-white shadow-lg">
          <div className="flex items-center justify-between gap-2">
            <span>{apiError}</span>
            <button onClick={() => setApiError(null)} className="font-bold">✕</button>
          </div>
        </div>
      )}
      <TaskList 
        setLoading={setLoading}
        setTasks={setTasks}
        onCreate={openCreate}
        loading={loading}
        rows={rows}
        setApiError={setApiError}
      />
        {showModal && (
            <TaskForm
            onClose={() => {
              setShowModal(false);
              setMode('create');
              setSelectedTask(null);
            }}
            setTasks={setTasks}
            tasks={tasks}
            mode={mode}
            task={selectedTask}
            setApiError={setApiError}
          />
        )}
        
    </>
  )
}

export default App;
