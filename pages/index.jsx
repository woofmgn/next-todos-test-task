import { useEffect, useState } from "react";
import MainContainer from "../components/MainContainer";
import TodosList from "../components/TodosList";

export default function Home() {
  const [data, setData] = useState([]);
  const [todoStatus, setTodoStatus] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todos"));
    if (items) {
      setData(items);
    }
  }, []);

  return (
    <MainContainer
      children={<TodosList data={data} setData={setData} />}
      setData={setData}
      data={data}
      todoStatus={todoStatus}
      setTodoStatus={setTodoStatus}
    />
  );
}
