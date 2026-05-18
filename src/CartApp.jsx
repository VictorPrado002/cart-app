import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const initialCartItems= JSON.parse(sessionStorage.getItem('cart'))|| [];

export const CartApp =() =>{
    const [cartItems,setCartItems] =useState(initialCartItems);
    
    const handlerAddProductsCart = (product) =>{
        const hasItem=cartItems.find((i)=> i.product.id===product.id);
        //console.log(hasItem);
        if (hasItem){
            // setCartItems([
            //     ...cartItems.filter((i)=>i.product.id !== product.id),
            //     {
            //         product,
            //         quantity:hasItem.quantity+1,
            //     }
            // ])
            setCartItems(
                cartItems.map((i)=>{
                    if (i.product.id===product.id){
                        i.quantity+=1;
                    }
                    return i;
                })
            )
        }else{
            setCartItems([
            ...cartItems,
            {
                product,
                quantity:1,
            }
        ])
        }
    };

    const handlerDeleteProductCart = (id)=>{
        setCartItems([
            ...cartItems.filter((i)=>i.product.id !== id)
        ]);
    }

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