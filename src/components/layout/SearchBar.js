import React from 'react';
import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
const SearchBar = () => {
    return (

    <nav className="deep-purple lighten-1">
      <div className="nav-wrapper">
        <form>
            <div className="input-field">
                <input id="search" type="search"/>
                <label className="label-icon white-text" htmlFor="search"><BsSearch/></label>
                <i className="material-icons"><AiFillCloseCircle/></i>
            </div>
        </form>
      </div>
    </nav>

    )
}

export default SearchBar;
