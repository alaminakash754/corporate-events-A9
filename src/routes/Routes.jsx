import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Gallery from "../pages/gallery/Gallery";
import Blog from "../pages/Blog/Blog";
import About from "../pages/about/About";

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
                path:'/gallery',
                element: <Gallery></Gallery>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/about',
                element: <About></About>
            },
                
            
            
        ]
    }
]);

export default router;
