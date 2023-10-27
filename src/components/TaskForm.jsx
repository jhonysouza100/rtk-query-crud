import { log } from "../App";
import { useCreateTaskMutation } from "../api/apiSlice";

function TaskForm() {
  const [createTask] = useCreateTaskMutation(); // hook que provee una funcion de CREATE desde el "apiSlice".js de la lib "redux-toolkit-query"
  const habndleSubmit = (e) => { // estoy enviando estos datos atraves del submit
    e.preventDefault();
    // log("submit");
    // log(e);
    const title = e.target.elements.title.value.trim();
    const description = e.target.elements.description.value.trim();
    const completed = e.target.elements.completed.checked;
    // log(name, description, completed);

    createTask({
      title,
      description,
      completed
    });
  };
  return (
    <div>
      <form onSubmit={habndleSubmit}>
        <input type="text" name="title" />
        <input type="text" name="description" />
        <input type="checkbox" id="checkbox" name="completed" />
        <label htmlFor="checkbox" >Completed?</label>
        <button>Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;