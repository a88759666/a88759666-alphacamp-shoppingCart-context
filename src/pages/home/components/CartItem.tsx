import { ReactNode, useState,useEffect } from "react"
import {  useCartContext } from "context/CartContext"

type CartItemProps = {
    name: string
    price: number
    image: string
    key:number
    
}

const CartItem: React.FC<CartItemProps> = ({
    name,
    price,
    image,
    key,
}) => {
    const { getTotalPrice, totalPrice } = useCartContext()
    console.log("totalPrice from CartItem:", totalPrice); 
    const [ count, setCount] = useState(1)
    

    function counterPlusHandler() {
        setCount(prev => prev + 1)
        getTotalPrice(price)
        
    }

    function counterMinusHandler() {
        if( count > 0){
            setCount(prev => prev - 1)
            getTotalPrice(-price)
        }
    }
    
    function getPrice() {
        return price * count;
    };
    
    


    return (
        <div className="flex flex-row justify-between items-start w-[100%] h-[100px] ">
            <div className="w-[100px] h-[100px] ">
                <img
                    className="bg-center bg-cover"
                    src={image}
                />
            </div>
            <div className="flex flex-col justify-start">
                <h1 className="mb-[24px]">{name}</h1>
                <div className="flex flex-row items-center justify-between">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-6 h-6 mr-4 cursor-pointer"
                        onClick={counterMinusHandler}
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <h1 className="mr-4">{count}</h1>

                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} stroke="currentColor" 
                        className="w-6 h-6  cursor-pointer"
                        onClick={counterPlusHandler}
                        
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </div>
            </div>
            <div>
                <h1>{getPrice()}</h1>
            </div>

        </div>
    )

}

export default CartItem

