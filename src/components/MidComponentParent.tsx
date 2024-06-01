import MidComponentItem from './MidComponentItem';
import midphone1 from '../images/MidComponentPhone.png';
import midphone2 from '../images/midPhone2.png';

const MidComponentParent = () => {
  return (
    <div>
      <div>
        <MidComponentItem
          title='Dive into the Future'
          text='In a world where people constantly have phone in their hands, 
        the need for online opportunities is growing. We have a solution - fully digital access to 
        all information and services related to 
        the interior and design itself. Everything for a carefree stay in the palm of a hand.'
          img={midphone1}
          reverse={true}
        />
        <MidComponentItem
          title='Search by room'
          img={midphone2}
          reverse={false}
        />
      </div>
    </div>
  );
};

export default MidComponentParent;
