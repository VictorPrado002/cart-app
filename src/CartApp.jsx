import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";


export const CartApp =() =>{
    const {cartItems,handlerAddProductsCart,handlerDeleteProductCart} =useItemsCart();
    return (
    <>
    <Navbar/>
    <div className="container my-4">
    <h3 className="h1 text-center">Cart App</h3>
            <Routes>
                <Route 
                    path="catalog" 
                    element={
                        <CatalogView 
                            handler={handlerAddProductsCart}/>
                            }/>
                <Route 
                    path="cart" 
                    element={(
                        cartItems?.length<=0 ?
                            <div className="alert alert-warning">No hay elementos en el carrito.</div>
                            :
                            (
                            <div className="my-4 w-50">
                            <CartView 
                                items ={cartItems}
                                handlerDelete={handlerDeleteProductCart}
                                />
                            </div>
                        )
                    )}/>
                <Route
                    path="/"
                    element={
                        <Navigate to={'catalog'}/>
                    }/>
            </Routes>

        
    </div>
    </>
    );
}