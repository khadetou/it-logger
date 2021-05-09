import {Fragment, useEffect} from 'react';
import Logs from './components/logs/Logs';
import AddLogModel from './components/logs/AddLogModal';
import EditLogModel from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize';
import SearchBar from './components/layout/SearchBar';
import AddBtn from './components/layout/AddBtn';
const App = ()=> {

 useEffect(()=>{
   //Init materialize JS
  M.AutoInit();
 })

  return (
    <Fragment>
       <SearchBar/>
       <div className="container">
         <AddBtn/>
         <AddLogModel/>
         <EditLogModel/>
         <AddTechModal/>
         <TechListModal/>
        <Logs/>
       </div>
       
    </Fragment>
  );
}

export default App;
