import { useContext } from 'react';
import flowimg from '../images/flow-light.png';
import flowimg2 from '../images/flow-dark.png';
import { motion } from 'framer-motion';
import { ThemeBgContext } from '../Context/ThemeContext';
const FlowComponent = () => {
  const { theme } = useContext(ThemeBgContext);
  return (
    <div>
      <motion.div
        initial={'hidden'}
        whileInView={'visible'}
        transition={{ duration: 1.6 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -200 },
        }}
      >
        <img
          className='bg-center bg-no-repeat sm:hidden bg-cover h-full w-full'
          src={theme === 'light' ? flowimg2 : flowimg}
          alt=''
        />
      </motion.div>
    </div>
  );
};

export default FlowComponent;
