import './App.css'
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Home } from "./home";
import { Shop } from "./shop";
import { Cart } from "./cart";

export default function App() {
    const [purchaseds, setPurchaseds] = useState([]);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/shop"
                element={
                    <Shop
                        purchaseds={purchaseds}
                        setPurchaseds={setPurchaseds}
                    />
                }
            />
            <Route
                path="/cart"
                element={
                    <Cart purchaseds={purchaseds} 
                    setPurchaseds={setPurchaseds}
                    />
                }
            />
        </Routes>
    );
}