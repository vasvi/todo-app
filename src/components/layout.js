import styles from './layout.module.css';
import Link from 'next/link';


export default function Layout({children}) {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.header}>My Todos</h1>
        <Link className={styles.link} href="\addTodo"> Add new</Link>
      </div>
      {children}
    </div>
  );
}