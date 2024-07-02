import React, { useState } from 'react'
import TextField from './form/textField';
import './loginForm.css'

const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '' })

  const handleChange = ({ target }) => {
    setData((prev) => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('submit', data);
  }

  return (
    <div className='loginForm'>
      <form
        onSubmit={handleSubmit}>
        <TextField
          label="Email "
          name='email'
          value={data.email}
          type='email'
          description='Ваш email адрес'
          placeholder='example@example.ru'
          onChange={handleChange}
        // error='' 
        />
        <TextField
          label="Password "
          name='password'
          value={data.password}
          type='password'
          description='Ваш пароль'
          placeholder='ваш пароль'
          onChange={handleChange}
        // error='' 
        />
        <button
          type='sumbmit'
        >Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;