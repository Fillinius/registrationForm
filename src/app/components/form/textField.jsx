import React from 'react';

const TextField = ({ label, name, value, type, description, onChange, placeholder, ...restProp }) => {
  return (
    <div >
      <label htmlFor={name}>{label}</label>
      <input type={type}
        name={name}
        id={name}
        value={value}
        description={description}
        onChange={onChange}
        placeholder={placeholder}
        {...restProp} />
    </div>
  );
}

export default TextField;