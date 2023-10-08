import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import CardDetails from "../Pages/Home/CardDetails/CardDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRout from "../ProivetRout/PrivetRout";
import Cards from "../Pages/Home/Cards/Cards";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";


const myCrateRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')  
            },
            {
                path: '/card/:id',
                element: <PrivetRout><CardDetails></CardDetails></PrivetRout>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/card',
                element: <Cards></Cards>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: '/contact',
                element: <PrivetRout><Contact></Contact></PrivetRout>
            }
        ]
    }



])




export default myCrateRouter;