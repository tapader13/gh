import { useState } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';
const PopUpButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <div>
        {open && <Modal open={open} setOpen={setOpen} />}
        <div>
          <motion.button
            variants={{
              open: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
              close: {
                y: 10,
                opacity: 0,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            animate={open ? 'close' : 'open'}
            onClick={handleOpen}
            className=' rounded-full text-white fixed right-10 bottom-5 bg-blue-400 cursor-pointer z-20 px-4 py-2 hover:bg-blue-200'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#fff'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#fff'
              className='w-4 h-8'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z'
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default PopUpButton;
