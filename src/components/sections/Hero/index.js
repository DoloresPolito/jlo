"use client";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import styles from "./style.module.scss";
import { slideUp2 } from "./animation";
import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import background from "../../../../public/images/hero.png";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ id }) {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // PIN DEL HERO
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: false,
    });

    // ZOOM DE LA IMAGEN
    gsap.to(imageRef.current, {
      scale: 1.2,
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <Section id={id}>
      <div ref={heroRef} className={styles.hero}>
        <motion.div
          className={styles.home}
          variants={slideUp2}
          initial="initial"
          animate="enter"
        >
          {/* TEXTO (NO SE MUEVE) */}
          <Container>
            <div className={styles.content}>
              <p className="text">
                Pensado para quienes están listos para crecer
              </p>
              <h2 className="h2">
                Un proceso de transformación guiado por ciencia, conciencia y
                acción.
              </h2>
            </div>
          </Container>
          {/* IMAGEN (SE HACE ZOOM) */}
          <div className={styles.imageContainer}>
            <div className={styles.image} ref={imageRef}>
              <Image
                src={background}
                alt="Hero"
                fill
                priority
                style={{
                  objectFit: "cover",
                  objectPosition: "70% center",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
