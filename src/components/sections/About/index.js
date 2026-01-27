import Section from "../../layout/Section";
import Container from "../../layout/Container";
import styles from "./style.module.scss";
import TitleButton from "../../ui/TitleButton";
import Button from "../../ui/Button";
import Image from "next/image";
import { MaskText } from "../../ui/MaskText";
import { Link } from "react-scroll";

export default function About({ id }) {
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
                style={{
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
                loading="eager"
              />
            </div>

            <div className={styles.right}>
              <TitleButton>Sobre Mi</TitleButton>

              <MaskText phrases={phrases} />

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
                En las sesiones, exploramos <span>dónde estás hoy</span> y{" "}
                <span>hacia dónde querés ir</span>, diseñando juntos un{" "}
                <span>plan de acción concreto</span>. Lo hacemos utilizando{" "}
                <span>herramientas basadas en la neurociencia</span>, la
                creatividad y una <span>mirada positiva del cambio</span>, para
                que los avances sean{" "}
                <span>reales, sostenibles y alineados con vos</span>.
              </p>

              <Link to="contact"
              
              smooth={true}
              offset={-5}
              duration={1000}
              
            >
                <Button>Contacto</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
