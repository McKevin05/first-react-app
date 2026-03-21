import React, { useEffect } from "react";
import Card from "../Components/Card";
import Container from "../Components/Container";
import Table from "../Components/Table";
import Button from "../Components/Button";
import { taskApi } from "../Services/Api";
import LoadingSpinner from "../Components/LoadingSpinner";

const TaskList = ({setLoading,setTasks,onCreate,loading,rows}) => {
  
  useEffect(() => {
    listOfTasks();
  }, []);

  const listOfTasks = async () => {
    try {
      const data = await taskApi.getAll();
      setTasks(data);
    } catch (error) {
      console.error("Error loading tasks:", error);
    } finally {
      setLoading(false);
    }
  };

 
  return (
    <Container className="mx-auto mt-10">
      <Card className="mx-auto max-w-4xl p-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">Task Manager</h1>
          <small className="text-gray-600">Manage your tasks efficiently</small>
        </div>
        <hr className="mb-6" />
        <Button
          variant="success"
          label="Create Task"
          className="mb-4"
          onClick={onCreate}
        />
        <Table
          rows={
            loading ? (
              <tr>
                <td colSpan="4" className="py-6 text-center">
                  <LoadingSpinner />
                </td>
              </tr>
            ) : (
              rows
            )
          }
        >
          <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
            Task
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
            Due Date
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
            Actions
          </th>
        </Table>
      </Card>

      
    </Container>
  );
};

export default TaskList;