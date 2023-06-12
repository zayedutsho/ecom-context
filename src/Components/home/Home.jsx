import { Link } from "react-router-dom";
const Home = () => {
    return (

        <>
            <section>
                <div className="dark:bg-white-400">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Shop Smarter, Live Better: Elevate Your Lifestyle with Every Purchase!</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Shop. Dream. Delight. Experience effortless online shopping and elevate your lifestyle with us. Join the retail revolution for convenience, unbeatable deals, and unrivaled satisfaction. Embrace the future of shopping now!</p>
                        <div className="flex flex-wrap justify-center">


                            <Link rel="noopener noreferrer" to="/shop" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"><button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded  bg-cyan-200 dark:text-black-50">Shop Now</button></Link>

                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Learn more</button>
                        </div>
                    </div>
                </div>
                <img src="/src/assets/hero-1.jpg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </section>

        </>
    );
};

export default Home;