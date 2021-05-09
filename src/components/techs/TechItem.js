import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";
const TechItem = ({tech}) => {
    const {firstName, lastName} = tech;
    return (
        <li className="collection-item">
            <div>
                {firstName} {lastName}
                    <a href="#!" className="secondary-content">
                 <BsFillTrashFill className="text-grey"/>
                    </a>
            </div> 
            
        </li>
    )
}

export default TechItem;
