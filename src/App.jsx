
import './App.css'
import { Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Shop } from "./shop";
import { Cart } from "./cart";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
}
