import styles from './layout.module.css';
import Link from 'next/link';


export default function Layout({children, headerName, showButton}) {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.header}>{headerName}</h1>
        {showButton? <Link className={styles.link} href="/addTodo"> Add </Link> :
         <Link className={styles.link} href="/list"> Back </Link>}
      </div>
      {children}
    </div>
  );
}