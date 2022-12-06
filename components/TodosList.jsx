import styles from "../styles/TodosList.module.css";
import Todo from "./Todo";

const TodosList = ({ data }) => {
  return (
    <ul className={styles.todosList}>
      {data.map((item, i) => {
        return <Todo key={i} todo={item.todo} completed={item.completed} />;
      })}
    </ul>
  );
};

export default TodosList;
