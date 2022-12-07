import { useEffect, useState } from "react";
import styles from "../styles/Todo.module.css";

const Todo = ({ todo, id, completed }) => {
  const [stTodo, setStTodo] = useState(completed);

  const updateLocalStorage = (status) => {
    let storage = [];
    let newStorage = [];
    storage = JSON.parse(localStorage.getItem("todos")) || [];

    let newItem = {};
    newStorage = storage.filter((item) => {
      if (item.id === id) {
        newItem = {
          ...item,
          completed: status,
        };
      } else {
        return item;
      }
    });

    console.log(storage);
    console.log(newStorage);
    console.log(newItem);

    localStorage.clear();
    newStorage.push(newItem);
    localStorage.setItem("todos", JSON.stringify(newStorage));
  };

  const handleChangeStatus = () => {
    setStTodo((prevState) => !prevState);
  };

  useEffect(() => {
    updateLocalStorage(stTodo);
  }, [stTodo]);

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
