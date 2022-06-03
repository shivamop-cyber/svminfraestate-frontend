import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <motion.div
      style={{ height: '100vh', backgroundColor: 'yellow' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Blog
    </motion.div>
  );
};

export default Blog;
