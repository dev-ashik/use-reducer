import React, {useReducer, useRef} from 'react';
import {PatientReducerHandle, patientState} from '../PatientReducerHandle/PatientReducerHandle';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(PatientReducerHandle, patientState);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_PATIENT', 
            id: state.patients.length + 1,
            name: nameRef.current.value
        })
        nameRef.current.value = '';
        // console.log(nameRef.current.value);
    }
    return (
        <div>
            <h1>Patient Management: {state.patients.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" />
            </form>
            {
                state.patients.map(pt => <li 
                    key={pt.id}
                    onClick={()=>dispatch({type: 'REMOVE_PATIENT', id: pt.id})}
                    >{pt.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;