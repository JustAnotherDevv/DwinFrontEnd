import { useNavigate } from 'react-router-dom';
import DaoCreator from '../../components/DaoCreator';
import { GnosisDAO, TokenGovernanceDAO } from '../../components/DaoCreator/provider/types';
import useDeployDAO from '../../hooks/useDeployDAO';

function BetList() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center"> 
        <div className="pb-4 text-black font-bold text-xl">
        Gamble for doing good 
        </div>
        <div className="mb-20 text-gray-900 font-light">
        <div> Here’s a subtitle thing to explain what’s going on </div>
        </div>
        <div className="w-full flex justify-self-start justify-items-start justify-start pb-6 text-gray-900 font-black text-md">
            <p>Latest bets</p>
        </div>
        <div className="w-full">
            <div className="overflow-hidden bg-white shadow drop-shadow-lg sm:rounded-lg w-full">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex flex-row justify-between"><h3 className="text-lg font-bold leading-6 text-gray-900">[DW-321] Migrate from v1 to v2 </h3> <div className="flex flex-row text-xs font-thin leading-6 text-gray-900"><p>2 hours remaining</p><span className="bg-green-500 text-white text-xs font-semibold mr-2 px-2.5 pt-1 ml-2 rounded-full">Open</span></div></div>
        <div className="flex flex-row mt-1 max-w-2xl text-sm text-gray-500 display-inline">Proposal for <p className="ml-2 text-sm font-thin text-blue-300 display-inline">DWin DAO</p></div>
      </div>
    </div>
        </div>
    </div>
  );
}

export default BetList;
