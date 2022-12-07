import styles from "../styles/TodosList.module.css";
import Todo from "./Todo";

const TodosList = ({ data, setData, todoStatus, setTodoStatus }) => {
  return (
    <ul className={styles.todosList}>
      {data.map((item) => {
        return (
          <Todo
            key={item.id}
            todo={item.todo}
            completed={item.completed}
            id={item.id}
            glData={data}
            setGlData={setData}
          />
        );
      })}
    </ul>
  );
};

export default TodosList;
