import { useContext, useEffect, useState } from 'react';
import MidButton from './MidButton';
import { sliderData } from '../DataForPage/dummyData';
import MidChild from './MidChild';
import { motion } from 'framer-motion';
import { ThemeBgContext } from '../Context/ThemeContext';

const MiddleSection = () => {
  const { theme } = useContext(ThemeBgContext);
  const buttons: buttonType = [
    {
      id: '1',
      name: 'Room1',
    },
    {
      id: '2',
      name: 'Room2',
    },
    {
      id: '3',
      name: 'Room3',
    },
  ];
  const [click, setClick] = useState(false);
  const [data, setData] = useState<sliderDataType[]>([]);
  const [select, setSelect] = useState('1');
  useEffect(() => {
    const putData = (data: sliderDataType[]) => {
      setData(data.filter((item) => item.id === '1'));
    };
    putData(sliderData);
  }, []);
  const filterData = (id: string) => {
    const result = sliderData.filter((dat) => dat.id === id);
    setData(result);
    setSelect(id);
    setClick(true);
  };
  return (
    <div>
      <div
        className={`grid grid-cols-2 sm:grid-cols-1 sm:w-full  justify-items-center  items-center  ${
          theme === 'light' ? 'text-white ' : 'text-black '
        }`}
      >
        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          transition={{ duration: 1.5 }}
          //   viewport={{ once: true }} aitar mane sudu akbar kaj korbe
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className=' pl-[0.5rem]  w-4/5 sm:w-full'
        >
          <h1 className='  font-black w-[244px] sm:w-[300px] font-inter sm:px-4 text-4xl sm:text-3xl'>
            {' '}
            Check out some of the news
          </h1>

          <MidButton
            buttons={buttons}
            filterData={filterData}
            select={select}
          />
        </motion.div>
        <div className=' mx-auto w-8/12 md:w-10/12 sm:w-full  sm:mx-1 relative'>
          <MidChild data={data} click={click} />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
