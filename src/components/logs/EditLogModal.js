import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize';

const EditLogModal = () => {
    const [message, setMessage]= useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = ()=>{
        if(message === '' || tech === ''){
            M.toast({html: 'Please enter a message and tech'})
        }else{
            console.log(message, attention, tech);

            //Clear fields
            setMessage('');
            setAttention(false);
            setTech('')
        }
    }
    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e=>setMessage(e.target.value)}/>
                        <label htmlFor="message" className="active">
                            Log message
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={e=>setTech(e.target.value)}>
                            <option value="" disabled>Select Technician</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Sam Smith">Sam Smith</option>
                            <option value="Sarah Wilson">Sarah Wilson</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e=>setAttention(!attention)} />
                                <span>Needs attention</span>
                            </label>
                        </p>
                    </div>
                </div>

            </div>

            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-green btn">Enter</a>
            </div>

        </div>
    )
}

const modalStyle ={
    width: '75%',
    heigth: '75%'
}

export default EditLogModal;