import "./App.css";
import Header from "./Header";
import { Container } from "reactstrap";
import Appointments from "./Appointments";
import ListAppo from "./ListAppo";
import { useState } from "react";
import Footer from "./Footer";


export default function MyApp() {
  const [showAppoint, setShowAppoint] = useState (false);
  const [tasks, setTasks] = useState([])
  // add Task
  function addTask (task) {
    const id= Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  };
// delete Task
function deleteTask (id) {
  setTasks(tasks.filter((task) => task.id !== id  ))
};
  return (
    <Container 
     className=" border"
     fluid="lg" > 
    <Header onAdd={() => setShowAppoint(!showAppoint)}
      showAdd={showAppoint}  
       />
    {showAppoint && <Appointments onAdd={addTask} /> }
    <ListAppo tasks={tasks} onDelete={deleteTask} />
    <Footer />
    </Container>
  );
}
