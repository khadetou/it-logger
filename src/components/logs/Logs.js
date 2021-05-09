import React, {useState, useEffect} from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import axios from 'axios';
const Logs = () => {
    const [logs, setLogs]= useState([]);
    const [loading, setLoading]= useState(false);

    useEffect(()=>{
        getLogs();
        //eslint-disabled-next-line
    },[])

    const getLogs = async()=>{
        setLoading(true);
        const {data} = await axios.get('/logs');
        setLogs(data);
        setLoading(false);
    }

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

export default Logs;
