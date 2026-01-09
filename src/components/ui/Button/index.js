import styles from "./style.module.scss";

export default function Button({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.text}>{children}</span>
      <span className={styles.icon}></span>
    </button>
  );
}