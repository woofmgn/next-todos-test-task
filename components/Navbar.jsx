import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ data }) => {
  const [count, setCount] = useState(0);

  const checkCount = () => {
    const ct = data.filter((item) => {
      if (item.completed === false) {
        return item;
      } else {
        return;
      }
    });
    return ct.length;
  };

  useEffect(() => {
    setCount(checkCount);
  }, [data]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.counter}>{count} items left</p>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.link}>
              All
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/active" className={styles.link}>
              Active
            </Link>
          </li>
          <li>
            <Link href="/completed" className={styles.link}>
              Complete
            </Link>
          </li>
        </ul>
      </nav>
      <button className={styles.deleteTask} type="button">
        Clear complete
      </button>
    </div>
  );
};

export default Navbar;
