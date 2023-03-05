import React ,{ createContext, useContext, useState } from "react";
import { Item } from "type"

export const items:Item[] = [
    {
      "id": 1,
      "name": "貓咪罐罐",
      "image": "https://picsum.photos/300/300?text=1",
      "price": 100,
      "quantity": 2
    },
    {
      "id": 2,
      "name": "貓咪干干",
      "image": "https://picsum.photos/300/300?text=2",
      "price": 200,
      "quantity": 1
    }
]

type CartContextType = {
    items: Item[],
    totalPrice: number,
    getTotalPrice:(price: number) => void
  }


const CartContext = createContext<CartContextType>({
  items,
  totalPrice: 0,
  getTotalPrice:(price: number) => {}
})

type CartProviderProps = {
    children: React.ReactNode
  }

export const CartProvider:React.FC<CartProviderProps> = ({ children }) => {
    const [totalPrice, setTotalPrice] = useState<number>(300)
    console.log("totalPrice from CartContext:", totalPrice); 
    
    function getTotalPrice(price: number) {
        setTotalPrice(totalPrice => totalPrice + price)
      }
     
    const providerValue = {
        items,
        totalPrice,
        getTotalPrice
    }

    return <>
        <CartContext.Provider value={providerValue}>
            { children }
        </CartContext.Provider>
    </>
}

export const useCartContext = () => {
    return useContext(CartContext)
}