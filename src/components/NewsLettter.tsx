import { Button } from '@mui/material';
import { useState } from 'react';

const NewsLettter = () => {
  const [val, setVal] = useState<string>('');
  const handleInp = () => {
    if (val !== '') {
      //   alert(val);
      setVal('');
    } else {
      alert('give email');
    }
  };
  return (
    <div className='flex flex-row justify-center items-center justify-items-center'>
      <div className=' flex rounded-lg md:flex-col items-center justify-evenly w-[70%] md:w-[90%] gap-4  px-20 sm:px-5 bg-black text-white py-20 md:py-5 -translate-y-28'>
        <div>
          <h1 className='text-2xl pt-2 pb-2 font-bold font-inter tracking-tighter'>
            {' '}
            Sign up for our newsletter
          </h1>
          <p className='font-inter tracking-wide md:tracking-tight'>
            Join our newsletter and get news in your inbox every week!
          </p>
        </div>
        <div className=' flex flex-wrap gap-2'>
          <input
            type='text'
            placeholder='Email'
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className='mr-2 rounded-lg h-8 w-[15rem] text-black'
          />
          <Button
            onClick={handleInp}
            className=' rounded-3xl '
            variant='contained'
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLettter;
