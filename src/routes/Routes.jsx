import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Gallery from "../pages/gallery/Gallery";
import Blog from "../pages/Blog/Blog";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import EventDetails from "../pages/eventDetails/EventDetails";
import Register from "../pages/register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/public/events.json'),
            },
            {
                path: '/events/:id',
                element: <PrivateRoutes><EventDetails></EventDetails></PrivateRoutes>,
                loader: () => fetch('/public/events.json')
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/gallery',
                element: <PrivateRoutes> <Gallery></Gallery> </PrivateRoutes>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/about',
                element: <PrivateRoutes><About></About></PrivateRoutes>
            },
                
            
            
        ]
    }
]);

export default router;
