import { cardData } from '../DataForPage/dummyData';
import star from '../images/star.svg';
import starWhite from '../images/starWhite.svg';
import { motion } from 'framer-motion';
const CardComponent = () => {
  const starList = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className=' mt-14'>
        <div className='flex items-center flex-row flex-wrap justify-around gap-5 mx-4'>
          {cardData.map((item) => {
            return (
              <motion.div
                initial='hidden'
                whileInView={'visible'}
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 1.1 }}
                className={`${
                  item.id === '1'
                    ? ' bg-black text-white'
                    : 'bg-white text-black'
                } rounded-lg `}
              >
                <div className={`w-80 text-center  px-8 py-5 `}>
                  <h1 className=' text-center text-xl font-bold'>
                    {item.title}
                  </h1>
                  <p className='py-3'>{item.text}</p>
                </div>
                <div className='w-full h-[1px] my-3 bg-blue-gray-700'></div>
                <div>
                  <p className=' text-center'>See more</p>
                  <div className=' flex justify-center pb-2'>
                    {starList.map((sta) => {
                      return (
                        <div key={sta}>
                          {item.id === '1' ? (
                            <img src={starWhite}></img>
                          ) : (
                            <img src={star}></img>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
