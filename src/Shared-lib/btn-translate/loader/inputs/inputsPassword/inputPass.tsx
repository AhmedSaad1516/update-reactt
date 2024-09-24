import React from 'react';
import './inpuPass.css';

interface InputPassProps {
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void; 
    passwordVisible: boolean;
    required?: boolean;
    isInvalid?: boolean;
}

const InputPass: React.FC<InputPassProps> = ({ value, placeholder, onChange, onBlur, passwordVisible, required, isInvalid }) => {
    return (
        <div>
            <input
                type={passwordVisible ? 'text' : 'password'} // Switch between text and password
                className={`form-control ${isInvalid ? 'input-invalid' : ''}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur} 
                required={required}
            />
                <span>
                        <img src="../../../../../../src/assets/image/Lock.svg" alt=""/>
                    </span>
        </div>
    );
};
  
//    
export default InputPass;
