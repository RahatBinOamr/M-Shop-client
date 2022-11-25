import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layouts/Main";
import ErrorPage from "../ErrorPage/ErrorPage"
import ProductsCardDetails from "../Home/Product/ProductsCardDetails";
import AllProducts from "../Home/Product/AllProducts";
import Category from "../Home/ProductCategory/Category";
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
                element:<ProductsCardDetails></ProductsCardDetails>,
                loader:({params})=>fetch(`http://localhost:5000/phones/${params.id}`)
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            }
            
        ]
    }

])
export default router