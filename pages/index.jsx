import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewTodo from "../components/NewTodo";
import TodosList from "../components/TodosList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [todoStatus, setTodoStatus] = useState(false);

  const checkTodoStatus = () => {
    let completedTodo = [];

    data.filter((item) => {
      if (item.completed.true) {
        return completedTodo.push(item);
      }
    });
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todos"));
    if (items) {
      setData(items);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <NewTodo
            setData={setData}
            data={data}
            todoStatus={todoStatus}
            setTodoStatus={setTodoStatus}
          />
          <TodosList
            data={data}
            setData={setData}
            todoStatus={todoStatus}
            setTodoStatus={setTodoStatus}
          />
        </div>
        <Navbar data={data} />
      </main>
      <Footer />
    </div>
  );
}
