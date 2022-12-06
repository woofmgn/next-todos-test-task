import styles from "../styles/NewTodo.module.css";

const NewTodo = () => {
  return (
    <form className={styles.form}>
      <div className={styles.inputWrapper}>
        <button className={styles.completeAll}></button>
        <input
          type="text"
          className={styles.input}
          placeholder="What needs to be done?"
        />
      </div>
    </form>
  );
};

export default NewTodo;
