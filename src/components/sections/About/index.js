import Section from "../../layout/Section";
import Container from "../../layout/Container";
import styles from "./style.module.scss";
import TitleButton from "../../ui/TitleButton";
import Button from "../../ui/Button";
import Image from "next/image";
import { MaskText } from "../../ui/MaskText";

export default function About({id}) {

  const phrases = ["Detrás del proceso de", "transformación"];

  return (
    <>
      <Section id={id}>
        <Container>
          <div className={styles.about}>
            <div className={styles.left}>
              <Image
                src="/images/JLO-perfil.png"
                alt="Sobre Mi"
                fill
                sizes="(max-width: 50vw) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                loading="eager"
              />
            </div>

            <div className={styles.right}>
              <TitleButton>Sobre Mi</TitleButton>

              <MaskText phrases={phrases} />

              {/* <h2 className="h2">Detrás del proceso de transformación</h2> */}
              <p className="text">
                Hola, soy Juan. Neurocoach apasionado por acompañar a personas
                en su <span>proceso de crecimiento y transformación.</span>
              </p>
              <p className="text">
                Trabajo con líderes y profesionales que buscan desarrollar una{" "}
                <span>
                  mentalidad más consciente, enfocada y preparada para afrontar
                  nuevos desafíos.
                </span>
              </p>
              <p className="text">
                En las sesiones, exploramos dónde estás hoy y hacia dónde querés
                ir, diseñando juntos un plan de acción concreto. Lo hacemos
                utilizando herramientas basadas en la neurociencia, la
                creatividad y una mirada positiva del cambio, para que los
                avances sean reales, sostenibles y alineados con vos.
              </p>
              <Button>Contacto</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
