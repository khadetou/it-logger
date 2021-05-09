import React from 'react';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import { BsFillTrashFill } from "react-icons/bs";
import {deleteLogs, setCurrent} from '../../actions/logAction';
import M from 'materialize-css/dist/js/materialize';
const LogItem = ({log, deleteLogs, setCurrent}) => {

    const {message, attention, tech, id, date} = log;
    
    const onDelete= ()=>{
        deleteLogs(id);
        M.toast({html:'Log deleted'});
    }

    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${attention? 'red-text': 'blue-text'}`} onClick={()=>setCurrent(log)}>{message}</a>
                <br />
                <span className="grey-text">
                  <span className="black-text">ID #{id} </span>Last updated by {' '}<span className="black-text">{tech}</span> on <Moment format="MMMM Do YYYY hh:mm:ss a">{date}</Moment>
                </span>
                <a href="#!" onClick={onDelete} className="secondary-content grey-text"><BsFillTrashFill/></a>
            </div>
        </li>
    )
}
// LogItem.propTypes ={
//     logs: PropTypes.object.isRequired,
// }

export default connect(null, {deleteLogs, setCurrent})(LogItem);
