import Task from "./task";

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

        