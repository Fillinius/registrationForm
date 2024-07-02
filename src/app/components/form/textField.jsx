import React from 'react';

const TextField = ({ label, name, value, type, description, onChange, error, placeholder }) => {
  return (
    <div >
      <label htmlFor={name}>{label}</label>
      <input type={type}
        value={value}
        description={description}
        onChange={onChange}
        placeholder={placeholder}
        error={error} />
    </div>
  );
}

export default TextField;