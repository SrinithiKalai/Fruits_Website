import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import raisins from "../assets/raisins.jpeg";
import date from "../assets/date.jpeg";
import prune from "../assets/prune.jpg";
import fig from "../assets/fig.jpeg";
import apri from "../assets/apri.jpg";
import drycran from "../assets/drycran.jpg";
import cherries from "../assets/cherries.jpg";
import dryblue from "../assets/dryblue.jpg";
import goji from "../assets/goji.jpg";
import drymul from "../assets/drymul.jpeg";
import drymango from "../assets/drymango.jpg";
import drypine from "../assets/drypine.jpg";
import backdry from "../assets/backdry.jpg";

function DriedFruit() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/bill');
    };

    const addToCart = (fruitName, price, fruitImg) => {
        const item = { name: fruitName, price: price, img: fruitImg };
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...existingCart, item];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
        alert(`${fruitName} added to cart!`);
    };

    const driedFruits = [
        { name: "Raisins", price: 115, img: raisins },
        { name: "Dates", price: 100, img: date },
        { name: "Prunes", price: 110, img: prune },
        { name: "Fig", price: 150, img: fig },
        { name: "Apricots", price: 180, img: apri },
        { name: "Cranberries", price: 200, img: drycran },
        { name: "Cherries", price: 140, img: cherries },
        { name: "Blueberries", price: 170, img: dryblue },
        { name: "Goji Berries", price: 110, img: goji },
        { name: "Mulberries", price: 250, img: drymul },
        { name: "Dried Mango", price: 130, img: drymango },
        { name: "Dried Pineapple", price: 190, img: drypine }
    ];

    return (
        <div style={{
            backgroundImage: `url(${backdry})`, backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            padding: "20px 10px 40px"
        }}>
            <div style={{
                textAlign: "center", maxWidth: "1200px",
                margin: "0 auto"
            }}>
                <h1 style={{
                    fontSize: "clamp(28px, 5vw, 40px)",
                    fontWeight: "bold",
                    color: "black",
                    padding: "20px 0",
                    fontFamily: "cursive",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
                }}>DRIED FRUITS</h1>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "0 10px"
                }}>
                    {driedFruits.map((dried, index) => (
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
                            <img src={dried.img} alt={dried.name} style={{
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
                            }}>{dried.name}</h4>
                            <p style={{
                                fontWeight: "bold",
                                fontSize: "18px",
                                margin: "5px 0 15px"
                            }}>Price: ₹{dried.price}</p>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                marginTop: "auto"
                            }}>
                                <button onClick={() => addToCart(dried.name, dried.price, dried.img)} style={{
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

export default DriedFruit;
