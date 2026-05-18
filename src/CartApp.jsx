import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";


export const CartApp =() =>{
    const {cartItems,handlerAddProductsCart,handlerDeleteProductCart} =useItemsCart();
    return (
    <>
    <Navbar/>
    <div className="container my-4">
    <h3 className="h1 text-center">Cart App</h3>
    <CartRoutes 
        cartItems={cartItems} 
        handlerAddProductsCart={handlerAddProductsCart} 
        handlerDeleteProductCart={handlerDeleteProductCart}
    />
    </div>
    </>
    );
}