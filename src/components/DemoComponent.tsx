import { useContext } from 'react';
import apple from '../images/apple-store.svg';
import google from '../images/google-play.svg';
import { ThemeBgContext } from '../Context/ThemeContext';
const DemoComponent = () => {
  const { theme } = useContext(ThemeBgContext);

  return (
    <div>
      <div
        id='demo'
        className={`flex flex-row sm:px-5 justify-center ${
          theme === 'light' ? 'text-white' : 'text-black'
        }`}
      >
        <div>
          <h1 className=' text-center text-4xl font-bold'>Request a demo</h1>
          <p className=' py-3 tracking-wide'>
            Explore all the nice stuff that Axel is providing and much more...
          </p>
          <div className=' flex flex-row justify-between'>
            <img className=' h-14  w-24 cursor-pointer' src={apple} alt='' />
            <img className=' h-14  w-24 cursor-pointer' src={google} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoComponent;
