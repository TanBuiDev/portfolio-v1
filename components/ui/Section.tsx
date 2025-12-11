import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
};