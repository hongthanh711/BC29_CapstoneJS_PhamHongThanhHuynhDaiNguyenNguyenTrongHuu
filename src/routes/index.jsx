import React from 'react'
import { useRoutes } from 'react-router-dom'
import AccountLayout from '../layouts/accountLayout/accountLayout'
import AdminLayout from '../layouts/adminLayout/adminLayout'
import HomeLayout from '../layouts/homeLayout/homeLayout'
import Booking from '../pages/booking/booking'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import MovieDetail from '../pages/movie-detail/movie-detail'
import Registe from '../pages/register/registe'

export default function Router() {
    const routing = useRoutes([
        {
            path: '/',
            element: <HomeLayout />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/movie/:movieId', element: <MovieDetail /> },
                { path: '/booking/:lichChieu', element: <Booking /> },
            ],
        },
        { path: '/admin', element: <AdminLayout /> },
        {
            path: '/account',
            element: <AccountLayout />,
            children: [
                {
                    path: '/account/login',
                    element: <Login />,
                },
                { path: '/account/register', element: <Registe /> },
            ],
        },
    ])
    return routing
}
