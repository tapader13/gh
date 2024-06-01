import { Button, Switch } from '@mui/material';
import { useContext } from 'react';
import image1 from '../images/headerImage.png';
import { motion } from 'framer-motion';
import { ThemeBgContext } from '../Context/ThemeContext';
const Hero = () => {
  const { theme, handleTheme } = useContext(ThemeBgContext);

  return (
    <div>
      <div
        id='news'
        className={`mx-auto pt-16 ${
          theme === 'light' ? ' bg-black' : 'bg-white'
        }`}
      >
        <div className='sm:grid-cols-1    grid grid-cols-2 justify-items-center items-center '>
          <div className=' w-4/5 pl-24 sm:pl-2  md:pl-2'>
            <Switch
              defaultChecked={theme === 'dark' ? true : false}
              onClick={handleTheme}
            />
            <span
              className={`${theme === 'light' ? 'text-white' : 'text-black'}`}
            >
              {theme === 'light' ? 'Switch to Light' : 'Switch to Dark'}
            </span>
            <h1
              className={`text-3xl sm:text-2xl ${
                theme === 'light' ? 'text-white' : 'text-black'
              } tracking-wide font-inter font-semibold`}
            >
              AxeL Brand new {'    '}
              <span className=' font-petit font-bold text-5xl sm:text-3xl'>
                {' '}
                Furniture
              </span>{' '}
              Mobile App
            </h1>
            <div className=' mt-4'>
              <p
                className={`w-[90%] normal-case font-inter tracking-wide font-medium  ${
                  theme === 'light' ? 'text-white' : 'text-black'
                } text-xl`}
              >
                {' '}
                Giving your home a propper makeover never was this easy. Modern
                and stylish furniture for decent prices. Take a look what we
                offer with simple button click.
              </p>
            </div>
            <div className='mt-4'>
              <Button className=' rounded-3xl' variant='contained'>
                Start Now
              </Button>
            </div>
          </div>
          <div>
            <div>
              <h1
                className={`text-5xl md:text-3xl  sm:mt-4 tracking-tight font-inter font-semibold text-center mb-5 ${
                  theme === 'light' ? 'text-white' : 'text-black'
                }`}
              >
                Modern Design
              </h1>
            </div>
            <div>
              <motion.img
                animate={{ y: [-10, 0, -10] }}
                transition={{
                  ease: 'easeInOut',
                  duration: 1.4,
                  repeat: Infinity,
                }}
                className=' w-full h-[565px] sm:h-[465px] bg-no-repeat bg-center rounded-xl'
                src={image1}
                alt='headerimagenotfound'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
