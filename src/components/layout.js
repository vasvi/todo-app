import styles from './layout.module.css';


export default function Layout({children}) {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.header}>My Todos</h1>
      </div>
      {children}
    </div>
  );
}