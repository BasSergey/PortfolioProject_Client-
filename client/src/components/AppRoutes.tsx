import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { Context } from '..';
import { IUser } from '../models/IUser';
import Loading from '../pages/Loading';
import UserService from '../services/UserService';
import { authRoutes, publicRoutes } from "../routes";
import { LOGIN_ROUTE, MAIN_PAGE } from '../utils/consts';
const AppRoutes = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const { store } = useContext(Context)
  useEffect(() => {
    if (localStorage.getItem('token')) {  //если в localStorage по ключу токен что-то есть тогда проверяем. Если юзер нажмет выйти, то это даже срабатывать не будет
      store.checkAuth()
    }
  }, [])
  if (store.isLoading) {
    return <Loading />
  }
  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data)
    } catch (e) {
      console.log(e);
    }
  }
  // if (!store.isAuth) { //если false то 
  //   return (
  //     <LoginForm/>
  //   )
  // }
  //   <div>
  //   <LoginForm />
  //   <button onClick={getUsers}>Получить пользователей</button>
  // </div>


  return (
    store.isAuth ?
      <Routes>
        {authRoutes.map(route =>
          <Route
            path={route.path}
            element={<route.Component />}
            key={route.path}
          />)}
        <Route
          path='*'
          element={<Navigate to={MAIN_PAGE} replace />}
        />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route
            path={route.path}
            element={<route.Component />}
            key={route.path}
          />)}
        <Route
          path='*'
          element={<Navigate to={LOGIN_ROUTE} replace />}
        />
      </Routes>
  )
}
export default observer(AppRoutes)
