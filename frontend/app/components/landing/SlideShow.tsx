'use client'

import { AnimatePresence, motion } from "framer-motion";

export const Slideshow = ({ img }: { img: string }) => (
    <AnimatePresence>
      <motion.img
        key={img}
        src={img}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1, scale: 0.5 }}
        exit={{ x: -300, opacity: 0 }}
        
      />
    </AnimatePresence>
  )
