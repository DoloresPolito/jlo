"use client";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import styles from "./style.module.scss";
import { MaskText } from "../../ui/MaskText";
import TitleButton from "../../ui/TitleButton";
import { useState } from "react";
import AccordionItem from "../../ui/AccordionItem";

export default function Faqs({ id }) {
  const phrases = [
    "Encontrá respuestas a las dudas más",
    "comunes para entender mejor cómo funciona",
    "el proceso y qué podés esperar",
  ];

  const faqsA = [
    {
      id: 1,
      faq: "¿Cómo trabajo?",
      ans: "La primera charla es una sesión inicial de 30 minutos sin costo, donde te explico mi modalidad de trabajo, aclaramos dudas y definimos juntos cómo avanzar según tus objetivos.",
    },
    {
      id: 2,
      faq: "¿Cómo es una sesión de Neurocoaching?",
      ans: "Una sesión de Neurocoaching es un espacio de conversación guiada, confidencial y enfocada en objetivos, donde te ayudo a comprender cómo funciona tu mente y cómo tus pensamientos influyen en tus emociones, decisiones y resultados.",
      ans2: "Son conversaciones 1:1, totalmente personalizadas, donde la agenda de cada sesión se adapta a tu necesidad y momento actual.",
    },
    {
      id: 3,
      faq: "¿Cuántas sesiones se necesitan para ver resultados?",
      ans: "Los resultados dependen en gran parte de tu compromiso y de cuánto decidas involucrarte en el proceso.",
      ans2: "Por lo general, trabajamos con un mínimo de 4 y un máximo de 12 sesiones por cada tema u objetivo, dentro de un proceso que suele desarrollarse en un período aproximado de 3 a 6 meses, siempre adaptado a tu ritmo y necesidades.",
    },
    {
      id: 4,
      faq: "¿Trabajamos solo temas personales o también profesionales?",
      ans: "Ambos. Cada sesión se adapta a tu necesidad del momento.",
      ans2: "El Neurocoaching puede aplicarse tanto a desafíos personales como profesionales, ya que ambos ámbitos están directamente conectados en la forma en que pensás, decidís y actuás.",
    },

    {
      id: 5,
      faq: "¿Las sesiones pueden ser online?",
      ans: "Sí. La modalidad se adapta a tu preferencia.",
      ans2: "Las sesiones pueden realizarse online o de forma presencial, manteniendo la misma calidad, confidencialidad y efectividad del proceso.",
    },
    {
      id: 6,
      faq: "¿Cuándo es un buen momento para empezar?",
      ans: "El mejor momento es cuando sentís que querés generar un cambio, tomar mayor claridad o dejar de postergar lo que es importante para vos.",
    },
  ];

  const [active, setActive] = useState("");

  const handleToggle = (id) => {
    setActive((prevActive) => (prevActive === id ? null : id));
  };

  return (
    <>
      <Section id={id}>
        <Container>
          <div className={styles.faqs}>
            <div className={styles.top}>
              <MaskText phrases={phrases} />
              <TitleButton>Preguntas Frecuentes</TitleButton>
            </div>

            <div className={styles.bottom}>
              <div className={styles.faqscontainer}>
                {faqsA.map((question) => (
                  <AccordionItem
                    key={question.id}
                    active={active}
                    handleToggle={() => handleToggle(question.id)}
                    id={question.id}
                    header={question.faq}
                    content={question.ans}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
