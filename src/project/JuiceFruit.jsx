import React, { useState } from 'react';
import orangejuice from "../assets/orangejuice.jpeg";
import waterjuice from "../assets/waterjuice.jpeg";
import pinejuice from "../assets/pinejuice.jpeg";
import applejuice from "../assets/applejuice.jpeg";
import guavajuice from "../assets/guavajuice.jpeg";
import pomejuice from "../assets/pomejuice.jpeg";
import grapejuice from "../assets/grapejuice.jpeg";
import lemonjuice from "../assets/lemonjuice.jpeg";
import mangojuice from "../assets/mangojuice.jpeg";
import kiwijuice from "../assets/kiwijuice.jpeg";
import papayajuice from "../assets/papayajuice.jpeg";
import strawjuice from "../assets/strawjuice.jpg";
import backjuice from "../assets/backjuice.jpeg";
import { useNavigate } from 'react-router-dom';

function JuiceFruit() {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/bill');
    };
    const [cart, setCart] = useState([]);
        const addToCart = (fruitName, price, fruitImg) => {
            const item = { name: fruitName, price: price, img: fruitImg };
            const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
            const updatedCart = [...existingCart, item];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            setCart(updatedCart);
            alert(`${fruitName} added to cart!`);
        };

    const juiceFruits = [
        { name: "Orange", price: 115, img: orangejuice },
        { name: "Watermelon", price: 100, img: waterjuice },
        { name: "Pineapple", price: 110, img: pinejuice },
        { name: "Apple", price: 150, img: applejuice },
        { name: "Guava", price: 180, img: guavajuice },
        { name: "Pomegranate", price: 200, img: pomejuice },
        { name: "Grapes", price: 140, img: grapejuice },
        { name: "Lemon", price: 170, img: lemonjuice },
        { name: "Mango", price: 110, img: mangojuice },
        { name: "Kiwi", price: 250, img: kiwijuice },
        { name: "Papaya", price: 130, img: papayajuice },
        { name: "Strawberry", price: 190, img: strawjuice }
    ];

    return (
        <div>
            <div style={{ backgroundImage: `url(${backjuice})`, backgroundSize: "cover", 
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
                }}>JUICING FRUITS</h1>
                    <div style={{ 
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "0 10px"
                }}>
                        {juiceFruits.map((juice, index) => (
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
                                <img src={juice.img} alt={juice.name} style={{
                                    width: "100%",
                                    height: "180px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                    marginBottom: "15px"
                                }} />
                                <h4 style={{ 
                                fontWeight: "900",
                                fontSize: "clamp(16px, 3vw, 20px)",
                                margin: "5px 0",
                                textAlign: "center"
                            }}>{juice.name}</h4>
                                <p style={{ 
                                fontWeight: "bold",
                                fontSize: "18px",
                                margin: "5px 0 15px"
                            }}>Price: ₹{juice.price}</p>
                                <div style={{ 
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                marginTop: "auto"
                            }}>
                                <button onClick={() => addToCart(juice.name, juice.price, juice.img)} style={{
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
        </div>
    );
}

export default JuiceFruit;
