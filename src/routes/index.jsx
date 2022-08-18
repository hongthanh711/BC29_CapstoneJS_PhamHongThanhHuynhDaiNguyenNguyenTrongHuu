import CreateUser from 'pages/create-user/create-user'
import Register from 'pages/register/register'
import UpdateMovie from 'pages/update-movie/update-movie'
import UserInfo from 'pages/user-info/user-info'
import UserManagement from 'pages/user-management/user-management'
import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
const AdminGuard = lazy(() => import('../guards/admin.guard'))
const AuthGuard = lazy(() => import('../guards/auth.guard'))
const NoAuthGuard = lazy(() => import('../guards/no-auth.guard'))
const AdminLayout = lazy(() => import('../layouts/admin'))
const Booking = lazy(() => import('pages/booking/booking'))
const Login = lazy(() => import('pages/login/login'))
const MovieManagement = lazy(() => import('pages/movie-management/movie-management'))
const HomeLayout = lazy(() => import('../layouts/home'))
const Home = lazy(() => import('pages/home/home'))
const MovieDetail = lazy(() => import('pages/movie-detail/movie-detail'))
const CreateMovie = lazy(() => import('pages/create-movie/create-movie'))

export default function Router() {
    const routing = useRoutes([
        {
            path: '/',
            element: <HomeLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/movie/:movieId',
                    element: <MovieDetail />,
                },
                {
                    path: '/',
                    element: <AuthGuard />,
                    children: [
                        {
                            path: '/booking/:maLichChieu',
                            element: <Booking />,
                        },
                    ],
                },
                {
                    path: '/',
                    element: <NoAuthGuard />,
                    children: [
                        {
                            path: '/login',
                            element: <Login />,
                        },
                    ],
                },
                {
                    path: '/register',
                    element: <Register />,
                },
                { path: '/profile', element: <UserInfo /> },
            ],
        },
        {
            path: '/admin',
            element: <AdminLayout />,
            children: [
                {
                    path: '/admin/',
                    element: <AdminGuard />,
                    children: [
                        {
                            path: '/admin/movie-management',
                            element: <MovieManagement />,
                        },
                        {
                            path: '/admin/movie-management/create',
                            element: <CreateMovie />,
                        },
                        {
                            path: '/admin/movie-management/:movieId/update',
                            element: <UpdateMovie />,
                        },
                        { path: '/admin/movie-management/showtime/:movieId' },
                        {
                            path: '/admin/user-management',
                            element: <UserManagement />,
                        },
                        { path: '/admin/user-management/create', element: <CreateUser /> },
                    ],
                },
            ],
        },
    ])

    return routing
}
