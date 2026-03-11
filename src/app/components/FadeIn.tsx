"use client";

import { createContext, useContext, ReactNode } from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion";

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px" };

type FadeInProps = HTMLMotionProps<"div"> & {
  children?: ReactNode;
};

const FadeIn = ({ children, ...props }: FadeInProps) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
          initial: "hidden",
          whileInView: "visible",
          viewport,
        })}
      {...props}
    >
      {children}
    </motion.div>
  );
};

type FadeInStaggerProps = HTMLMotionProps<"div"> & {
  faster?: boolean;
  children?: ReactNode;
};

export const FadeInStagger = ({
  faster = false,
  children,
  ...props
}: FadeInStaggerProps) => {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  );
};

export default FadeIn;