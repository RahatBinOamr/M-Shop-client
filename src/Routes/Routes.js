import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layouts/Main";
import ErrorPage from "../ErrorPage/ErrorPage"
import ProductsCardDetails from "../Home/Product/ProductsCardDetails";
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
                path:'/phones/:id',
                element:<ProductsCardDetails></ProductsCardDetails>,
                loader:({params})=>fetch(`http://localhost:5000/phones/${params.id}`)
            }
            
        ]
    }

])
export default router