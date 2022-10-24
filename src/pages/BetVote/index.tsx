import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DaoCreator from '../../components/DaoCreator';
import { GnosisDAO, TokenGovernanceDAO } from '../../components/DaoCreator/provider/types';
import DwinBtn from '../../components/DwinBtn';
import useDeployDAO from '../../hooks/useDeployDAO';

function BetVote() {
  const navigate = useNavigate();
  const [enabled, setEnabled] = useState(false);

  const buttonStyling = `flex space-x-3 font-semibold bg-thememain-100 
    text-grey-100 font-thin rounded-sm px-6 py-2 
    hover:bg-purple-500 hover:text-white w-full margin-auto text-center flex flex-row justify-around`;

  return (
    <div className="w-full flex flex-row items-start justify-center"> 
        <div className="w-1/2 justify-start mb-20 pt-5 text-grey-100font-light text-xs">
          <div className="h-96">
        <div className="flex flex-row justify-between"><div className="flex flex-row mt-1 max-w-2xl text-sm display-inline text-grey-600">Proposal for <p className="ml-2 text-sm font-thin text-thememain-100 display-inline">DWin DAO</p></div><span className="bg-thememain-100 text-grey-100 text-xs font-semibold px-4 py-1 ml-2 rounded-full">Open</span></div>
        <div className="pb-8 font-bold text-xl">
        [DW-321] Migrate from v1 to v2
        </div>
        <div className="w-full mb-6 pr-10">New Proposal to migrate from ancient V1 to a brand new refurnished V2 s the description truncate us here. Cras ipsum quam id in diam suspendisse habitasse praesent amet. Purus nullam porta nunc porttitor egestas dolor lectus ultricies.
Cras ipsum quam id in diam suspendisse habitasse praesent amet. Purus nullam porta nunc porttitor egestas dolor lectus ultricies. Cras ipsum quam id in diam suspendisse habitasse praesent amet. Purus nullam porta nunc porttitor egestas dolor lectus ultricies. Cras ipsum quam id in diam suspendisse habitasse praesent amet. Purus nullam porta nunc porttitor egestas dolor lectus ultricies. Cras ipsum quam id in diam suspendisse habitasse praesent amet. Purus nullam porta nunc porttitor egestas dolor lectus ultricies.</div>
<DwinBtn text='Go to proposal' icon="" />
<div className="mt-12">Order list</div>
        <div className="w-full flex flex-col pb-6 font-black text-md">
            <div className="border-y py-2 px-5 mt-2 w-full flex flex-row justify-between"><div>#</div><div>Amount</div><div>Bet</div></div>
            <div className="border-y py-2 px-5 mt-2 w-full flex flex-row justify-between"><div>1</div><div>20 MATIC</div><div>NO</div></div>
            <div className="border-y py-2 px-5 mt-2 w-full flex flex-row justify-between"><div>2</div><div>113 MATIC</div><div>YES</div></div>
            <div className="mt-3">
              <DwinBtn text='Go to proposal' icon="" />
            </div>
        </div>
        </div>
        </div>
        <div className="ml-10 w-1/2 pl-10 h-96">
          <div className="flex flex-row justify-between"><p>Place a bet</p><div className="flex flex-row text-xs font-thin leading-6 text-grey-600"><p>2 hours remaining</p></div></div>
          <div className="border shadow drop-shadow-lg sm:rounded-lg my-2 bg-gray-50 bg-opacity-10 p-4 h-80">
          <form>
          <div className="margin-auto flex flex-row justify-around my-5">Bet on NO
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                    ></div>
                </label>
         Bet on YES</div>
          <div className="flex flex-row justify-center w-full align-middle mt-2"><div className="flex flex-col justify-center h-24 align-middle text-2xl px-2"><p>x</p></div><div className="text-8xl inline-block mr-10">45</div></div>
          <input type="text" id="first_name" className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-thememain-100 focus:border-thememain-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 mt-3 mb-6" placeholder="Enter an amount" required />
          <button
            type='submit'
            className={buttonStyling}>
            <p>Place bet</p>
          </button>
            </form>
          </div>
          <div>Current bets</div>
        </div>
    </div>
  );
}

export default BetVote;
