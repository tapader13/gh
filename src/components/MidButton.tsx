type Props = {
  buttons: { id: string; name: string }[];
  filterData: (id: string) => void;
  select: string;
};
const MidButton = ({ buttons, filterData, select }: Props) => {
  return (
    <div>
      <div className=' flex flex-row pt-4 sm:px-4'>
        {buttons.map((but) => {
          return (
            <button
              onClick={() => filterData(but.id)}
              className={`rounded-[5px]  text-white sm:cursor-pointer  py-2 px-3 mr-3 ${
                select === but.id ? 'bg-blue-900' : 'bg-blue-700'
              }`}
              key={but.id}
            >
              {but.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MidButton;
