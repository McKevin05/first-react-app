import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { taskApi } from "../Services/Api";

const TaskForm = ({ onClose, setTasks, tasks, mode = "create", task, setApiError}) => {

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (mode === "edit" && task) {
      setTitle(task?.title ?? "");
    } else {
      setTitle("");
    }
  }, [mode, task]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode !== "delete" && !title.trim()) {
      return;
    }

    if (mode === "create") {
      let newTask = { id: Date.now(), title, completed: false };

      try {
        const data = await taskApi.create({ title });
        newTask = {
          ...newTask,
          id: data?.id ?? newTask.id,
          title: data?.title ?? newTask.title,
          completed: data?.completed ?? newTask.completed,
        };
      } catch (err) {
        console.warn("Create error:", err);
        setApiError?.(err.message || "Failed to create task");
      }

      setTasks((prevTasks) => [...prevTasks, newTask]);
    } else if (mode === "edit") {
      try {
        const dataEdit = await taskApi.update(task.id, { title });

        setTasks((prevTasks) =>
          prevTasks.map((t) =>
            t.id === task.id
              ? { ...t, title: dataEdit?.title ?? title }
              : t
          )
        );
      } catch (err) {
        console.error("Edit error:", err);
        setApiError?.(err.message || "Failed to edit task");
        setTasks((prevTasks) =>
          prevTasks.map((t) =>
            t.id === task.id ? { ...t, title } : t
          )
        );
      }
    } else if (mode === "delete") {
      try {
        await taskApi.delete(task.id);
      } catch (err) {
        console.error("Delete error:", err);
        setApiError?.(err.message || "Failed to delete task");
      }

      setTasks((prevTasks) =>
        prevTasks.filter((t) => t.id !== task.id)
      );
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {mode === "edit"
              ? "Edit Task"
              : mode === "delete"
              ? "Delete Task"
              : "Create Task"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
          {mode === "delete" ? (
            <>
              <p className="text-gray-600">
                Are you sure you want to delete this task?
              </p>

              <div className="flex justify-end gap-2 pt-2">
                <Button
                  label="Delete"
                  variant="primary"
                  size="sm"
                  type="submit"
                />

                <Button
                  label="Close"
                  variant="secondary"
                  size="sm"
                  onClick={onClose}
                  type="button"
                />
              </div>
            </>
          ) : (
            <>
              <Input
                label="Task Title"
                type="text"
                value={title}
                placeholder="Enter task title"
                onChange={(e) => setTitle(e.target.value)}
              />

              <div className="flex justify-end gap-2 pt-2">
                <Button
                  label="Save Task"
                  variant="primary"
                  size="sm"
                  type="submit"
                />

                <Button
                  label="Close"
                  variant="secondary"
                  size="sm"
                  onClick={onClose}
                  type="button"
                />
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default TaskForm;