"use client";

import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, container } from "./animation";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Body");
  const phrase = t("m2");

  const description = useRef(null);
  const isInView = useInView(description, { once: false, margin: "-100px" });

  return (
    <section className={styles.section}>
      <div ref={description} className={styles.description}>
        <div className={styles.quoteMark}>"</div>
        <motion.div
          variants={container}
          initial="initial"
          animate={isInView ? "open" : "closed"}
          className={styles.body}
        >
          <p className={styles.text}>
            {phrase.split(" ").map((word, index) => (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  className={styles.word}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
}