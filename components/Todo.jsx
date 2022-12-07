import { useEffect, useState } from "react";
import styles from "../styles/Todo.module.css";

const Todo = ({ todo, id, completed, glData, setGlData }) => {
  const [stTodo, setStTodo] = useState(completed);

  const updateLocalStorage = (status) => {
    let storage = [];
    let newStorage = [];
    let newItem = {};

    storage = JSON.parse(localStorage.getItem("todos")) || [];

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

    localStorage.clear();
    newStorage.unshift(newItem);
    localStorage.setItem("todos", JSON.stringify(newStorage));
  };

  const handleChandeData = (status) => {
    let newArr = [];
    const arr = glData.map((a) => ({ ...a }));
    const res = arr.filter((item) => {
      if (item.id === id) {
        return item;
      } else {
        newArr.push(item);
      }
    });

    const a = newArr;
    const b = res[0];
    b.completed = status;
    newArr.unshift(b);
    setGlData(newArr);
  };

  const deleteTodo = () => {
    const arr = glData.map((a) => ({ ...a }));
    const res = arr.filter((item) => item.id !== id);

    setGlData(res);
    localStorage.clear();
    localStorage.setItem("todos", JSON.stringify(res));
  };

  const handleChangeStatus = () => {
    setStTodo((prevState) => !prevState);
  };

  useEffect(() => {
    updateLocalStorage(stTodo);
    handleChandeData(stTodo);
  }, [stTodo]);

  return (
    <li className={styles.todosItem}>
      <span
        className={`${styles.status} ${completed ? styles.isComplete : null} 
        }`}
        onClick={handleChangeStatus}
      ></span>
      <div className={styles.taskWrapper}>
        <input
          className={`${styles.task} ${completed ? styles.taskComplete : null}`}
          type="text"
          defaultValue={todo}
        />
        <button
          className={styles.remove}
          type="button"
          onClick={deleteTodo}
        ></button>
      </div>
    </li>
  );
};

export default Todo;
