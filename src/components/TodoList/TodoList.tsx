import { useEffect, useState } from "react";

export interface ToDoInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
interface ToDoProps {
  userId: number | null;
}

function ToDo({ userId }: ToDoProps): JSX.Element {
  const [toDo, setToDo] = useState<ToDoInterface[]>([]);
  useEffect(() => {
    const fetchToDoItems = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const jsonData: ToDoInterface[] = await response.json();
        setToDo(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchToDoItems();
  }, []);

  const filteredToDo = userId
    ? toDo.filter((item) => item.userId === userId)
    : [];
  const firstFiveToDo = filteredToDo.slice(0, 5);
  return (
    <div className="doDoContainer">
      <ol>
        {firstFiveToDo.map((mission) => (
          <li key={mission.id}>{mission.title}</li>
        ))}
      </ol>
    </div>
  );
}
export default ToDo;
