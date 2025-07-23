// import Home from './crud_operation/Home';
// import Create from "./crud_operation/Create";
// import Edit from "./crud_operation/Edit";
// import ConfigManager from "./configuration/Front";
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import FrontPage from "./mockapi/FrontPage";
import Display from "./project/Display";
import CitrusFruit from "./project/CitrusFruit";
import Berries from "./project/Berries";
import Stonefruit from "./project/Stonefruit";
import TrophicalFruit from "./project/TrophicalFruit";
import Melons from "./project/Melons";
import PomeFruit from "./project/PomeFruit";
import ExoticFruit from "./project/ExoticFruit";
import DriedFruit from "./project/DriedFruit";
import SeasonalFruit from "./project/SeasonalFruit";
import FruitOrganic from "./project/FruitOrganic";
import RareFruit from "./project/RareFruit";
import BudgetFruit from "./project/BudgetFruit";
import LuxuryFruit from "./project/LuxuryFruit";
import JuiceFruit from "./project/JuiceFruit";
import KidsFruit from "./project/KidsFruit";
import BestFruit from "./project/BestFruit";
import BillingPage from "./project/BillingPage";
import AddtoCart from "./project/AddtoCart";

function App() {
  return (
    <div>
      {/* <FrontPage />   */}

    
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      </BrowserRouter> */}
      {/* <ConfigManager /> */}
        <BrowserRouter>
          <Routes>
          <Route index element={<Display />} />
            <Route path="/citrusfruit" element={<CitrusFruit />} />
            <Route path="/berries" element={<Berries/>}/>
            <Route path="/stonefruit" element={<Stonefruit/>}/>
            <Route path="/trophicalfruit" element={<TrophicalFruit/>}/>
            <Route path="/melons" element={<Melons/>}/>
            <Route path="/pomefruit" element={<PomeFruit/>}/>
            <Route path="/exoticfruit" element={<ExoticFruit/>}/>
            <Route path="/driedfruit" element={<DriedFruit/>}/>
            <Route path="/seasonalfruit" element={<SeasonalFruit/>}/>
            <Route path="/organicfruit" element={<FruitOrganic/>}/>
            <Route path="/rarefruit" element={<RareFruit/>}/>
            <Route path="/budgetfruit" element={<BudgetFruit/>}/>
            <Route path="/luxuryfruit" element={<LuxuryFruit/>}/>
            <Route path="/juicefruit" element={<JuiceFruit/>}/>
            <Route path="/kidsfruit" element={<KidsFruit/>}/>
            <Route path="/bestsell" element={<BestFruit/>}/>
            <Route path="/bill" element={<BillingPage/>}/>
            <Route path="/cart" element={<AddtoCart />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
