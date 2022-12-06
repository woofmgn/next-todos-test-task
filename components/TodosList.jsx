import styles from "../styles/TodosList.module.css";

const TodosList = () => {
  return (
    <ul className={styles.todosList}>
      <li className={styles.todosItem}>
        <span className={styles.status}></span>
        <div className={styles.taskWrapper}>
          <input className={styles.task} type="text" />
          <button className={styles.remove}></button>
        </div>
      </li>
      <li className={styles.todosItem}>
        <span className={styles.status}></span>
        <div className={styles.taskWrapper}>
          <input className={styles.task} type="text" />
          <button className={styles.remove}></button>
        </div>
      </li>
      <li className={styles.todosItem}>
        <span className={styles.status}></span>
        <div className={styles.taskWrapper}>
          <input className={styles.task} type="text" />
          <button className={styles.remove}></button>
        </div>
      </li>
    </ul>
  );
};

export default TodosList;
