import { log } from "../App";
import { useDeleteTaskMutation, useGetTasksQuery, useUpdateTaskMutation } from "../api/apiSlice";

function TasksList() {
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery(); // hook que provee una funcion de READ desde el "apiSlice".js de la lib "redux-toolkit-query"
  const [deleteTask] = useDeleteTaskMutation(); // hook que provee una funcion de DELETE desde el "apiSlice".js de la lib "redux-toolkit-query"
  const handleDelete = (id) => { // DELETE
    deleteTask(id);
  }
  const [updateTask] = useUpdateTaskMutation(); // hook que provee una funcion de UPDATE desde el "apiSlice".js de la lib "redux-toolkit-query"
  const handleUpdate = (update) => { // UPDATE
    updateTask(update);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // console.log(tasks);

  return (
    <div>
      <ul>
        {tasks.map((el) => (
          <li key={crypto.randomUUID()}>
            <div>
              <h3>{el.title}</h3>
              <p>{el.description}</p>
              <button onClick={() => handleDelete(el.id)}>Delete</button>
              <input type="checkbox" id={el.id} checked={el.completed}
              onChange={(e) => handleUpdate({...el, completed: e.target.checked})} />
              <label htmlFor={el.id} >Completed</label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
