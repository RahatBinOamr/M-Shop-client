import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Products from "../Home/Product/Products";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            
        ]
    }

])
export default router