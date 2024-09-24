import React from 'react';
import './inputEmail.css';

interface InputEmailProps {
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    required?: boolean;
    isInvalid?: boolean;
}

const InputEmail: React.FC<InputEmailProps> = ({ value, placeholder, onChange, onBlur, required, isInvalid }) => {
    return (
        <div className="input-email-container">
            <input
                type="email"
                className={`form-control ${isInvalid ? 'input-invalid' : ''}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                required={required}
            />
            <span className="email-icon">
                <img src="../../../../../../src/assets/image/Email.svg" alt="Email Icon" />
            </span>
        </div>
    );
};

export default InputEmail;
