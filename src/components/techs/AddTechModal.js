import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTechs} from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize';

const AddTechModal = ({addTechs}) => {
    const [firstname, setFirstname]= useState('');
    const [lastname, setLastname] = useState('');

    const onSubmit = ()=>{
        if(firstname === '' || lastname === ''){
            M.toast({html: 'Please enter a firtname and lastname'})
        }else{
           
            const newAdd ={
                firstname,
                lastname
            }
            addTechs(newAdd);
            M.toast({html:'New technician added successfully'})
               //Clear fields
               setFirstname('');
               setLastname('')
        }
    }
    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstname" value={firstname} onChange={e=>setFirstname(e.target.value)}/>
                        <label htmlFor="firstname" className="active">
                            Log first Name
                        </label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastname" value={lastname} onChange={e=>setLastname(e.target.value)}/>
                        <label htmlFor="lastname" className="active">
                            Log last Name
                        </label>
                    </div>
                </div>

            </div>

            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-green btn">Enter</a>
            </div>

        </div>
    )
}


export default connect(null,{addTechs})(AddTechModal);
