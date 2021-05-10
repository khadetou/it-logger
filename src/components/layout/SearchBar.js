import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {searchLogs} from '../../actions/logAction';
import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
const SearchBar = () => {

  const text = useRef('');

  const onChange =(e)=>{
    searchLogs(text.current.value)
  }

    return (

    <nav className="deep-purple lighten-1">
      <div className="nav-wrapper">
        <form>
            <div className="input-field">
                <input id="search" type="search" placeholder ="Search..." ref={text} onChange={onChange}/>
                <label className="label-icon white-text" htmlFor="search"><BsSearch/></label>
                <i className="material-icons"><AiFillCloseCircle/></i>
            </div>
        </form>
      </div>
    </nav>

    )
}

export default connect(null, {searchLogs})(SearchBar);
