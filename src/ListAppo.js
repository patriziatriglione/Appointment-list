import Task from "./task";
// mapping of the various appointments
export default function ListAppo ({tasks, onDelete}) {
  return (
    <>
    {tasks.map ((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
    ))
}
</>
  );
}

        