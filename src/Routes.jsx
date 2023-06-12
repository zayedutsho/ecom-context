import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/home/Home";
import Shop from "./Components/shop/Shop";
import Cart from "./Components/Cart/Cart";
import Root from "./Components/Root/Root";
import Error from './Components/error/Error'
import { getProductsData } from "./Loaders/GetCartProduct";



const router = createBrowserRouter([


    {

        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        loader: getProductsData,
        children: [


            { path: '/', element: <Home></Home> },



            {
                path: '/home',
                element: <Home></Home>
            },
            {

                path: '/shop',
                element: <Shop></Shop>
            },

            {
                path: "/cart",
                element: <Cart></Cart>
            }


        ]


    }

])

export default router;