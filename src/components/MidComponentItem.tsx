import { Button } from '@mui/material';
import { room } from '../DataForPage/dummyData';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeBgContext } from '../Context/ThemeContext';
type MidCompType = {
  title: string;
  text?: string;
  img: string;
  reverse: boolean;
};
const MidComponentItem = ({ title, text, img, reverse }: MidCompType) => {
  const { theme } = useContext(ThemeBgContext);

  return (
    <div>
      <div
        id='company'
        className={`${theme === 'light' ? 'text-white' : 'text-black'}`}
      >
        {reverse ? (
          <div>
            <motion.div
              initial={'hidden'}
              whileInView={'visible'}
              transition={{ duration: 1.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className=' mt-20 grid sm:grid-cols-1 sm:w-full grid-cols-2 justify-items-center items-center'
            >
              <div className='pl-[0.5rem]  w-4/5'>
                <h1 className='font-black font-inter text-3xl '>{title}</h1>
                <p className='py-1 font-inter text-xl tracking-wide'>{text}</p>
                <Button className=' rounded-3xl' variant='contained'>
                  Start Now
                </Button>
              </div>
              <div>
                <img
                  className='h-[675px] sm:h-[575px] sm:pt-28 pt-32 hover:rotate-6 duration-1000 cursor-pointer'
                  src={img}
                  alt=''
                />
              </div>
            </motion.div>
          </div>
        ) : (
          <div>
            <motion.div
              initial={'hidden'}
              whileInView={'visible'}
              transition={{ duration: 1.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              id='room'
              className=' mt-10 sm:grid-cols-1  sm:w-full grid grid-cols-2 justify-items-center items-center'
            >
              <div className='pl-[0.5rem]  w-4/5 '>
                <img
                  className='h-[675px] pt-32 hover:-rotate-6 duration-1000 cursor-pointer'
                  src={img}
                  alt=''
                />
              </div>
              <div className='  w-4/5 sm:mt-[3.25rem]'>
                <h1 className='font-black font-inter text-3xl '>{title}</h1>
                <div>
                  {room.map((r) => {
                    return (
                      <div className=' flex py-1 flex-row items-center'>
                        <img className=' h-14 w-14' src={r.img} alt='' />
                        <p className='pl-2 ont-inter text-xl tracking-tight'>
                          {r.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
                {/* <p className='py-1 font-inter text-xl tracking-wide'>{text}</p> */}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MidComponentItem;
