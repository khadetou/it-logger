import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTechs} from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize';

const AddTechModal = ({addTechs}) => {
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = ()=>{
        if(firstName === '' || lastName === ''){
            M.toast({html: 'Please enter a firtname and lastname'})
        }else{
           
            const newAdd ={
                firstName,
                lastName
            }
            addTechs(newAdd);
            M.toast({html:'New technician added successfully'})
               //Clear fields
               setFirstName('');
               setLastName('')
        }
    }
    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                        <label htmlFor="firstName" className="active">
                            Log first Name
                        </label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName} onChange={e=>setLastName(e.target.value)}/>
                        <label htmlFor="lastName" className="active">
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
