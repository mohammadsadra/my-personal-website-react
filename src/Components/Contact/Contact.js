import React, { useState } from "react";
import './contact.css';

const Contact = () => {
    const [subjectValue, setSubjectValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');

    const handleChangeSubject = (event) => {
        setSubjectValue(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmailValue(event.target.value);
    };

    const handleChangeTextArea = (event) => {
        setTextAreaValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simple email validation regex
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(emailValue)) {
            alert('Please enter a valid email address.');
            return;
        }
        // You can replace this alert with a more sophisticated message or a modal
        alert(`Thank you, ${subjectValue}, for your message!`);
        // Clear the form (optional)
        setSubjectValue('');
        setEmailValue('');
        setTextAreaValue('');
    };

    return (
        <div className="Contact">
            <div className="formControl">
                <input
                    value={subjectValue}
                    onChange={handleChangeSubject}
                    type="text"
                    placeholder="Subject"
                />
            </div>
            <div className="formControl">
                <input
                    value={emailValue}
                    onChange={handleChangeEmail}
                    type="email"
                    placeholder="Email"
                />
            </div>
            <div className="formControl">
                <textarea
                    value={textAreaValue}
                    onChange={handleChangeTextArea}
                    placeholder="Your request here"
                />
            </div>
            <div className="formControl">
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Contact;
