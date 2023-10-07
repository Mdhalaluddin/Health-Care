import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import CardDetails from "../Pages/Home/CardDetails/CardDetails";


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
                element: <CardDetails></CardDetails>,
                loader: () => fetch('/data.json')
            }
        ]
    }



])




export default myCrateRouter;