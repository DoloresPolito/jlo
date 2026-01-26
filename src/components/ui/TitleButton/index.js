import styles from "./style.module.scss";

export default function TitleButton({ children, border}) {
  return (
    <button   className={`${styles.button} ${border ? styles.withBorder : ""}`} >
      {children}
    </button>
  );
}