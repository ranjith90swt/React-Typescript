import React from 'react'
interface InputProps {
    type?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
    type = 'text',
    label,
    name,
    placeholder,
    value,
    disabled = false,
    required = false,
    error,
    onChange

}: InputProps) => {

    return (
        <div className='mb-3'>
            {
                label && (
                    <label className='form-label'>{label}{required && <span className='text-danger'>*</span>}</label>
                )
            }
            <input type={type} name={name} className='form-control' placeholder={placeholder} value={value} disabled={disabled} onChange={onChange} />
            {
                error && (
                    <span className='text-danger'>{error}</span>
                )
            }

        </div>
    )
}

export default Input