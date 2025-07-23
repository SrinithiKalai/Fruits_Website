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
        <div style={{backgroundImage: `url(${backrare})`,backgroundSize: "cover", 
            backgroundPosition: "center", 
            minHeight: "100vh",
            padding: "20px 10px 40px"}}>
            <div style={{ textAlign: "center", maxWidth: "1200px",
                margin: "0 auto" }}>
                <h1 style={{ 
                    fontSize: "clamp(28px, 5vw, 40px)", 
                    fontWeight: "bold", 
                    color: "black", 
                    padding: "20px 0",
                    fontFamily: "cursive",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
                }}>RARE AND SPECIALTY FRUITS</h1>
                <div style={{ 
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "0 10px"
                }}>
                    {rarefruits.map((rare, index) => (
                        <div key={index} style={{
                            background: "white",
                            borderRadius: "10px",
                            padding: "15px",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            transition: "transform 0.3s ease",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <img src={rare.img} alt={rare.name} style={{
                                    width: "100%",
                                    height: "180px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                    marginBottom: "15px"
                                }}/>
                            <h4 style={{ 
                                fontWeight: "900",
                                fontSize: "clamp(16px, 3vw, 20px)",
                                margin: "5px 0",
                                textAlign: "center"
                            }}>{rare.name}</h4>
                            <p style={{ 
                                fontWeight: "bold",
                                fontSize: "18px",
                                margin: "5px 0 15px"
                            }}>Price: ₹{rare.price}</p>
                            <div style={{ 
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                marginTop: "auto"
                            }}>
                            <button onClick={() => addToCart(rare.name, rare.price, rare.img)} style={{
                                        backgroundColor: "#ff6b6b",
                                        color: "white",
                                        border: "none",
                                        padding: "8px 15px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        flex: 1
                                    }}>Add to Cart</button>
                                <button style={{ 
                                        backgroundColor: "green", 
                                        color: "white", 
                                        border: "none", 
                                        padding: "8px 15px", 
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        flex: 1
                                    }} onClick={handleNavigation}>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RareFruit;
