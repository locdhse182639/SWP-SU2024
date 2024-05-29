import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '.'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'
import SignUp from '../pages/Register'

export default function AppRoute() {
  return (
    <Routes>
      <Route path={routes.homePage} element={<HomePage/>}/>
      <Route path={routes.login} element={<LoginPage/>}/>
      {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
      <Route path={routes.register} element={<SignUp/>}/>
    </Routes>
  )
}
