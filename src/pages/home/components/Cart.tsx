
import React, { useState, useEffect, Component } from "react"
import CartItem from "./CartItem"
import {  useCartContext } from "context/CartContext"
import { Item } from "type"


const CartItemList: React.FC = () => {
    const data = useCartContext()
    
    return <>
        {
            (data.items)?.map((item: Item) => (
                <CartItem
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    key={item.id}
                />
            ))
        }
      </>
        
      
}


const Cart: React.FC = () => { 
    const { totalPrice } = useCartContext()
    return (
        <div className="flex flex-col justify-starts  px-[24px] py-[32px] gap-[32px] border rounded-[8px] mt-[226px]">
            <h1>購物籃</h1>
            <CartItemList/>
            <hr />
            <div className="flex flex-row justify-between">
                <h1>運費</h1>
                <h1>免費</h1>
            </div>
            <hr />
            <div className="flex flex-row justify-between">
                <h1>小計</h1>
                <h1>{totalPrice}</h1>
                {/* <h1>{displayPrice}</h1> */}
            </div>
        </div>
    )
}

export default Cart


