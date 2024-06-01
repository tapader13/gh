import Box from '@mui/material/Box';
import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { tabsData } from '../DataForPage/dummyData';
import { motion } from 'framer-motion';
import { ThemeBgContext } from '../Context/ThemeContext';
const TabsComponent = () => {
  const [value, setValue] = React.useState('bedroom');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(event);
  };
  const { theme } = React.useContext(ThemeBgContext);

  return (
    <div>
      <motion.div
        initial={'hidden'}
        whileInView={'visible'}
        transition={{ duration: 1.2 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        id='features'
        className={`mt-10 sm:mt-12 sm:grid-cols-1 sm:w-full grid grid-cols-2 justify-items-center items-center ${
          theme === 'light' ? 'text-white' : 'text-black'
        }`}
      >
        <div className='pl-[0.5rem] w-4/5'>
          <div>
            <h1 className=' font-inter font-bold text-3xl'>Features</h1>
            <p className='py-1 ont-inter text-xl tracking-tight'>
              AxeL offers many great features. You can create your own room,
              request a service, buy modern looking furniture, sell a furniture
              and so much more. Take a sneak peek at each of them.
            </p>
          </div>
          <div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <TabList
                  onChange={handleChange}
                  aria-label='lab API tabs example'
                >
                  {tabsData.map((item) => (
                    <Tab
                      key={item.value}
                      label={item.label}
                      value={item.value}
                      sx={{
                        color:
                          theme === 'light'
                            ? ' rgba(251, 242, 242, 0.6)'
                            : 'rgba(0, 0, 0, 0.6)',
                      }}
                    />
                  ))}
                </TabList>
                {tabsData.map((item) => (
                  <TabPanel key={item.value} value={item.value}>
                    {item.desc}{' '}
                    <span className='text-blue-700 cursor-pointer'>
                      {item.linkText}
                    </span>
                  </TabPanel>
                ))}
              </TabContext>
            </Box>
          </div>
        </div>
        <div>
          <TabContext value={value}>
            {tabsData.map((item) => (
              <TabPanel key={item.value} value={item.value}>
                <motion.img
                  animate={{ y: [-10, 0, -10] }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 1.1,
                    repeat: Infinity,
                  }}
                  className='h-[650px] sm:h-[500px]'
                  src={item.img}
                  alt=''
                />
              </TabPanel>
            ))}
          </TabContext>
        </div>
      </motion.div>
    </div>
  );
};
export default TabsComponent;
