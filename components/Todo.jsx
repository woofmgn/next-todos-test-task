import { useState } from "react";
import styles from "../styles/Todo.module.css";

const Todo = ({ todo, id }) => {
  const [stTodo, setStTodo] = useState(false);

  const updateLocalStorage = (status) => {
    let storage = [];
    let newStorage = [];
    storage = JSON.parse(localStorage.getItem("todos")) || [];

    let newItem = {};
    newStorage = storage.filter((item) => {
      if (item.id === id) {
        setStTodo(item.completed);
        newItem = {
          ...item,
          completed: status,
        };
      } else {
        return item.id !== id;
      }
    });

    localStorage.clear();
    newStorage.push(newItem);
    localStorage.setItem("todos", JSON.stringify(newStorage));
  };

  const handleChangeStatus = () => {
    setStTodo((prevState) => !prevState);
    updateLocalStorage(stTodo);
  };

  return (
    <li className={styles.todosItem}>
      <span className={styles.status} onClick={handleChangeStatus}></span>
      <div className={styles.taskWrapper}>
        <input className={styles.task} type="text" defaultValue={todo} />
        <button className={styles.remove}></button>
      </div>
    </li>
  );
};

export default Todo;
