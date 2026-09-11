import {useState} from "react";
import { Link } from "react-router-dom";

function Header() {
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



function Show({ purchaseds , setPurchaseds}) {
    return purchaseds.map((purchased,index) => (
        <div className="itemcontainer" key={index}>

            <p>{purchased.title}</p>

            <img
                className="itemimage"
                src={purchased.image}
                alt={purchased.title}
            />

            <p>{purchased.price} $</p>

            <p>{purchased.description}</p>

            <button onClick={ () =>
                setPurchaseds(prev => prev.filter((_, i) => i !== index))
            }

            >Remove</button>

        </div>
    ));
}

export function Cart({purchaseds,setPurchaseds}) {
    return(
        <div>
        <Header></Header>
        <Show purchaseds={purchaseds} setPurchaseds={setPurchaseds} ></Show>
        </div>

    ) 
}