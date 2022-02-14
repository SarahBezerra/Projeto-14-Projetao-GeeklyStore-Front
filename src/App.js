import { React, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/index"
import SignInPage from "./pages/SignInPage/index"
import SignUpPage from "./pages/SignUpPage/index"
import ShoppingCartPage from "./pages/ShoppingCartPage/index"
import GlobalStyled from "./pages/GlobalStyled/GlobalStyled"
import CheckoutPage from "./pages/CheckoutPage"

export default function App() {

    const [ token, setToken ] = useState("");

    return(
        
        <BrowserRouter>
            <GlobalStyled />
            <Routes>
                <Route path="/" element={<HomePage token={token} setToken={setToken} />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/sign-in" element={<SignInPage setToken={setToken} />} />
                <Route path="/shopping-cart" element={<ShoppingCartPage token={token} />} />
                <Route path="/checkout" element={<CheckoutPage token={token} />} />
            </Routes>
        </BrowserRouter>
    );
}