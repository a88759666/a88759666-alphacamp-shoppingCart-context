import Container from "components/Container"
import Footer from "components/Footer"
import Header from "components/Header"
import Cart from "./components/Cart"
import Address from "./components/Address"
import Shipping from "./components/Shipping"
import CheckOut from "./components/CheckOut"
import { ReactEventHandler, ReactNode, useState } from "react"
import { CartProvider } from "context/CartContext"

type CurrentPage = {
    step1?: boolean
    step2?: boolean
    step3?: boolean
}

const Home:React.FC<CurrentPage> = ({
    step1,
    step2,
    step3
}) => {
    const [ currentPage, setCurrentPage] = useState<CurrentPage>({
        step1: true,
        step2: false,
        step3: false
    })
    const handleCurrentPageChange:any = (currentPage:CurrentPage) => {
        setCurrentPage(currentPage)
    }

    return <>
        <Container>
            <Header />
            <div className="flex justify-between">
                <CartProvider>
                    <div className="basis-4/7 mr-[130px]">
                        {currentPage.step1 === true && <Address handleCurrentPageChange={handleCurrentPageChange} />}
                        {currentPage.step2 === true && <Shipping handleCurrentPageChange={handleCurrentPageChange} />}
                        {currentPage.step3 === true && <CheckOut handleCurrentPageChange={handleCurrentPageChange} />}
                    </div>
                    <div className="basis-3/7">
                            <Cart />
                    </div>
                </CartProvider>
            </div>
        </Container>
        <Footer />   
    </>
    }


export default Home