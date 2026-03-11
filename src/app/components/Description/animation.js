export const container = {
  initial: {},
  open: {
    transition: {
      staggerChildren: 0.03,
    },
  },
  closed: {},
};

export const slideUp = {
  initial: {
    y: "120%",
    opacity: 0,
    filter: "blur(10px)",
  },
  open: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  closed: {
    y: "120%",
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};