import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className = "headercontainer">

        <img src="/shop-svgrepo-com.svg" alt="Shop"/>
        
            <div>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
            </div>

        </div>
    )
    }
export function Cart() {
    return(
        <div>
        <Header></Header>
        <h1>Cart</h1>;
        </div>

    ) 
}