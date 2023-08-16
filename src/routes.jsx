import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Index from './Index.jsx';
import ErrorPage from './error-page.jsx';

//pages
import Home from './pages/Home';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import Cart from './pages/Cart.jsx';
import Details from './pages/Details.jsx';
import LINKS from "./LINKS.js";


export default function Routes({products, setProducts, cart, setCart, addToCart, loading}) {
    const router = createBrowserRouter([
        {
            path: LINKS.home,
            element: <Index></Index>,
            loader: () => cart.length,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    errorElement: <ErrorPage></ErrorPage>,
                    children: [
                        {
                            index: true,
                            element: <Home></Home>
                        },
                        {
                            path: LINKS.products,
                            element: <Products></Products>,
                            loader: () => ({products, loading})
                        },
                        {
                            path: LINKS.products + ':id',
                            element: <Details></Details>,
                            loader: () => (id) => {
                                const product = products.filter(item => item.id == id)[0];
                                return {product, loading, addToCart, cart}
                            }
                        },
                        {
                            path: LINKS.cart,
                            element: <Cart></Cart>,
                            loader: () => ({cart, setCart, loading})
                        },
                        {
                            path: LINKS.about,
                            element: <About></About>
                        }
                    ]
                }

            ]
        },
    ]);

    return (<>
        <RouterProvider router={router}>
        </RouterProvider>
    </>


    );
}