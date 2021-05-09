import React, {useEffect} from 'react';
import LogItem from './LogItem';
import {connect} from 'react-redux';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import {getLogs} from '../../actions/logAction'

const Logs = ({log:{logs, loading}, getLogs}) => {


    useEffect(()=>{

        getLogs();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    if(loading || logs ===null){
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

Logs.propTypes ={
    log: PropTypes.object.isRequired,
}

const mapStateToProps = (state)=>({
    log: state.log
})

export default  connect(mapStateToProps, {getLogs})(Logs);
