import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.counter}>items left</p>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.link}>
              All
            </Link>
          </li>
          <li>
            <Link href="/active" className={styles.link}>
              Active
            </Link>
          </li>
          <li>
            <Link href="/complete" className={styles.link}>
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
