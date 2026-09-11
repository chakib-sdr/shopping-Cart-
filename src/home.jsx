import {useState,useEffect} from "react";
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

function Title() {
    return(
        <div className = "title">
            <h1>Welcome To The Shop</h1>
            <p>Everything you need, in one place.
            Quality products, fast shipping, and a shopping experience that doesn't waste your time.
            </p>
            <h4>Some of our sales</h4>
        </div>
    )
}

async function getproduct(id) {
    try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if(!res.ok){
        throw new Error("error");
    }
    const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Une erreur est survenue :", error.message);
        throw error;
    }

}


function Recommendation() {
    const [id1, setid1] = useState(1);
    const [id2, setid2] = useState(2);
    const [id3, setid3] = useState(3);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function waiting() {
            const result = [];
            const data1 = await getproduct(id1);
            const data2 = await getproduct(id2);
            const data3 = await getproduct(id3);
            
            result.push(data1, data2, data3); 
            setProducts(result); 
        }
        waiting();
    }, []);

    if (products.length === 0) {
        return <div></div>;
    }

    return (
        <div className="recommendation">
            <div>
                <h4>{products[0].title}</h4>
                <img src={products[0].image} alt={products[0].title} style={{ width: "100px" }} />
                <p>${products[0].price}</p>
            </div>
            <div>
                <h4>{products[1].title}</h4>
                <img src={products[1].image} alt={products[1].title} style={{ width: "100px" }} />
                <p>${products[1].price}</p>
            </div>
            <div>
                <h4>{products[2].title}</h4>
                <img src={products[2].image} alt={products[2].title} style={{ width: "100px" }} />
                <p>${products[2].price}</p>
            </div>
        </div>
    );
}

export function Home() {
    return (
        <>
            <Header />
            <Title />
            <Recommendation />
        </>
    );
}
