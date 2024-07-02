import React, { useEffect, useState } from "react";
import TextField from "./form/textField";
import RadioField from "./form/radioForm";

const RegistrationForm = () => {
  const [data, setData] = useState({
    name: '',
    nickName: '',
    email: '',
    male: 'male',
    password: '',
    rePassword: ''
  })

  const male = [
    { label: 'mail', value: 'male' },
    { label: 'femail', value: 'female' },
    { label: 'other', value: 'other' },
  ]
  // console.log(error);

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
      <form onSubmit={handleSubmit}>
        <TextField
          label='name'
          name='name'
          value={data.name}
          type='text'
          description='your name'
          onChange={handleChange}
          placeholder='Ivan'
        />
        <TextField
          label='nickName'
          name='nickName'
          value={data.nickName}
          type='text'
          description='your nickName'
          onChange={handleChange}
          placeholder='COOL'
        />
        <TextField
          label='email'
          name='email'
          value={data.email}
          type='text'
          description='your email'
          onChange={handleChange}
          placeholder='example@example.ru'
        />
        <RadioField
          label='Укажите Ваш пол'
          options={male}
          name="male"
          value={data.male}
          onChange={handleChange}
        />
        <TextField
          label='password'
          name='password'
          value={data.password}
          type='password'
          description='your password'
          onChange={handleChange}
          placeholder='your password'
        />
        <TextField
          label='repeat password'
          name='rePassword'
          value={data.rePassword}
          type='password'
          onChange={handleChange}
          placeholder='your password'
        />

        <button type="submit">Зарегистрироваться</button>
      </form>

    </div>
  );
}

export default RegistrationForm;