import Section from "../../layout/Section";
import Container from "../../layout/Container";
import styles from "./style.module.scss";
import { MaskText } from "../../ui/MaskText";
import TitleButton from "../../ui/TitleButton";

export default function Contact({id}) {
  const phrases = [
    "Es el primer paso para empezar a",
    "generar el cambio que estás",
    "buscando.",
  ];

  return (
    <>
      <Section id={id}>
        <Container>
          <div className={styles.contact}>
            <div className={styles.left}>
              <TitleButton>Contacto</TitleButton>
              <MaskText phrases={phrases} />
              <p className="text">Dejame tus datos y coordinamos una charla.</p>
            </div>
            <div className={styles.right}></div>
          </div>
        </Container>
      </Section>
    </>
  );
}
