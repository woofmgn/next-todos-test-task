import { useState } from "react";
import styles from "../styles/NewTodo.module.css";

const NewTodo = ({ setData, data }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    var storage = [];
    setData((items) => [...items, { todo: inputValue, completed: false }]);
    storage = JSON.parse(localStorage.getItem("todos")) || [];
    storage.push({ todo: inputValue, completed: false });
    localStorage.setItem("todos", JSON.stringify(storage));
    setInputValue("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <button className={styles.completeAll}></button>
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
