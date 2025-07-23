import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backstone from "../assets/backstone.jpg";
import peachfruit from "../assets/peachfruit.jpg";
import plumfruit from "../assets/plumfruit.jpg";
import cherry from "../assets/cherry.jpg";
import apricot from "../assets/apricot.jpg";
import nectarine from "../assets/nectarine.jpg";
import mango from "../assets/mango.jpg";
import lychee from "../assets/lychee.jpg";
import olive from "../assets/olive.jpg";
import dates from "../assets/dates.jpeg";
import blackfruit from "../assets/blackfruit.jpg";
import coconut from "../assets/coconut.jpeg";
import jujube from "../assets/jujube.jpg";

function Stonefruit() {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/bill');
    };
    const [cart, setCart] = useState([]);

    const addToCart = (fruitName, price, fruitImg ) => {
        const item = { name: fruitName, price: price, img: fruitImg };
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...existingCart, item];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);

        alert(`${fruitName} added to cart!`);
    };

    const stoneFruit = [
        { name: "Peach", price: 115, img: peachfruit },
        { name: "Plum", price: 100, img: plumfruit },
        { name: "Cherry", price: 110, img: cherry },
        { name: "Apricot", price: 150, img: apricot },
        { name: "Nectarine", price: 180, img: nectarine },
        { name: "Mango", price: 200, img: mango },
        { name: "Lychee", price: 140, img: lychee },
        { name: "Olive", price: 170, img: olive },
        { name: "Dates", price: 110, img: dates },
        { name: "Black Sapote", price: 250, img: blackfruit },
        { name: "Coconut", price: 130, img: coconut },
        { name: "Jujube", price: 190, img: jujube },
    ];

    return (
        <div style={{ backgroundImage: `url(${backstone})`, backgroundSize: "cover", 
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
                }}>STONE FRUITS</h1>
                <div style={{ 
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "0 10px"
                }}>
                    {stoneFruit.map((stone, index) => (
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
                            <img src={stone.img} alt={stone.name} style={{
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
                            }}>{stone.name}</h4>
                            <p style={{ 
                                fontWeight: "bold",
                                fontSize: "18px",
                                margin: "5px 0 15px"
                            }}>Price: ₹{stone.price}</p>
                            <div style={{ 
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                marginTop: "auto"
                            }}>
                                <button onClick={() => addToCart(stone.name, stone.price, stone.img)} style={{
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

export default Stonefruit;
