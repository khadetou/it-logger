import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {getTechs} from '../../actions/techActions';
const TechSelectOptions = ({getTechs, tech:{techs, loading}}) => {
    useEffect(()=>{
        getTechs()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        !loading && techs !== null && techs.map((t,idx)=>(<option key={idx} value={`${t.firstName} ${t.lastName}`}>
            {t.firstName} {t.lastName}
        </option>))
    )
}

const mapStateToProps = state =>({
    tech: state.tech
})

export default connect(mapStateToProps,{getTechs})(TechSelectOptions);