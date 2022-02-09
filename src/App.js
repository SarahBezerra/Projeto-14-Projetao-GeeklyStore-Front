import { React } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage/index"
import SignInPage from "./pages/SignInPage/index"
import SignUpPage from "./pages/SignUpPage/index"
import ShoppingCartPage from "./pages/ShoppingCartPage/index"

export default function App() {

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/login" element={<SignInPage />} />
                <Route path="/carrinho_de_compras" element={<ShoppingCartPage />} />
            </Routes>
        </BrowserRouter>
    );
}