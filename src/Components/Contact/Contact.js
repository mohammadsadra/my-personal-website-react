import React, { useState } from "react";
import './contact.css';

const Contact = () => {
    const [subjectValue, setSubjectValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');
    const handleChangeSubject = (event) =>{
        setSubjectValue(event.target.value);
        console.log(event.target.value);
    };
    const handleChangeEmail = (event) =>{
        setEmailValue(event.target.value);
        console.log(event.target.value);
    };
    const handleChangeTextArea = (event) =>{
        setTextAreaValue(event.target.value);
        console.log(event.target.value);
    };

    const handleSubmit = (event) =>{
        console.log(event.target.value);
    };
    return (
        <div className="Contact">
            <div className="formControl">
                <input onChange={handleChangeSubject} type="text" placeholder="Subject"></input>
            </div>
            <div className="formControl">
                <input onChange={handleChangeEmail} type="email" placeholder="Email"></input>
            </div>
            <div className="formControl">
                <textarea onChange={handleChangeTextArea} placeholder="Your request here"></textarea>
            </div>
            <div className="formControl">
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Contact
