import React, { useState } from 'react';
import appleimage from "../assets/appleimage.jpeg";
import bananafruit from "../assets/bananafruit.jpeg";
import strawberries from "../assets/strawberries.jpg";
import blueberries from "../assets/blueberries.jpeg";
import yellowmango from "../assets/yellowmango.jpeg";
import greengrape from "../assets/greengrape.jpeg";
import pineyellow from "../assets/pineyellow.jpeg";
import pomo from "../assets/pomo.jpg";
import orangefruit from "../assets/orangefruit.jpg";
import papayapic from "../assets/papayapic.jpeg";
import waterpic from "../assets/waterpic.jpeg";
import avocado from "../assets/avocado.jpeg";
import backorganic from "../assets/backorganic.jpeg";
import { useNavigate } from 'react-router-dom';

function FruitOrganic() {
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

    const organicData = [
        { name: "Apples", price: 115, img: appleimage },
        { name: "Bananas", price: 100, img: bananafruit },
        { name: "Strawberries", price: 110, img: strawberries },
        { name: "Blueberries", price: 150, img: blueberries },
        { name: "Mangoes", price: 180, img: yellowmango },
        { name: "Grapes", price: 200, img: greengrape },
        { name: "Pineapples", price: 140, img: pineyellow },
        { name: "Pomegranates", price: 170, img: pomo },
        { name: "Oranges", price: 110, img: orangefruit },
        { name: "Papayas", price: 250, img: papayapic },
        { name: "Watermelons", price: 130, img: waterpic },
        { name: "Avocados", price: 190, img: avocado }
    ];

    return (
        <div>
            <div style={{ backgroundImage: `url(${backorganic})`, backgroundSize: "cover", 
            backgroundPosition: "center", 
            minHeight: "100vh",
            padding: "20px 10px 40px" }}>
                <div style={{ textAlign: "center", maxWidth: "1200px",
                margin: "0 auto" }}>
                    <h1 style={{ 
                    fontSize: "clamp(28px, 5vw, 40px)", 
                    fontWeight: "bold", 
                    color: "black", 
                    padding: "20px 0",
                    fontFamily: "cursive",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
                }}>ORGANIC FRUITS</h1>
                    <div style={{ 
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "0 10px"
                }}>
                        {organicData.map((organic, index) => (
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
                                <img src={organic.img} alt={organic.name} style={{
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
                            }}>{organic.name}</h4>
                                <p style={{ 
                                fontWeight: "bold",
                                fontSize: "18px",
                                margin: "5px 0 15px"
                            }}>Price: ₹{organic.price}</p>
                                <div style={{ 
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                marginTop: "auto"
                            }}>
                                <button onClick={() => addToCart(organic.name, organic.price, organic.img)} style={{
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

export default FruitOrganic;
