import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bananapic from "../assets/bananapic.jpeg";
import applepic from "../assets/applepic.jpeg";
import papayafruit from "../assets/papayafruit.jpg";
import melonfruit from "../assets/melonfruit.jpeg";
import orangepic from "../assets/orangepic.jpg";
import guavapic from "../assets/guavapic.jpeg";
import musk from "../assets/musk.jpeg";
import sweet from "../assets/sweet.jpeg";
import pinepic from "../assets/pinepic.jpg";
import sapota from "../assets/sapota.jpeg";
import custard from "../assets/custard.jpeg";
import ber from "../assets/ber.jpeg";
import backbadget from "../assets/backbadget.jpg";

function BudgetFruit() {
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
    
    const budgetFruit = [
        { name: "Banana", price: 115, img: bananapic },
        { name: "Apple", price: 100, img: applepic },
        { name: "Papaya", price: 110, img: papayafruit },
        { name: "Watermelon", price: 150, img: melonfruit },
        { name: "Orange", price: 180, img: orangepic },
        { name: "Guava", price: 200, img: guavapic },
        { name: "Musk Melon", price: 140, img: musk },
        { name: "Sweet Lime (Mosambi)", price: 170, img: sweet },
        { name: "Pineapple", price: 110, img: pinepic },
        { name: "Sapota (Chikoo)", price: 250, img: sapota },
        { name: "Custard Apple", price: 130, img: custard },
        { name: "Ber (Indian Jujube)", price: 190, img: ber },
    ];

    return (
        <div style={{ 
            backgroundImage: `url(${backbadget})`, 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            minHeight: "100vh",
            padding: "20px 10px 40px"
        }}>
            <div style={{ 
                textAlign: "center",
                maxWidth: "1200px",
                margin: "0 auto"
            }}>
                <h1 style={{ 
                    fontSize: "clamp(28px, 5vw, 40px)", 
                    fontWeight: "bold", 
                    color: "black", 
                    padding: "20px 0",
                    fontFamily: "cursive",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
                }}>BUDGET-FRIENDLY FRUITS</h1>
                
                <div style={{ 
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "0 10px"
                }}>
                    {budgetFruit.map((budget, index) => (
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
                            <img 
                                src={budget.img} 
                                alt={budget.name} 
                                style={{
                                    width: "100%",
                                    height: "180px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                    marginBottom: "15px"
                                }} 
                            />
                            <h4 style={{ 
                                fontWeight: "900",
                                fontSize: "clamp(16px, 3vw, 20px)",
                                margin: "5px 0",
                                textAlign: "center"
                            }}>{budget.name}</h4>
                            <p style={{ 
                                fontWeight: "bold",
                                fontSize: "18px",
                                margin: "5px 0 15px"
                            }}>Price: ₹{budget.price}</p>
                            <div style={{ 
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                marginTop: "auto"
                            }}>
                                <button 
                                    onClick={() => addToCart(budget.name, budget.price, budget.img)}
                                    style={{
                                        backgroundColor: "#ff6b6b",
                                        color: "white",
                                        border: "none",
                                        padding: "8px 15px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        flex: 1
                                    }}
                                >
                                    Add to Cart
                                </button>
                                <button 
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
                                    onClick={handleNavigation}
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BudgetFruit;