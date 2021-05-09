import React from 'react'
import { VscAdd } from "react-icons/vsc";
import { BsFillPersonFill} from "react-icons/bs";
import { BsFillPersonPlusFill} from "react-icons/bs";
const AddBtn = () => {
    return (
        <div className='fixed-action-btn'>
            <a href="#add-log-modal" className="btn-floating btn-large blue darken-2 modal-trigger" style={{fontSize:'1.2rem'}}><VscAdd/></a>

            <ul>
                <li>
                    <a href="#tech-list-modal" className="btn-floating green modal-trigger"><BsFillPersonFill/></a>
                </li>
                <li>
                    <a href="#add-tech-modal" className="btn-floating red modal-trigger"><BsFillPersonPlusFill/></a>
                </li>
            </ul>
        </div>
    )
}

export default AddBtn;
