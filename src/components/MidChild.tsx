import { motion } from 'framer-motion';
type Props = {
  data: sliderDataType[];
  click: boolean;
};
const MidChild = ({ data, click }: Props) => {
  return (
    <div>
      <div>
        {data.map((dat) => {
          return (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ y: click ? 10 : 0, x: click ? 10 : 0, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', duration: 1.5 }}
              key={dat.id}
              className=' flex flex-col relative  '
            >
              <div className=' sm:pl-2'>
                <h1 className='font-black font-inter text-3xl py-1'>
                  {dat.title}
                </h1>
              </div>
              <div className=' flex flex-row justify-between items-center w-full'>
                <div>
                  <p className='text-3xl  font-normal font-inter no-underline align-middle tracking-tight'>
                    {dat.text}
                  </p>
                </div>
                <div className=' absolute right-0 -z-10'>
                  <motion.img
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: click ? '525px' : '525px', opacity: 1 }}
                    transition={{ type: 'tween', duration: 3 }}
                    className='w-[80%] h-[80%]'
                    src={dat.img}
                    alt=''
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MidChild;
