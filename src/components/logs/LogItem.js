import React from 'react';
import {connect} from 'react-redux';
import {setCurrent, deleteLogs} from '../../actions/logAction';
import Moment from 'react-moment';
import { BsFillTrashFill } from "react-icons/bs";
const LogItem = ({log, setCurrent, deleteLogs}) => {
    const {message, attention, tech, id, date}= log;
    const onDelete = ()=>{
        deleteLogs(id);
    }
    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${attention? 'red-text': 'blue-text'}`} onClick={()=>setCurrent(log)}>{message}</a>
                <br />
                <span className="grey-text">
                  <span className="black-text">ID #{id} </span>Last updated by {' '}<span className="black-text">{tech}</span> on <Moment format="MMMM Do YYYY hh:mm:ss a">{date}</Moment>
                </span>
                <a href="#!" className="secondary-content grey-text" onClick={onDelete}><BsFillTrashFill/></a>
            </div>
        </li>
    )
}
// LogItem.propTypes ={
//     logs: PropTypes.object.isRequired,
// }

export default connect(null, {setCurrent,deleteLogs})(LogItem);
