import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      style={{ height: '100vh', backgroundColor: 'red' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Home
    </motion.div>
  );
};

export default Home;
