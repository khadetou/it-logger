import React from 'react';
import Moment from 'react-moment';
import { BsFillTrashFill } from "react-icons/bs";
const LogItem = ({log}) => {
    const {message, attention, tech, id, date}= log;

    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${attention? 'red-text': 'blue-text'}`}>{message}</a>
                <br />
                <span className="grey-text">
                  <span className="black-text">ID #{id} </span>Last updated by {' '}<span className="black-text">{tech}</span> on <Moment format="MMMM Do YYYY hh:mm:ss a">{date}</Moment>
                </span>
                <a href="#!" className="secondary-content grey-text"><BsFillTrashFill/></a>
            </div>
        </li>
    )
}
// LogItem.propTypes ={
//     logs: PropTypes.object.isRequired,
// }

export default LogItem;
