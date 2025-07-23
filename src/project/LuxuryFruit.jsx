import React, { useState } from 'react';
import yubari from "../assets/yubari.jpg";
import ruby from "../assets/ruby.jpg";
import den from "../assets/den.jpg";
import taiyo from "../assets/taiyo.jpg";
import hand from "../assets/hand.jpeg";
import pinkapple from "../assets/pinkapple.jpg";
import white from "../assets/white.jpeg";
import zill from "../assets/zill.jpeg";
import mir from "../assets/mir.jpg";
import dur from "../assets/dur.jpeg";
import man from "../assets/man.jpeg";
import black from "../assets/black.jpeg";
import backlux from "../assets/backlux.jpg";
import { useNavigate } from 'react-router-dom';

function LuxuryFruit() {
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

    const luxuryFruits = [
        { name: "Yubari King Melon", price: 115, img: yubari },
        { name: "Ruby Roman Grapes", price: 100, img: ruby },
        { name: "Densuke Watermelon", price: 110, img: den },
        { name: "Taiyo no Tamago Mango", price: 150, img: taiyo },
        { name: "Buddha’s Hand", price: 180, img: hand },
        { name: "Pink Pearl Apple", price: 200, img: pinkapple },
        { name: "White Strawberry", price: 140, img: white },
        { name: "Zill Mango", price: 170, img: zill },
        { name: "Miracle Fruit", price: 110, img: mir },
        { name: "Durian (Premium Grade)", price: 250, img: dur },
        { name: "Mangosteen", price: 130, img: man },
        { name: "Kyoho Grapes", price: 190, img: black },
    ];

    return (
            <div style={{backgroundImage: `url(${backlux})`,backgroundSize: "cover", 
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
                }}>LUXURY FRUITS</h1>
                        <div style={{ 
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "0 10px"
                }}>
                        {luxuryFruits.map((luxury, index) => (
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
                                <img src={luxury.img} alt={luxury.name} style={{
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
                            }}>{luxury.name}</h4>
                                <p style={{ 
                                fontWeight: "bold",
                                fontSize: "18px",
                                margin: "5px 0 15px"
                            }}>Price: ₹{luxury.price}</p>
                                <div style={{ 
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                marginTop: "auto"
                            }}>
                                <button onClick={() => addToCart(luxury.name, luxury.price, luxury.img)} style={{
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

export default LuxuryFruit;
