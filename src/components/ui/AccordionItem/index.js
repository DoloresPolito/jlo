import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

export const AccordionItem = ({
  handleToggle,
  active,
  header,
  id,
  content,
}) => {
  const isActive = active === id;


  const paragraphs = Array.isArray(content) ? content : [content];

  return (
    <div className={styles.card}>
      <div onClick={() => handleToggle(id)} className={styles.header}>
        <p className="subtitle"> {header}</p>

        <motion.div
          className={styles.icon}
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            key={isActive ? "minus" : "plus"}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            {isActive ? "−" : "+"}
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isActive ? "auto" : 0 }}
        transition={{ duration: 0.35 }}
        className={styles.motionContent}
      >


        <div className={styles.content}>
          {paragraphs.map((text, index) => (
            <p key={index} className="text">
              {text}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AccordionItem;
