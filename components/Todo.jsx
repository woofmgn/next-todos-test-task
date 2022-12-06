import styles from "../styles/Todo.module.css";

const Todo = ({ todo, completed }) => {
  return (
    <li className={styles.todosItem}>
      <span className={styles.status}></span>
      <div className={styles.taskWrapper}>
        <input className={styles.task} type="text" defaultValue={todo} />
        <button className={styles.remove}></button>
      </div>
    </li>
  );
};

export default Todo;
