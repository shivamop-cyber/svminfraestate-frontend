import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <motion.div
      style={{ height: '100vh', backgroundColor: 'teal' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      ContactUs
    </motion.div>
  );
};

export default ContactUs;
