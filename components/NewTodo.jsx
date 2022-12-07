import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/NewTodo.module.css";

const NewTodo = ({ setData, data, todoStatus, setTodoStatus }) => {
  const [inputValue, setInputValue] = useState("");
  const [allStatus, setAllStatus] = useState(true);

  const toggleStatus = (status) => {
    let storage = JSON.parse(localStorage.getItem("todos")) || [];
    let newStorage = [];
    let newItem = {};

    storage.map((item) => {
      newItem = {
        ...item,
        completed: status,
      };
      newStorage.push(newItem);
    });

    localStorage.clear();
    localStorage.setItem("todos", JSON.stringify(newStorage));
  };

  const copyArr = () => {};

  const handleToggleAllStatus = () => {
    const arr = data.map((a) => ({ ...a }));
    const newArr = arr.map((item) => ({ ...item, completed: allStatus }));

    setData(newArr);
    setAllStatus((prev) => !prev);
    setTodoStatus((prev) => !prev);
    toggleStatus(allStatus);
  };

  const addItemLocalStorage = (newItem) => {
    let storage = [];

    storage = JSON.parse(localStorage.getItem("todos")) || [];
    storage.push(newItem);
    localStorage.setItem("todos", JSON.stringify(storage));
  };

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    const newTodo = {
      todo: inputValue,
      completed: false,
      id: uuidv4(),
    };

    evt.preventDefault();
    setData((items) => [...items, newTodo]);
    addItemLocalStorage(newTodo);
    setInputValue("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <button
          className={styles.completeAll}
          type="button"
          onClick={handleToggleAllStatus}
        ></button>
        <input
          type="text"
          className={styles.input}
          placeholder="What needs to be done?"
          onChange={handleChange}
          value={"" || inputValue}
        />
      </div>
    </form>
  );
};

export default NewTodo;
