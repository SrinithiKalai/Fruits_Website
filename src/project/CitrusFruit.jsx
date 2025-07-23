import React, { useState } from 'react';
import backcitrus from "../assets/backcitrus.jpeg";
import orange from "../assets/orange.jpg";
import lemon from "../assets/lemon.jpeg";
import lime from "../assets/lime.jpeg";
import mandarine from "../assets/mandarine.jpg";
import tangerine from "../assets/tangerine.jpeg";
import grapefruit from "../assets/grapefruit.jpeg";
import pomelo from "../assets/pomelo.jpg";
import kumquat from "../assets/kumquat.jpg";
import bergamot from "../assets/bergamot.jpg";
import yuzu from "../assets/yuzu.jpeg";
import calamansi from "../assets/calamansi.jpg";
import sweetlime from "../assets/sweetlime.jpeg";
import { useNavigate } from 'react-router-dom';

function CitrusFruit() {
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
    
    const citrusData = [
        { name: "Orange", price: 115, img: orange },
        { name: "Lemon", price: 100, img: lemon },
        { name: "Lime", price: 110, img: lime },
        { name: "Mandarine", price: 150, img: mandarine },
        { name: "Tangerine", price: 180, img: tangerine },
        { name: "Grapefruit", price: 200, img: grapefruit },
        { name: "Pomelo", price: 140, img: pomelo },
        { name: "Kumquat", price: 170, img: kumquat },
        { name: "Bergamot Orange", price: 110, img: bergamot },
        { name: "Yuzu", price: 250, img: yuzu },
        { name: "Calamansi", price: 130, img: calamansi },
        { name: "Sweet Lime (Mosambi)", price: 190, img: sweetlime }
    ];

    return (
        <div style={{ 
            backgroundImage: `url(${backcitrus})`, 
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
                }}>CITRUS FRUITS</h1>
                <div style={{ 
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "0 10px"
                }}>
                    {citrusData.map((citrus, index) => (
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
                                src={citrus.img} 
                                alt={citrus.name} 
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
                            }}>{citrus.name}</h4>
                            <p style={{ 
                                fontWeight: "bold",
                                fontSize: "18px",
                                margin: "5px 0 15px"
                            }}>Price: ₹{citrus.price}</p>
                            <div style={{ 
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                marginTop: "auto"
                            }}>
                                <button 
                                    onClick={() => addToCart(citrus.name, citrus.price, citrus.img)}
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

export default CitrusFruit;