import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      style={{ height: '100vh', backgroundColor: 'green' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      About
    </motion.div>
  );
};

export default About;
