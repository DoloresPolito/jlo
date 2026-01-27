import { motion, AnimatePresence } from "framer-motion";
import styles from "./style.module.scss";

export default function BenefitCard({ data, isActive, onOpen, isMobile }) {
  return (
    <motion.div
      layout={!isMobile}
      className={`${styles.card} ${styles[data.color]}`}
      animate={
        isMobile
          ? {}
          : {
              flexGrow: isActive ? 1.6 : 1,
              flexBasis: isMobile ? "100%" : "0%",
            }
      }
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={styles.header}>
        <h3>{data.title}</h3>
        <h4>{data.subtitle}</h4>
      </div>

      <AnimatePresence>
        {(isActive || isMobile) && (
          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={isMobile ? false : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className={styles.text}
          >
            {data.text}
          </motion.p>
        )}
      </AnimatePresence>

      {!isActive && !isMobile && (
        <button className={styles.openButton} onClick={onOpen}>
          →
        </button>
      )}
    </motion.div>
  );
}
