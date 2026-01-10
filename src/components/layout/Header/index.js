"use client";
import styles from "./style.module.scss";
import { useState, useEffect} from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";




export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 800;
    };

    handleResize(); // Ejecutar una vez al montar
    setHydrated(true); // Marcar que ya se actualizó la pantalla

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  // Si aún no se determinó el tamaño, no renderizar nada
  if (!hydrated) return null;



  

  return (

      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <h1 className="h1">JLO</h1>
          </div>

          <div className={styles.headerButtonContainer}>
            <button
              onClick={() => setIsActive(!isActive)}
              className={`${styles.button}`}
            >
              <div
                className={`${styles.burger} ${
                  isActive ? styles.burgerActive : ""
                }`}
              ></div>
            </button>
          </div>

          <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        </div>
      </div>
 
  );
}
