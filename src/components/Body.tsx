import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

import DAOs from '../pages/Daos/index';
import BetList from '../pages/BetList';
import BetVote from '../pages/BetVote';

function Body() {
  return (
    <Routes>
      <Route
        path="betlist/*"
        element={<BetList />}
      />
      <Route
        path="betvote/*"
        element={<BetVote />}
      />
      <Route
        index
        element={<Home />}
      />
      <Route
        path="daos/*"
        element={<DAOs />}
      />
    </Routes>
  );
}

export default Body;
