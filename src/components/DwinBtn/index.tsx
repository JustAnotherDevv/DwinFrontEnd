import { FaSearchengin } from 'react-icons/fa';

function DwinBtn({
    text,
    icon
}: {
    text: string;
    icon: string;
    }) {
    const buttonStyling = `flex space-x-3 font-semibold 
    text-grey-100 font-thin rounded-sm px-6 py-2 
    hover:bg-purple-500 hover:text-white mx-1 border rounded m-1`;
  
    return (
        <div className=''>
          <button
            type='submit'
            className={buttonStyling}>
            <p>{text}</p>
          </button>
        </div>
    );
}

export default DwinBtn;
