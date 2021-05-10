import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getLogs} from '../../actions/logAction';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Logs = ({log:{logs, loading}, getLogs}) => {
    
    console.log(logs)
    useEffect(()=>{
        getLogs();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  

    if(loading){
        return <Preloader/>
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No logs to show...</p>): (logs.map((log, idx)=>(
                    <LogItem key={idx} log={log}/>
                )))}
        </ul>
    )
}

const mapStateToProps = (state)=>({
    log: state.log
})

export default connect(mapStateToProps,{getLogs})(Logs);
