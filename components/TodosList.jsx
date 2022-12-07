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
            data={item}
            id={item.id}
            setData={setData}
            todoStatus={todoStatus}
            setTodoStatus={setTodoStatus}
          />
        );
      })}
    </ul>
  );
};

export default TodosList;
