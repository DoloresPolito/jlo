import styles from "./style.module.scss";

export default function TitleButton({ children}) {
  return (
    <button className={styles.button} >
      {children}
    </button>
  );
}