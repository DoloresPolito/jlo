import Section from "../../layout/Section";
import Container from "../../layout/Container";
import styles from "./style.module.scss";

export default function Work({ id }) {
  return (
    <>
      <Section id={id}>
        <Container>
          <div className={styles.work}></div>
        </Container>
      </Section>
    </>
  );
}
