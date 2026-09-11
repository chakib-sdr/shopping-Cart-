import {useEffect , useState} from "react";
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



function Content({ setPurchaseds }) {

    const [items , setitems] = useState([]);

    useEffect ( () => {

    async function getallproduct() {
         try {
        const res = await fetch("https://fakestoreapi.com/products");
        if(!res.ok){
            throw new Error("error");
        }
        const data = await res.json();
            console.log(data);
        setitems(data);
        } catch (error) {
            console.error("Une erreur est survenue :", error.message);
        throw error;
        }
    }
    getallproduct();
}, []);
    if(items.length === 0){
        return <div></div>;
    }
    return(
      items.map((item) => (
 
        <div className = "itemcontainer" key={item.id} >
          <p>{item.title}</p>
          <img className = "itemimage" src={item.image} alt={item.title}/>
          <p>{item.price} $</p>
          <p>{item.description}</p>
          <button onClick={() => setPurchaseds(prev => [...prev, item])} >Purchase</button>
        </div>
      ))
    )
};

export function Shop({setPurchaseds}) {
    return(
        <div>
        <Header></Header>
        <Content setPurchaseds={setPurchaseds} ></Content>
        </div>

    )
}
