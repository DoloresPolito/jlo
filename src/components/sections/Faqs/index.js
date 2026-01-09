import Section from "../../layout/Section";
import Container from "../../layout/Container";
import styles from "./style.module.scss";
import { MaskText } from "../../ui/MaskText";
import TitleButton from "../../ui/TitleButton";
export default function Faqs({id}) {
  const phrases = [
    "Encontrá respuestas a las dudas más",
    "comunes para entender mejor cómo funciona",
    "el proceso y qué podés esperar",
  ];

  return (
    <>
       <Section id={id}>
        <Container>
          <div className={styles.faqs}>
            <MaskText phrases={phrases} />
          </div>

          <TitleButton>Preguntas Frecuentes</TitleButton>
        </Container>
      </Section>
    </>
  );
}
