import { useContext, useState } from "react";
import { ProductContext } from "../Root/Root";
import Products from "./Product";
import { addToDb } from "../../utilitis/fakeDB";
import { toast } from "react-toastify";


const Shop = () => {

    const products = useContext(ProductContext)

    const [cart, setCart] = useState([])
    console.log(cart)




    const handleAddToCart = product => {

        let newCart = []


        const exist = cart.find(existProduct => existProduct.id === product.id)

        if (!exist) {


            product.quantity = 1;
            newCart = [...cart, product];
        } else {


            const remaining = cart.filter(existProduct => existProduct.id !== product.id)

            exist.quantity = exist.quantity + 1
            newCart = [...remaining, exist]
        }

        setCart(newCart)
        addToDb(product.id);

        toast.success("added", { autoClose: 500 })





    }


    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>

                {products.map(product => <Products key={product.id}



                    product={product}

                    handleAddToCart={handleAddToCart}
                ></Products>)}
            </div>
        </div>
    );
};

export default Shop;