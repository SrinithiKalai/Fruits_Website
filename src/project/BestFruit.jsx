import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backbest from "../assets/backbest.jpeg";
import peachbest from "../assets/peachbest.jpg";
import pearbest from "../assets/pearbest.jpg";
import sapotabest from "../assets/sapotabest.jpeg";
import kiwibest from "../assets/kiwibest.jpeg";
import bluebest from "../assets/bluebest.jpeg";
import guavabest from "../assets/guavabest.jpeg";
import dragonbest from "../assets/dragonbest.jpeg";
import jackbest from "../assets/jackbest.jpg";
import avocabest from "../assets/avocabest.jpeg";
import raspbest from "../assets/raspbest.jpeg";
import custardbest from "../assets/custardbest.jpeg";
import plumbest from "../assets/plumbest.jpg";

function BestFruit() {
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

    const fruits = [
        { name: "Peach", price: 115, img: peachbest },
        { name: "Pear", price: 100, img: pearbest },
        { name: "Chikoo (Sapodilla)", price: 110, img: sapotabest },
        { name: "Kiwi", price: 150, img: kiwibest },
        { name: "Blackberries", price: 180, img: bluebest },
        { name: "Guava", price: 200, img: guavabest },
        { name: "Dragon Fruit", price: 140, img: dragonbest },
        { name: "Jackfruit", price: 170, img: jackbest },
        { name: "Avocado", price: 110, img: avocabest },
        { name: "Raspberry", price: 250, img: raspbest },
        { name: "Custard Apple", price: 130, img: custardbest },
        { name: "Plum", price: 190, img: plumbest },
    ];

    return (
        <div style={{ 
            backgroundImage: `url(${backbest})`, 
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
                }}>BEST SELLERS</h1>
                <div style={{ 
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "0 10px"
                }}>
                    {fruits.map((best, index) => (
                        <div className='card' key={index} style={{
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
                                src={best.img} 
                                alt={best.name} 
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
                            }}>{best.name}</h4>
                            <p style={{ 
                                fontWeight: "bold",
                                fontSize: "18px",
                                margin: "5px 0 15px"
                            }}>Price: ₹{best.price}</p>
                            <div style={{ 
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                marginTop: "auto"
                            }}>
                                <button 
                                    onClick={() => addToCart(best.name, best.price, best.img)}
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

export default BestFruit;