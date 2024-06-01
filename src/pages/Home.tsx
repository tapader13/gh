import { useContext } from 'react';
import Navvar from '../components/Navvar';
import Hero from '../components/Hero';
import MiddleSection from '../components/MiddleSection';
import MidComponentParent from '../components/MidComponentParent';
import TabsComponent from '../components/TabsComponent';
import FlowComponent from '../components/FlowComponent';
import NewsLettter from '../components/NewsLettter';
import DemoComponent from '../components/DemoComponent';
import CardComponent from '../components/CardComponent';
import Footer from '../components/Footer';
import PopUpButton from '../components/PopUpButton';
import { ThemeBgContext } from '../Context/ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeBgContext);
  return (
    <>
      <div>
        <PopUpButton />
      </div>
      <Navvar />
      <Hero />
      <div
        className={`${
          theme === 'light' ? 'bg-heroImage2' : 'bg-heroImage'
        } bg-heroImage container h-full w-full bg-cover bg-no-repeat bg-center mx-auto pt-[17rem] sm:pt-[10rem] pb-56 rounded-xl -translate-y-26 md:rounded-none drop-shadow-2xl'
        id='news`}
      >
        <MiddleSection />
        <MidComponentParent />
        <TabsComponent />
        <FlowComponent />
        <DemoComponent />
        <CardComponent />
      </div>
      <NewsLettter />
      <Footer />
    </>
  );
};

export default Home;
