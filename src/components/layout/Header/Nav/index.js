import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide, slide } from "../animation";
import Link from "next/link";

export default function Nav({}) {
  const pathname = usePathname();
//   const [selectedIndicator, setSelectedIndicator] = useState(pathname);

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
          <div
            // onMouseLeave={() => {
            //   setSelectedIndicator(pathname);
            // }}
            className={styles.nav}
          >
            <motion.div
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.link}
            >
              <Link href="/">
                <p className={` ${styles.text}`}>
                  hola
                </p>
              </Link>
            </motion.div>

            <motion.div
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.link}
            >
              <Link href="/dr">
                <p className={`${styles.text}`}>
                  chau
                </p>
              </Link>
            </motion.div>
            <motion.div
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.link}
            >
              <Link href="/proceso">
                <p className={`${styles.text}`}>
                  hola
                </p>
              </Link>
            </motion.div>
            <motion.div
              variants={slide}
              animate="enter"
              exit="exit"
              initial="initial"
              className={styles.link}
            >
              <Link href="/international">
                <p className={` ${styles.text}`}>
                  chau
                </p>
              </Link>
            </motion.div>
            
          </div>
        </div>
      </motion.div>
    </>
  );
}
