import Section from "../../layout/Section";
import Container from "../../layout/Container";
import styles from "./style.module.scss";
import TitleButton from "../../ui/TitleButton";

export default function Benefits({ id }) {
  return (
    <>
      <Section id={id}>
        <div className={styles.benefits}>
          <Container>
            <div className={styles.description}>
              <div className={styles.firstrow}>
                <TitleButton>Beneficios del Neurocoaching</TitleButton>
              </div>
              <div className={styles.secondrow}>

                <h2 className="h2">Impulsá tu crecimiento con enfoque, estrategia y determinación</h2>
                <p className="text">No se trata de que alguien te diga qué hacer, sino de descubrir por vos mismo qué te está frenando, qué te impulsa y cómo podés crear los cambios que realmente necesitás.</p>
              </div>
              <div className={styles.thirdrow}></div>
            </div>
          </Container>
        </div>
      </Section>
    </>
  );
}
