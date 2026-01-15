"use client";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import styles from "./style.module.scss";
import TitleButton from "../../ui/TitleButton";
import { useState } from "react";
import BenefitCard from "../../ui/BenefitCard";
export default function Benefits({ id }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const benefitsData = [
    {
      id: 0,
      title: "Claridad",
      subtitle: "Ganar perspectiva",
      text: "Comprendé qué querés realmente y por qué, ordenando tus ideas para tomar decisiones más conscientes y efectivas.",
      color: "blue",
    },
    {
      id: 1,
      title: "Objetivos",
      subtitle: "Diseñar dirección",
      text: "Definí metas alcanzables y reales, alineadas con tus valores y propósito, evitando la dispersión y enfocándote en resultados.",

      color: "white",
    },
    {
      id: 2,
      title: "Seguridad",
      subtitle: "Tomar decisiones",
      text: "Reforzá tu confianza aprendiendo a gestionar pensamientos y emociones, desarrollando seguridad para avanzar con firmeza.",

      color: "blue",
    },
    {
      id: 3,
      title: "Acción",
      subtitle: "Crear cambios sostenibles",
      text: "Pasá del pensamiento a la acción con un plan simple, claro y posible, que puedas sostener en el tiempo sin agotarte.",
      color: "white",
    },
  ];
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
                <h2 className="h2">
                  Impulsá tu crecimiento con enfoque, estrategia y determinación
                </h2>
                <p className="text">
                  No se trata de que alguien te diga qué hacer, sino de
                  descubrir por vos mismo qué te está frenando, qué te impulsa y
                  cómo podés crear los cambios que realmente necesitás.
                </p>
              </div>
              <div className={styles.thirdrow}> 

                <div className={styles.benefitscards}>
                  {benefitsData.map((item, index) => (
                    <BenefitCard
                      key={item.id}
                      data={item}
                      isActive={activeIndex === index}
                      onOpen={() => setActiveIndex(index)}
                    />
                  ))}
                </div>
                
              </div>
            </div>
          </Container>
        </div>
      </Section>
    </>
  );
}
