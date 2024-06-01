import logo from '../images/logo.svg';
import google from '../images/google-play.svg';
import playstore from '../images/apple-store.svg';
import {
  FooterData1,
  FooterData2,
  FooterData3,
} from '../DataForPage/dummyData';
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <div>
        <div className=' grid sm:grid-cols-2 grid-cols-4 justify-items-center sm:align-center '>
          <div className=' h-64 '>
            <img className=' h-10 w-24' src={logo} alt='' />
            <img className=' h-10 w-24' src={google} alt='' />
            <img className=' h-10 w-24' src={playstore} alt='' />
          </div>
          <div>
            <h1 className='  font-bold'>Features</h1>
            <div>
              {FooterData1.map((item) => (
                <p className=' cursor-pointer font-inter'>{item.text}</p>
              ))}
            </div>
          </div>
          <div>
            <h1 className='  font-bold'>Features</h1>
            <div>
              {FooterData2.map((item) => (
                <p className=' cursor-pointer font-inter'>{item.text}</p>
              ))}
            </div>
          </div>
          <div>
            <h1 className='  font-bold'>Features</h1>
            <div>
              {FooterData3.map((item) => (
                <p className=' cursor-pointer font-inter'>{item.text}</p>
              ))}
            </div>
          </div>
        </div>
        <div className=' h-px w-4/5 bg-gray-500 mx-auto'></div>
        <div>
          <div className=' flex justify-around py-2 '>
            <p>Axel</p>
            <p className=' font-inter text-gray-600'>
              Copyright {date} page by Minhaj Tapader
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
