import React, {useState, useEffect} from 'react';
import TechItem from './TechItem';
import axios from 'axios';
const TechListModal = () => {
    const [techs, setTechs]= useState([]);
    const [loading, setLoading]= useState(false);

    useEffect(()=>{
        getTechs();
        //eslint-disabled-next-line
    },[])

    const getTechs = async()=>{
        setLoading(true);
        const {data} = await axios.get('/techs');
        setTechs(data);
        setLoading(false);
    }

    return (
      <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && techs.map((tech, idx)=>(
                        <TechItem key={idx} tech={tech}/>
                    ))}
                </ul>
            </div>
      </div>
    )
}

export default TechListModal;
