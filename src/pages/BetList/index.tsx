import { useNavigate } from 'react-router-dom';
import DaoCreator from '../../components/DaoCreator';
import { GnosisDAO, TokenGovernanceDAO } from '../../components/DaoCreator/provider/types';
import useDeployDAO from '../../hooks/useDeployDAO';

function BetList() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center"> 
    <img className="w-80 mb-2" src="logowhite.svg" />
        <div className="pb-4 mb-20 text-grey-100 font-extralight text-xl font-family: sans">
        Gamble for doing good 
        </div>
        <div className="w-full flex justify-self-start justify-items-start justify-start pb-3 text-grey-100 font-black text-md">
            <p>Latest bets</p>
        </div>
        <div className="w-full">
            <div className="overflow-hidden bg-custom-100 border-2 border-gray-50 shadow drop-shadow-lg sm:rounded-lg w-full mb-3">
      <div className="px-4 py-5 sm:px-6">
      <div className="flex flex-row justify-between mb-1 text-sm text-grey-100 display-inline"><div className="flex flex-row" >Proposal for <p className="ml-2 text-sm font-thin text-thememain-100 display-inline">DWin DAO</p></div><div className="flex flex-row text-xs font-thin leading-6 text-grey-400"><span className="bg-thememain-100 text-grey-100 text-xs font-semibold px-4 py-1 ml-2 rounded-full">Open</span></div></div>
        <div className="flex flex-row justify-between"><div className="text-lg font-bold leading-6 text-grey-100">[DW-321] Migrate from v1 to v2 </div><div className="flex flex-row text-xs font-thin leading-6 text-grey-600"><p>2 hours remaining</p></div></div>
      </div>
    </div>
    <div className="overflow-hidden bg-custom-100 border-2 border-gray-50 shadow drop-shadow-lg sm:rounded-lg w-full mb-3">
      <div className="px-4 py-5 sm:px-6">
      <div className="flex flex-row justify-between mb-1 text-sm text-grey-100 display-inline"><div className="flex flex-row" >Proposal for <p className="ml-2 text-sm font-thin text-thememain-100 display-inline">DWin DAO</p></div><div className="flex flex-row text-xs font-thin leading-6 text-grey-400"><span className="bg-thememain-100 text-grey-100 text-xs font-semibold px-4 py-1 ml-2 rounded-full">Open</span></div></div>
        <div className="flex flex-row justify-between"><div className="text-lg font-bold leading-6 text-grey-100">[DW-321] Migrate from v1 to v2 </div><div className="flex flex-row text-xs font-thin leading-6 text-grey-600"><p>2 hours remaining</p></div></div>
      </div>
    </div><div className="overflow-hidden bg-custom-100 border-2 border-gray-50 shadow drop-shadow-lg sm:rounded-lg w-full mb-3">
      <div className="px-4 py-5 sm:px-6">
      <div className="flex flex-row justify-between mb-1 text-sm text-grey-100 display-inline"><div className="flex flex-row" >Proposal for <p className="ml-2 text-sm font-thin text-thememain-100 display-inline">DWin DAO</p></div><div className="flex flex-row text-xs font-thin leading-6 text-grey-400"><span className="bg-thememain-100 text-grey-100 text-xs font-semibold px-4 py-1 ml-2 rounded-full">Open</span></div></div>
        <div className="flex flex-row justify-between"><div className="text-lg font-bold leading-6 text-grey-100">[DW-321] Migrate from v1 to v2 </div><div className="flex flex-row text-xs font-thin leading-6 text-grey-600"><p>2 hours remaining</p></div></div>
      </div>
    </div>
        </div>
    </div>
  );
}

export default BetList;
