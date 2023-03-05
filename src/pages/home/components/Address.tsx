import React, { useState } from "react"
interface Props {
    // children: ReactNode,
    handleCurrentPageChange?: any
}

type CurrentPage = {
    step1: boolean
    step2: boolean
    step3: boolean
}
const Address:React.FC<Props> = ({handleCurrentPageChange}) => {
    const [ nameVal, setNameVal] = useState("")

    function onChangeHandler(event: React.FormEvent<HTMLInputElement>) {
        if (event.currentTarget) {
            setNameVal(event.currentTarget.value)
        }
    }
    return (
        <div className="pt-[140px]">
            <h1 className="text-[32px] leading-8 font-sans font-bold mb-[86px]">結帳</h1>
            
            {/* Progress */}
            <div className="flex flex-row items-center justify-between w-[100%] mb-[64px]">
                <div className="flex flex-row items-center">
                    <div className="w-[24px] h-[24px] rounded-full  bg-black text-white  text-[14px] text-center mr-[8px]">1</div>
                    <h1 className="leading-6 font-sans text-[16px] font-normal">寄送地址</h1>
                </div>
                <div className="w-[60px] h-[1px] bg-black box-border" />
                <div className="flex flex-row items-center">
                    <div className="w-[24px] h-[24px] rounded-full border border-slate-400 text-slate-400  text-[14px] text-center mr-[8px]">2</div>
                    <h1 className="leading-6 font-sans text-[16px] font-normal  text-slate-400">運送方式</h1>
                </div>
                <div className="w-[60px] h-[1px] bg-slate-400 box-border" />
                <div className="flex flex-row items-center">
                    <div className="w-[24px] h-[24px] rounded-full border border-slate-400 text-slate-400  text-[14px] text-center mr-[8px]">3</div>
                    <h1 className="leading-6 font-sans text-[16px] font-normal  text-slate-400">付款資訊</h1>
                </div>
            </div>

            {/* form */}
            <form>
                <h1 className="leading-6 font-sans text-[24px] font-bold mb-[24px]">寄送地址</h1>

                {/* Line1 */}
                <div className="flex flex-row mb-6">
                    <div className="flex flex-col basis-2/6 mr-[32px]">
                        <label htmlFor="gender" className="leading-4 font-sans text-[12px] font-bold mb-[4px] text-slate-500">稱謂</label>
                        <select 
                            name="gender" 
                            id="gender" 
                            className="border border-current border-solid rounded-lg p-3 leading-4 font-sans text-[12px] font-normal  text-slate-500">
                                <option className="">先生</option>
                                <option>女士</option>
                        </select>
                    </div>
                    <div className="flex flex-col basis-4/6 ">
                        <label htmlFor="name" className="leading-4 font-sans text-[12px] font-bold mb-[4px] text-slate-500">姓名</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={nameVal}
                            id="name" 
                            placeholder="請輸入姓名" 
                            onChange={onChangeHandler}
                            className="border border-current border-solid rounded-lg p-3 leading-4 font-sans text-[12px] font-normal  text-slate-500"
                        />
                    </div>
                </div>
                
                {/* Line2 */}
                <div className="flex flex-row mb-6">
                    <div className="flex flex-col basis-3/6 mr-[32px]">
                        <label htmlFor="phone" className="leading-4 font-sans text-[12px] font-bold mb-[4px] text-slate-500">電話</label>
                            <input 
                                type="number" 
                                name="phone" 
                                id="phone" 
                                placeholder="請輸入行動電話" 
                                className="border border-current border-solid rounded-lg p-3 leading-4 font-sans text-[12px] font-normal  text-slate-500"
                                />
                    </div>
                    <div className="flex flex-col basis-3/6 ">
                        <label htmlFor="email" className="leading-4 font-sans text-[12px] font-bold mb-[4px] text-slate-500">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="請輸入電子郵件" 
                            className="border border-current border-solid rounded-lg p-3 leading-4 font-sans text-[12px] font-normal  text-slate-500"
                            />
                    </div>
                </div>

                {/* Line3 */}
                <div className="flex flex-row mb-12">
                    <div className="flex flex-col basis-2/6 mr-[32px]">
                        <label htmlFor="city" className="leading-4 font-sans text-[12px] font-bold mb-[4px] text-slate-500">縣市</label>
                        <select 
                            name="city" 
                            id="city" 
                            placeholder="請選擇縣市" 
                            className="border border-current border-solid rounded-lg p-3 leading-4 font-sans text-[12px] font-normal  text-slate-500">
                                <option className="">台北市</option>
                                <option>基隆市</option>
                        </select>
                    </div>
                    <div className="flex flex-col basis-4/6">
                        <label htmlFor="address" className="leading-4 font-sans text-[12px] font-bold mb-[4px] text-slate-500">地址</label>
                        <input 
                            type="text" 
                            name="address" 
                            id="address" 
                            placeholder="請輸入地址" 
                            className="border border-current border-solid rounded-lg p-3 leading-4 font-sans text-[12px] font-normal  text-slate-500"
                            />
                    </div>
                </div>

                <hr />
                <div className="flex justify-end mt-6">
                    <button 
                        className="flex flex-row items-center bg-pink-600 px-[47.5px] py-[14.5px] rounded-xl"
                        onClick={() => handleCurrentPageChange ({
                            step1: false,
                            step2: true,
                            step3: false
                            })
                        }
                          
                    >
                        <h1 className="p-2 text-white text-[14px] leading-6 font-sans font-[500]">下一步</h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 cursor-pointer"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                fill="white"
                                d="M16.6402 8.11673C16.8271 7.96109 17.1302 7.96109 17.3171 8.11673L22.3598 12.3158L22.416 12.3719C22.5467 12.53 22.5246 12.7488 22.3517 12.8861L17.3089 16.8899L17.2413 16.9347C17.0518 17.0386 16.7944 17.0181 16.6322 16.8765L16.5784 16.8202C16.4537 16.6624 16.4783 16.448 16.6483 16.313L20.8211 13H2.47619L2.39059 12.9919C2.16845 12.9496 2 12.7455 2 12.5C2 12.2239 2.2132 12 2.47619 12H20.6277L16.6402 8.68037L16.5848 8.62517C16.4556 8.46984 16.474 8.25508 16.6402 8.11673Z"
                            />
                        </svg>
                    </button>
                </div>
                
            </form>
        </div>
    ) 
    
}

export default Address