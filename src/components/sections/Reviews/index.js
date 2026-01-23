"use client";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import styles from "./style.module.scss";
import TitleButton from "../../ui/TitleButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AnimatedDiv from "../../ui/AnimatedDiv/AnimatedDiv";

export default function Reviews({ id }) {
  const items = [
    {
      id: 1,
      name: "— RODRIGO A., GERENTE COMERCIAL",

      text: "“Re contra recomiendo a Juan. Empecé a trabajar con él en plena búsqueda laboral, medio perdida y sin saber por dónde arrancar. Con él encontré un espacio sin juicio y una forma muy clara de ordenar lo que parecía un lío. La claridad y seguridad que fui ganando tuvieron muchísimo que ver. Es cercano, genuino y realmente se preocupa.”",
    },
    {
      id: 2,
      name: "— LAURA M., EMPRENDEDORA",

      text: "“Recomiendo el trabajo de Juan. Me acompaña en un proceso de neurocoaching que me brindó claridad, herramientas concretas y un seguimiento cercano. Gracias a eso pude tomar decisiones con mayor seguridad, gestionar mejor la ansiedad y transformar objetivos en acciones reales. Una experiencia muy positiva, tanto a nivel personal como profesional.”",
    },
    {
      id: 3,
      name: "— MARIANA G., DIRECTORA DE MARKETING",

      text: "“El neurocoaching de Juan me ayudó a organizarme, jerarquizar mis planes y enfocarlos desde otro ángulo que no estaba pudiendo ver. Aprendí a disfrutar los procesos, dejar de lado la ansiedad y darle lugar a lo que naturalmente me hace bien. Lo incorporé tanto para el proyecto que trabajamos como para mi vida diaria.”",
    },
  ];

  return (
    <>
      <Section id={id}>
        <Container color="#28374a">
          <div className={styles.reviews}>
            <div className={styles.top}>
              <TitleButton>Testimonios</TitleButton>
            </div>

            <div className={styles.bottom}>
              <div className={styles.carousel}>
                
                <div className={styles.swiperWrapper}>
                  <AnimatedDiv>
                  <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    navigation={{
                      nextEl: ".next",
                      prevEl: ".prev",
                    }}
                  >
                    {items.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className={styles.itemWrapperStyles}>
                          <p className="text">{item.text}</p>
                          <h3 className="subtitle">{item.name}</h3>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  </AnimatedDiv>
                </div>

                <div className={styles.navigation}>
                  <div className={`${styles.arrow} prev`}>←</div>


 
                  <div className={`${styles.arrow} next`}>→</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
