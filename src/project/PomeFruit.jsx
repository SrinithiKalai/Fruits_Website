import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import applefruit from "../assets/applefruit.jpeg";
import pear from "../assets/pear.jpg";
import quince from "../assets/quince.jpg";
import loquat from "../assets/loquat.jpg";
import medlar from "../assets/medlar.jpg";
import nashi from "../assets/nashi.jpeg";
import crabapple from "../assets/crabapple.jpg";
import mayhaw from "../assets/mayhaw.jpg";
import rowan from "../assets/rowan.jpg";
import serviceberry from "../assets/serviceberry.jpg";
import hawthorn from "../assets/hawthorn.jpg";
import chokeberry from "../assets/chokeberry.jpg";
import backpome from "../assets/backpome.jpeg";

function PomeFruit() {
    const navigate = useNavigate();
    const handleNavigation = () => navigate('/bill');
    const pomeData = [
        { name: "Apple", price: 115, img: applefruit },
        { name: "Pear", price: 100, img: pear },
        { name: "Quince", price: 110, img: quince },
        { name: "Loquat", price: 150, img: loquat },
        { name: "Medlar", price: 180, img: medlar },
        { name: "Asian Pear (Nashi Pear)", price: 200, img: nashi },
        { name: "Crabapple", price: 140, img: crabapple },
        { name: "Mayhaw", price: 170, img: mayhaw },
        { name: "Rowan Berry (Mountain Ash)", price: 110, img: rowan },
        { name: "Serviceberry", price: 250, img: serviceberry },
        { name: "Hawthorn Fruit", price: 130, img: hawthorn },
        { name: "Chokeberry", price: 190, img: chokeberry },
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
        <div style={{ backgroundImage: `url(${backpome})`, backgroundSize: "cover", 
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
                }}>POME FRUITS</h1>
                <div style={{ 
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "0 10px"
                }}>
                    {pomeData.map((pome, index) => (
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
                            <img src={pome.img} alt={pome.name} style={{
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
                            }}>{pome.name}</h4>
                            <p style={{ 
                                fontWeight: "bold",
                                fontSize: "18px",
                                margin: "5px 0 15px"
                            }}>Price: ₹{pome.price}</p>
                            <div style={{ 
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                marginTop: "auto"
                            }}>
                                <button onClick={() => addToCart(pome.name, pome.price, pome.img)} style={{
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

export default PomeFruit;
