import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { createContext, useState } from "react";








export const ProductContext = createContext([])

export const CartContext = createContext([])


const Root = () => {


    const { products, initialCart } = useLoaderData()

    const [cart, setCart] = useState(initialCart)

    return (

        <ProductContext.Provider value={products}>

            <CartContext.Provider value={[cart, setCart]}>

                <>

                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </>


            </CartContext.Provider>





        </ProductContext.Provider>














    );
};

export default Root;