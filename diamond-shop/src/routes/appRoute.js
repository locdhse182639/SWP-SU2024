import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '.'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'
import SignUp from '../pages/Register'
import Diamonds from '../pages/diamonds'
import DashboardPage from '../pages/dashboardPage'
import OrderPage from '../components/dashboard/dashboardContent/OrderPage'
import FbPage from '../components/dashboard/dashboardContent/FeedbackPage'
import AccountPage from '../components/dashboard/dashboardContent/AccountManage'
import ProductPage from '../components/dashboard/dashboardContent/ProductManage'
import RevenuePage from '../components/dashboard/dashboardContent/RevenuePage'
import EngagementRingsPage from '../pages/engagementRingsPage'
import ShoppingCartPage from '../pages/shoppingCartPage'
import DiamondDetailPage from '../pages/diamondDetailPage'
=======
import UserInfoPage from '../components/userInfoContent/Pages/userInfoPage'
>>>>>>> 7cd2e27913a01666b1593f4cc99a8ce3da95ed45

export default function AppRoute() {
  return (
    <Routes>
      <Route path={`${routes.detail}/:price`} element={<DiamondDetailPage/>}/>
      <Route path={routes.dashboard} element={<DashboardPage/>}></Route>
      <Route path='/OrderPage' element={<OrderPage/>}></Route>
      <Route path={routes.feedbackPage} element={<FbPage/>}></Route>
      <Route path={routes.accountPage} element={<AccountPage/>}></Route>
      <Route path={routes.productPage} element={<ProductPage/>}></Route>
      <Route path={routes.revenuePage} element={<RevenuePage/>}></Route>
      <Route path={routes.homePage} element={<HomePage/>}/>
      <Route path={routes.login} element={<LoginPage/>}/>
      <Route path={routes.register} element={<SignUp/>}/>
      <Route path={routes.diamondList} element={<Diamonds/>}/>
      <Route path={routes.engagementRings} element={<EngagementRingsPage/>}/>
      <Route path={routes.shoppingCart} element={<ShoppingCartPage/>}/>
      <Route path='/diamondDetail' element={<DiamondDetailPage/>}/>
      <Route path={routes.userInfo} element={<UserInfoPage />} />
      <Route path={routes.history} element={<History />} />
      <Route path={routes.staffsite} element={<StaffSite />} />
      <Route path={routes.detail} element={<DiamondDetailPage/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path={routes.checkout} element={<CheckOutPage/>}/>
      <Route path={routes.checkoutcomplete} element={<CheckoutCompletePage/>}/>

    </Routes>
  );
}
