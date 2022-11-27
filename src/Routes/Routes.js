import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layouts/Main";
import ErrorPage from "../ErrorPage/ErrorPage"
import ProductsCardDetails from "../Home/Product/ProductsCardDetails";
import AllProducts from "../Home/Product/AllProducts";
import Category from "../Home/ProductCategory/Category";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";
import MyPhones from "../Dashboard/MyPhones/MyPhones";
import DashboardLayout from "../Layouts/DashboardLayout";
import AllUser from "../Dashboard/MyPhones/AllUser/AllUser";
import AdminRoute from "./AdminRoute";
import AddCard from "../Dashboard/AddMobile/AddMobile";
import Payment from "../Dashboard/Payment";
import Blog from "../Blog/Blog";
import Report from "../Dashboard/Report";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allproducts',
                element:<AllProducts></AllProducts>
            },
            {
                path:'/phones/:id',
                element:<PrivateRoute><ProductsCardDetails></ProductsCardDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/phones/${params.id}`)
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/dashboard',
                element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
                children:[
                    {
                        path:'/dashboard',
                        element:<MyPhones></MyPhones>
                    },
                    {
                        path:'/dashboard/allUsers',
                        element:<AdminRoute><AllUser></AllUser></AdminRoute>
                    },
                    {
                        path:'/dashboard/addMobile',
                        element:<AdminRoute><AddCard></AddCard> </AdminRoute>
                    },
                    {
                        path:'/dashboard/addReport',
                        element:<AdminRoute> <Report></Report> </AdminRoute>
                    },
                    {
                        path:'/dashboard/payment/:id',
                        element:<Payment></Payment>,
                        loader:({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)

                    },
                ]
            }
            
        ]
    }

])
export default router