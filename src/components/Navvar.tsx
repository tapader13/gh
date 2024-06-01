import { useContext, useEffect, useState } from 'react';
import { navbarData } from '../DataForPage/dummyData';
import { Link } from 'react-scroll';
import { ThemeBgContext } from '../Context/ThemeContext';
import logo from '../images/logo.svg';
import { motion } from 'framer-motion';
const Navvar = () => {
  const { theme } = useContext(ThemeBgContext);
  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div>
      {/*  for mobile screen */}
      <div>
        <div
          className={`pt-5 px-3 md:block hidden ${
            theme === 'light' ? 'text-white bg-black' : 'text-black'
          }`}
        >
          <div className=' flex align-middle justify-between'>
            <div>
              <img className={` h-8 cursor-pointer `} src={logo} alt='' />
            </div>

            <div>
              {open ? (
                <svg
                  className='h-8 cursor-pointer '
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'
                  onClick={handleMenu}
                >
                  <path
                    d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'
                    fill={theme === 'light' ? '#ffffff' : '#21130d'}
                  />
                </svg>
              ) : (
                <svg
                  className='h-8 cursor-pointer'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                  onClick={handleMenu}
                >
                  <path
                    d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'
                    fill={theme === 'light' ? '#ffffff' : '#21130d'}
                  />
                </svg>
              )}
            </div>
          </div>
          <div>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, type: 'spring' }}
                className='flex flex-col gap-3 items-center w-full'
              >
                {navbarData.map((data) => {
                  return (
                    <div key={data.id}>
                      <Link
                        to={data.link}
                        onClick={() => setOpen(false)}
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                        spyThrottle={500}
                        className=' tracking-tight px-2 py-1 cursor-pointer hover:text-blue-400'
                      >
                        {data.name}
                      </Link>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <div
        className={
          scroll
            ? `h-16 fixed w-full md:hidden ${
                theme === 'light' ? 'bg-black text-white' : 'bg-gray-400'
              } rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30   z-20`
            : `${
                theme === 'light' ? 'bg-black text-white' : 'bg-gray-400'
              } bg-transparent md:hidden h-16 w-full fixed transition ease-in-out duration-500 flex items-center z-20`
        }
      >
        <div className=' grid grid-cols-2 justify-items-center items-center content-center w-full'>
          <div>
            <img className='h-10' src='/src/images/logo.svg' alt='' />
          </div>

          <div className='flex flex-row items-center w-full'>
            {navbarData.map((data) => {
              return (
                <div key={data.id}>
                  <Link
                    to={data.link}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    className=' tracking-tight px-2 py-1 cursor-pointer hover:text-blue-400'
                  >
                    {data.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navvar;
