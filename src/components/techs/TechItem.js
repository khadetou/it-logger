import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import {connect} from 'react-redux';
import {deleteTechs} from '../../actions/techActions';
const TechItem = ({tech, deleteTechs}) => {
    const {firstName, lastName, id} = tech;
   console.log(tech)
    const onDelete = ()=>{
        deleteTechs(id)
    }
    return (
        <li className="collection-item">
            <div>
                {firstName} {lastName}
                    <a href="#!" className="secondary-content">
                 <BsFillTrashFill className="text-grey" onClick={onDelete}/>
                    </a>
            </div> 
            
        </li>
    )
}

export default connect(null,{deleteTechs})(TechItem);
