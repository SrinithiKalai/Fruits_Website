import React, { useState } from 'react';
import durianfruit from "../assets/durianfruit.jpg";
import rambutanfruit from "../assets/rambutanfruit.jpeg";
import mangosfruit from "../assets/mangosfruit.jpeg";
import salak from "../assets/salak.jpeg";
import buddha from "../assets/buddha.jpg";
import jabufruit from "../assets/jabufruit.jpg";
import miracle from "../assets/miracle.jpeg";
import horned from "../assets/horned.jpeg";
import chayote from "../assets/chayote.jpg";
import chocolate from "../assets/chocolate.jpg";
import cupu from "../assets/cupu.jpeg";
import duku from "../assets/duku.jpg";
import backrare from "../assets/backrare.jpg";
import { useNavigate } from 'react-router-dom';

function RareFruit() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/bill');
    };

    const rarefruits = [
        { name: "Durian", price: 115, img: durianfruit },
        { name: "Rambutan", price: 100, img: rambutanfruit },
        { name: "Mangosteen", price: 110, img: mangosfruit },
        { name: "Salak (Snake Fruit)", price: 150, img: salak },
        { name: "Buddha’s Hand", price: 180, img: buddha },
        { name: "Jabuticaba", price: 200, img: jabufruit },
        { name: "Miracle Fruit", price: 140, img: miracle },
        { name: "Horned Melon (Kiwano)", price: 170, img: horned },
        { name: "Chayote", price: 110, img: chayote },
        { name: "Black Sapote", price: 250, img: chocolate },
        { name: "Cupuaçu", price: 130, img: cupu },
        { name: "Langsat (Duku)", price: 190, img: duku },
    ];
    const [cart, setCart] = useState([]);
    
        const addToCart = (fruitName, price, fruitImg) => {
            const item = { name: fruitName, price: price, img: fruitImg };
            const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
            const updatedCart = [...existingCart, item];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            setCart(updatedCart);
    
            alert(`${fruitName} added to cart!`);
        };

    return (
        <div style={{backgroundImage: `url(${backrare})`,backgroundSize: "cover",backgroundPosition: "center",minHeight: "100vh",paddingBottom: "40px"}}>
            <div style={{ textAlign: "center" }}>
                <p style={{fontSize: "40px",fontWeight: "bold",color: "black",paddingTop: "20px",fontFamily: "cursive"}}>RARE AND SPECIALTY FRUITS</p>
                <div style={{display: "flex",justifyContent: "center",gap: "20px",flexWrap: "wrap"}}>
                    {rarefruits.map((rare, index) => (
                        <div className="card" key={index}>
                            <img src={rare.img} alt={rare.name} />
                            <h4 style={{ fontWeight: "900" }}>{rare.name}</h4>
                            <p><b>Price:</b> ₹{rare.price}</p>
                            <div style={{display: "flex",justifyContent: "center",gap: "10px",marginTop: "-40px"}}>
                            <button onClick={() => addToCart(rare.name, rare.price, rare.img)}>Add to Cart</button>
                                <button style={{ backgroundColor: "green", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px" }} onClick={handleNavigation}>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RareFruit;
