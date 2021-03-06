import React, {useEffect} from 'react';
import TechItem from './TechItem';
import {connect} from 'react-redux';
import {getTechs} from '../../actions/techActions';
const TechListModal = ({tech, getTechs}) => {
   const {techs, loading}= tech
  
    
    useEffect(()=>{
        getTechs();
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

   

    return (
      <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && techs !==null && techs.map((tech, idx)=>(
                        <TechItem key={idx} tech={tech}/>
                    ))}
                </ul>
            </div>
      </div>
    )
}

const mapStateToProps = state =>({
    tech: state.tech
})
export default connect(mapStateToProps,{getTechs})(TechListModal);
