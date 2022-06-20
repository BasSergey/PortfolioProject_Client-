import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '..';
import { $api } from '../http';
import { IUser } from '../models/IUser';
import UserService from '../services/UserService';

const LoginForm: FC = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { store } = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([])

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data)
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="login-form_container">
        <div className="login-form_top"></div>
        <div className="login-form_bottom"></div>
        <div className="login-form_center">
          <h2>Please Sign Up, Sign In</h2>
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="user@gmail.com" />
          <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="password" />
          <div className='row'>
              <button onClick={() => store.login(email, password)} className="btn__clickable"> Log in </button>
              <button onClick={() => store.registration(email, password)} className="btn__clickable"> Registration </button>
          </div>

        </div>
      </div>
    </>

  );
};

export default observer(LoginForm);