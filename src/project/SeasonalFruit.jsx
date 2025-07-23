import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import backseason from "../assets/backseason.jpeg";
import strawimage from "../assets/strawimage.jpeg";
import cherryfruit from "../assets/cherryfruit.jpeg";
import apricotfruit from "../assets/apricotfruit.jpeg";
import pinefruit from "../assets/pinefruit.jpg";
import waterfruit from "../assets/waterfruit.jpg";
import mangofruit from "../assets/mangofruit.jpg";
import peaches from "../assets/peaches.jpg";
import litchi from "../assets/litchi.jpg";
import redapple from "../assets/redapple.jpeg";
import pomegranate from "../assets/pomegranate.jpg";
import pears from "../assets/pears.jpg";
import figfruit from "../assets/figfruit.jpg";
import oranges from "../assets/oranges.jpg";
import persimmon from "../assets/persimmon.jpeg";
import kiwi from "../assets/kiwi.jpg";
import grapeorange from "../assets/grapeorange.jpeg";

function SeasonalFruit() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    const handleNavigation = () => {
        navigate('/bill');
    };

    const addToCart = (fruitName, price, fruitImg) => {
        const item = { name: fruitName, price: price, image: fruitImg };
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...existingCart, item];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
        alert(`${fruitName} added to cart!`);
    };

    const FruitCard = ({ image, name, price }) => (
        <div style={{
                            background: "white",
                            borderRadius: "10px",
                            padding: "15px",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            transition: "transform 0.3s ease",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
            <img src={image} alt={name} style={{
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
                            }}>{name}</h4>
            <p style={{ 
                                fontWeight: "bold",
                                fontSize: "18px",
                                margin: "5px 0 15px"
                            }}>Price: ₹{price}</p>
            <div style={{ 
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                marginTop: "auto"
                            }}>
                <button onClick={() => addToCart(name, price)} style={{
                                        backgroundColor: "#ff6b6b",
                                        color: "white",
                                        border: "none",
                                        padding: "8px 15px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        flex: 1
                                    }}>Add to Cart</button>
                <button
                    onClick={handleNavigation}
                    style={{ 
                                        backgroundColor: "green", 
                                        color: "white", 
                                        border: "none", 
                                        padding: "8px 15px", 
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        flex: 1
                                    }}
                >
                    Order Now
                </button>
            </div>
        </div>
    );

    const seasonalFruits = {
        "Spring Fruits": [
            { image: strawimage, name: "Strawberry", price: 115 },
            { image: cherryfruit, name: "Cherries", price: 100 },
            { image: apricotfruit, name: "Apricot", price: 110 },
            { image: pinefruit, name: "Pineapple", price: 150 },
        ],
        "Summer Fruits": [
            { image: waterfruit, name: "Watermelon", price: 180 },
            { image: mangofruit, name: "Mango", price: 200 },
            { image: peaches, name: "Peaches", price: 140 },
            { image: litchi, name: "Lychee", price: 170 },
        ],
        "Autumn Fruits": [
            { image: redapple, name: "Apples", price: 110 },
            { image: pomegranate, name: "Pomegranates", price: 250 },
            { image: pears, name: "Pears", price: 130 },
            { image: figfruit, name: "Figs", price: 190 },
        ],
        "Winter Fruits": [
            { image: oranges, name: "Oranges", price: 190 },
            { image: persimmon, name: "Persimmons", price: 190 },
            { image: kiwi, name: "Kiwi", price: 190 },
            { image: grapeorange, name: "Grapefruits", price: 190 },
        ]
    };

    return (
        <div style={{ backgroundImage: `url(${backseason})`, backgroundSize: "cover", 
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
                }}>SEASONAL FRUITS</h1>
                {Object.entries(seasonalFruits).map(([season, fruits]) => (
                    <div key={season} style={{ width: "100%" }}>
                        <p style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold", color: "#4B0082", margin: "30px 0 10px 0", fontFamily: "cursive" }}>{season}</p>
                        <div style={{ 
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "0 10px"
                }}>
                            {fruits.map((fruit, idx) => (
                                <FruitCard key={idx} image={fruit.image} name={fruit.name} price={fruit.price} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SeasonalFruit;
