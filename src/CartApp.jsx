import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";


export const CartApp =() =>{
    const {cartItems,handlerAddProductsCart,handlerDeleteProductCart} =useItemsCart();
    return (
    <>
    <div className="container my-4">
    <h3 className="h1 text-center">Cart App</h3>
            
       <CatalogView 
       handler={handlerAddProductsCart}/>
        {cartItems?.length<=0 ||(
            <div className="my-4 w-50">
          <CartView 
            items ={cartItems}
            handlerDelete={handlerDeleteProductCart}
            />
        </div>
        )}
    </div>
    </>
    );
}