import { useEffect, useState } from "react";
import MainContainer from "../components/MainContainer";
import TodosList from "../components/TodosList";

const complete = () => {
  const [data, setData] = useState([]);
  const [todoStatus, setTodoStatus] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todos"));
    if (items) {
      const activeData = items.filter((item) => item.completed === true);
      setData(activeData);
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
};

export default complete;
