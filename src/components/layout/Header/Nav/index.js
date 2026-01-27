import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { menuSlide, slide } from "../animation";
import { Link } from "react-scroll";

export default function Nav({ closeMenu }) {
  const navItems = [
    { label: "Neurocoaching", href: "benefits" },
    { label: "Sobre Mi", href: "about" },
    { label: "Cómo trabajo", href: "work" },
    { label: "Preguntas Frecuentes", href: "faqs" },
    { label: "Contacto", href: "contact" },
  ];

  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.menu}
      >
        <div className={styles.body}>
          <div className={styles.nav}>
            {navItems.map((item, i) => {
              return (
                <motion.div
                  variants={slide}
                  animate="enter"
                  exit="exit"
                  initial="initial"
                  key={i}
                >
                  <Link
                    to={item.href}
                    // smooth="easeInOutCubic"
                    // duration={1200}

                    smooth="easeInOutQuart"
                    duration={900}
                    offset={-5}
                    delay={0}
                    onClick={closeMenu}
                  >
                    <h2 className="h2">{item.label}</h2>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className={styles.contact}>
            <a href="mailto:jloneurocoach@gmail.com">JLONEUROCOACH@gmail.com</a>
            <a
              href="https://www.linkedin.com/in/lopezolacireguijuan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ln/lopezolacireguijuan
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
