import styles from "./style.module.scss";

export default function Section({ children, className = "" }) {
  return (
    <section className={`${styles.section} ${className}`}>{children}</section>
  );
}
