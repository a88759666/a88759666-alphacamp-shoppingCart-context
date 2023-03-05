import { useState } from "react"
import { useCartContext } from "../../../context/CartContext"


interface Props {
    // children: ReactNode,
    handleCurrentPageChange?: any
}


const CheckOut:React.FC<Props> = ({handleCurrentPageChange}) => {

    const { totalPrice } = useCartContext()

    const [ nameVal, setNameVal] = useState("")
    const [ cardVal, setCardVal] = useState("")
    const [ expVal, setExpVal] = useState("")
    const [ cvcVal, setCvcVal] = useState("")


    function onChangeCardHandler(event: React.FormEvent<HTMLInputElement>) {
        if (event.currentTarget) {
            setCardVal(event.currentTarget.value)
        }
    }
    function onChangeExpHandler(event: React.FormEvent<HTMLInputElement>) {
        if (event.currentTarget) {
            setExpVal(event.currentTarget.value)
        }
    }
    function onChangeNameHandler(event: React.FormEvent<HTMLInputElement>) {
        if (event.currentTarget) {
            setNameVal(event.currentTarget.value)
        }
    }
    function onChangeCvcHandler(event: React.FormEvent<HTMLInputElement>) {
        if (event.currentTarget) {
            setCvcVal(event.currentTarget.value)
        }
    }
    

    return (
        <div className="pt-[140px]">
            <h1 className="text-[32px] leading-8 font-sans font-bold mb-[86px]">結帳</h1>
        
            {/* Progress */}
            <div className="flex flex-row items-center justify-between w-[100%] mb-[64px]">
                <div className="flex flex-row items-center">
                    <div className="w-[24px] h-[24px] rounded-full  bg-black text-white text-center mr-[8px]">√</div>
                    <h1 className="leading-6 font-sans text-[16px] font-normal">寄送地址</h1>
                </div>
                <div className="w-[60px] h-[1px] bg-black box-border" />
                <div className="flex flex-row items-center">
                    <div className="w-[24px] h-[24px] rounded-full  bg-black text-white text-[14px] text-center mr-[8px]">√</div>
                    <h1 className="leading-6 font-sans text-[16px] font-normal  text-black">運送方式</h1>
                </div>
                <div className="w-[60px] h-[1px] bg-black box-border" />
                <div className="flex flex-row items-center">
                    <div className="w-[24px] h-[24px] rounded-full border border-black text-black  text-[14px] text-center mr-[8px]">3</div>
                    <h1 className="leading-6 font-sans text-[16px] font-normal text-black">付款資訊</h1>
                </div>
            </div>

            {/* step3 */}
            <form>
                <h1 className="leading-6 font-sans text-[24px] font-bold mb-[24px]">付款資訊</h1>

                <div className="flex flex-col mb-6">
                    {/* Line1 */}
                    <div className="flex flex-col mb-[24px]">
                        <label htmlFor="name" className="leading-4 font-sans text-[12px] font-bold mb-[4px] text-slate-500">持卡人姓名</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="George Chiang" 
                            className="border border-current border-solid rounded-lg p-3 leading-4 font-sans text-[12px] font-normal  text-slate-500 w-[350px]"
                            value={nameVal}
                            onChange={onChangeNameHandler}
                        />
                    </div>
                    {/* Line2 */}
                    <div className="flex flex-col mb-[24px]">
                        <label htmlFor="password" className="leading-4 font-sans text-[12px] font-bold mb-[4px] text-slate-500">卡號</label>
                        <input 
                            type="number" 
                            name="password" 
                            id="password" 
                            placeholder="1111 2222 3333 4444" 
                            className="border border-current border-solid rounded-lg p-3 leading-4 font-sans text-[12px] font-normal  text-slate-500  w-[350px]"
                            value={cardVal}
                            onChange={onChangeCardHandler}
                        />
                    </div>
                    {/* Line3 */}
                    <div className="flex flex-row mb-12">
                        <div className="flex flex-col flex-1 mr-[32px]">
                            <label htmlFor="date" className="leading-4 font-sans text-[12px] font-bold mb-[4px] text-slate-500">有效期限</label>
                            <input 
                            type="number" 
                            name="date" 
                            id="date" 
                            placeholder="MM/YY" 
                            className="border border-current border-solid rounded-lg p-3 leading-4 font-sans text-[12px] font-normal  text-slate-500"
                            value={expVal}
                            onChange={onChangeExpHandler}
                        />
                        </div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor="cvc" className="leading-4 font-sans text-[12px] font-bold mb-[4px] text-slate-500">cvc/ccv</label>
                            <input 
                                type="text" 
                                name="cvc" 
                                id="cvc" 
                                placeholder="123" 
                                className="border border-current border-solid rounded-lg p-3 leading-4 font-sans text-[12px] font-normal  text-slate-500"
                                value={cvcVal}
                                onChange={onChangeCvcHandler}
                                />
                        </div>
                    </div>
                </div>
                <hr /> 
                <div className="flex justify-between mt-6">
                    <button 
                        className="flex flex-row items-center pxr-[47.5px] py-[14.5px] rounded-xl"
                        onClick={() => handleCurrentPageChange ({
                            step1: false,
                            step2: true,
                            step3: false
                            })
                        }
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="h-6 w-6 cursor-pointer">
                                <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" 
                                />
                        </svg>
                        <h1 className="p-2 text-black text-[14px] leading-6 font-sans font-[500]">上一步</h1>
                    </button>
                    <button 
                        className="text-center bg-pink-600 px-[47.5px] py-[14.5px] rounded-xl"
                        onClick={(e) => {
                            e.preventDefault()
                            console.log(
                                'nameVal', nameVal,'\n',
                                'cardVal', cardVal,'\n',
                                'expVal', expVal,'\n',
                                'cvcVal', cvcVal,'\n',
                                'totalprice', totalPrice
                                )
                        }}
                    >
                        <h1 className="p-2 text-white text-[14px] leading-6 font-sans font-[500]">確認下單</h1>
                    </button>
                </div>

            </form>
            
        </div>
    )
}

export default CheckOut