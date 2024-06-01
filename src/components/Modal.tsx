import { Dispatch, SetStateAction, useState } from 'react';
import { motion } from 'framer-motion';
import Tooltip from '@mui/material/Tooltip';
type ModalType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
const Modal = ({ open, setOpen }: ModalType) => {
  const [message, setMessage] = useState('');

  const handleForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
    setMessage('');
    setOpen(false);
  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          height: open ? '220px' : '0px',
          opacity: 1,
          x: open ? -30 : 0,
          y: open ? -30 : 0,
        }}
        transition={{ duration: 1.1, type: 'tween', ease: 'easeInOut' }}
        className='fixed right-10 bottom-5 bg-white rounded-2xl z-20 px-4 py-2 border border-blue-400'
      >
        <div>
          <h1 className=' cursor-pointer text-blue-500 text-4xl tracking-tight font-inter mt-3'>
            {' '}
            Hello There 🖐🏻
          </h1>
          <p className='text-blue-500 font-inter t tracking-tight text-lg'>
            Welcome to our website.
          </p>
          <span className='text-blue-500 font-inter t tracking-tight font-medium '>
            {' '}
            Ask us anything.
          </span>
        </div>
        <div>
          <form action='' onSubmit={handleForm}>
            <input
              className=' outline-none my-1'
              placeholder='Enter something'
              type='text'
              name=''
              id=''
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </form>
        </div>
        <Tooltip title='Close' placement='left'>
          <div
            onClick={() => setOpen(false)}
            className=' top-1 right-1 absolute cursor-pointer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#fff'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#000'
              className='w-8 h-8'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
        </Tooltip>
      </motion.div>
    </div>
  );
};

export default Modal;
