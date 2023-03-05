interface Props {
    // children: ReactNode,
    handleCurrentPageChange?: any
}

const Shipping:React.FC<Props> = ({handleCurrentPageChange}) => {
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
                    <div className="w-[24px] h-[24px] rounded-full border border-black text-black text-[14px] text-center mr-[8px]">2</div>
                    <h1 className="leading-6 font-sans text-[16px] font-normal  text-black">運送方式</h1>
                </div>
                <div className="w-[60px] h-[1px] bg-black box-border" />
                <div className="flex flex-row items-center">
                    <div className="w-[24px] h-[24px] rounded-full border border-slate-400 text-slate-400  text-[14px] text-center mr-[8px]">3</div>
                    <h1 className="leading-6 font-sans text-[16px] font-normal  text-slate-400">付款資訊</h1>
                </div>
            </div>

            {/* step2 */}
            <h1 className="text-[32px] leading-8 font-sans font-bold mb-[24px]">運送方式</h1>
            <form>
                <div className="w-[435px] flex flex-row items-center justify-between px-[20px] py-[11px] border border-inherit border-solid rounded-lg cursor-pointer mb-[24px] active:border-current">
                    <input 
                        type="radio" 
                        name="choose1" 
                        id="choose1" 
                        className="appearance-none w-[20px] h-[20px] border border-solid border-current rounded-full cursor-pointer checked:border-4 mr-[8px]"
                    />
                    <label htmlFor="choose1" className="leading-4 font-sans text-[12px] font-bold  text-slate-500  mr-auto">標準運送<br></br>約3~7個工作天</label>
                    <h1 className="leading-4 font-sans text-[12px] font-bold  text-slate-500">免費</h1>
                </div>
                <div className="w-[435px] flex flex-row items-center justify-between px-[20px] py-[11px] border border-inherit border-solid rounded-lg cursor-pointer focus:border-current">
                    <input 
                        type="radio" 
                        name="choose1" 
                        id="choose2" 
                        className="appearance-none w-[20px] h-[20px] border border-solid border-current rounded-full cursor-pointer checked:border-4 mr-[8px]"
                    />
                    <label htmlFor="choose2" className="leading-4 font-sans text-[12px] font-bold  text-slate-500  mr-auto">DHL貨運<br></br>48小時內送達</label>
                    <h1 className="leading-4 font-sans text-[12px] font-bold  text-slate-500">免費</h1>
                </div>
            </form>
            <hr className="mt-[144px]" />
            <div className="flex justify-between mt-6">
                <button 
                    className="flex flex-row items-center pxr-[47.5px] py-[14.5px] rounded-xl"
                    onClick={() => handleCurrentPageChange ({
                        step1: true,
                        step2: false,
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
                    className="flex flex-row items-center bg-pink-600 px-[47.5px] py-[14.5px] rounded-xl"
                    onClick={() => handleCurrentPageChange ({
                        step1: false,
                        step2: false,
                        step3: true
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
        </div>
    )
    
        


    
}

export default Shipping