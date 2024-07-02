import React from 'react';

const RadioField = ({ label,
  options,
  name,
  value,
  onChange }) => {

  return (
    <div >
      <p>{label}</p>
      {options.map(item => (
        <div key={item.label + '' + item.value} >
          <input
            type="radio"
            name={name}
            id={item.label + '' + item.value}
            value={item.value}
            checked={item.value === value}
            onChange={onChange}

          />
          <label htmlFor={item.label + '' + item.value}>{item.value}</label>
        </div>
      ))}
    </div>
  );
}

export default RadioField;