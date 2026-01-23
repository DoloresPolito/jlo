import Section from "../../layout/Section";
import Container from "../../layout/Container";
import styles from "./style.module.scss";
import TitleButton from "../../ui/TitleButton";
import { MaskText } from "../../ui/MaskText";
import Image from "next/image";
import image from "../../../../public/images/work-image.png";
import AnimatedDiv from "../../ui/AnimatedDiv/AnimatedDiv";
export default function Work({ id }) {
  const phrases = [
    "Cada encuentro uno a uno está diseñado",
    "para ayudarte a ganar claridad",
    "sobre lo que querés y cómo avanzar.",
  ];

  const items = [
    "Crecer profesionalmente sin perder bienestar",
    "Liderar desde la seguridad y la autenticidad",
    "Encontrar estabilidad en momentos complejos",
    "Lograr avances visibles y sostenibles",
  ];

  return (
    <>
      <Section id={id}>
        <Container>
          <div className={styles.work}>
            <div className={styles.top}>
              <MaskText phrases={phrases} />
            </div>

            <div className={styles.bottom}>
              <div className={styles.left}>
                <div className={styles.topleft}>
                  <TitleButton>Cómo trabajo</TitleButton>
                  <p className="text">
                    Si estás frente a un desafío, querés impulsar un proyecto o
                    simplemente necesitás claridad para avanzar, no vas a
                    hacerlo solo. Estaré a tu lado para sostener el foco,
                    activar el cambio y acompañarte en cada etapa.
                  </p>
                </div>
              
                <div className={styles.bottomleft}>
                  <TitleButton>Beneficios</TitleButton>
                  <AnimatedDiv>
                  <div className={styles.itemscontainer}>
                    {items.map((item, i) => {
                      return <Item key={i} item={item} />;
                    })}
                  </div>
                  </AnimatedDiv>
                </div>
          
              </div>

              <div className={styles.right}>
                <Image
                  src={image}
                  alt="climbing"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export function Item({ item }) {
  return (
    <div className={styles.item}>
      <button className={styles.openButton}>→</button>
      <p className="text">{item}</p>
    </div>
  );
}
