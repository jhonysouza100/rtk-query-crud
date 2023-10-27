import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

function App() {
  return (
    <>
    <TaskForm />
    <TasksList />
    </>
  );
}

export const log  = require => console.log(require);
export default App;

