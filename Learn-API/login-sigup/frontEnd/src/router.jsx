import { createBrowserRouter } from 'react-router-dom'
import Login from './features/loginGoogle/login'

import { LoginSignup } from './features/register/LoginSignup';



const router = createBrowserRouter([
  {
    path: '/home',

  },
  {
    path: '/login',
    
  },
  {
    path: '/register',
    element: <LoginSignup />
  },

  {
    path: '/login/oauth',
    element: < Login />
  }
])

export default router
