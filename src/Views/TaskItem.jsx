import React from "react";
import Button from "../Components/Button";

const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {

  const badge = task.completed
    ? "bg-green-100 text-green-700 border-green-200"
    : "bg-yellow-100 text-yellow-700 border-yellow-200";

  return (
    <tr className="hover:bg-gray-50 transition">
      <td className="px-6 py-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-4 w-4 accent-green-600 cursor-pointer"
        />
      </td>
      <td className="px-6 py-3">
        <p className={task.completed ? "line-through text-gray-400" : "text-gray-900"}>
          {task.title}
        </p>
      </td>
      <td className="px-6 py-3">
        <span className={`border px-2 py-1 rounded-full text-xs ${badge}`}>
          {task.completed ? "Completed" : "Pending"}
        </span>
      </td>
      <td className="px-6 py-3 flex gap-2">
        <Button
          label="Edit"
          variant="outline"
          size="sm"
          onClick={() => onEdit(task)}
        />

        <Button
          label="Delete"
          variant="outlineDanger"
          size="sm"
          onClick={() => onDelete(task)}
        />
      </td>
    </tr>
  );
};

export default TaskItem;