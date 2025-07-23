import React, { useState } from 'react';
import backkids from "../assets/backkids.jpg";
import bananakid from "../assets/bananakid.jpeg";
import mangokid from "../assets/mangokid.jpeg";
import strawkid from "../assets/strawkid.jpeg";
import waterkid from "../assets/waterkid.jpeg";
import grapekid from "../assets/grapekid.jpeg";
import bluekid from "../assets/bluekid.jpeg";
import pinekid from "../assets/pinekid.jpeg";
import applekid from "../assets/applekid.jpeg";
import orangekid from "../assets/orangekid.jpeg";
import peachkid from "../assets/peachkid.jpeg";
import cherrykid from "../assets/cherrykid.jpeg";
import papayakid from "../assets/papayakid.jpeg";
import { useNavigate } from 'react-router-dom';

function KidsFruit() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/bill');
    };

    const kidsFruits = [
        { name: "Banana", price: 115, img: bananakid },
        { name: "Mango", price: 100, img: mangokid },
        { name: "Strawberry", price: 110, img: strawkid },
        { name: "Watermelon", price: 150, img: waterkid },
        { name: "Grapes", price: 180, img: grapekid },
        { name: "Blueberries", price: 200, img: bluekid },
        { name: "Pineapple", price: 140, img: pinekid },
        { name: "Apple", price: 170, img: applekid },
        { name: "Orange", price: 110, img: orangekid },
        { name: "Peach", price: 250, img: peachkid },
        { name: "Cherry", price: 130, img: cherrykid },
        { name: "Papaya", price: 190, img: papayakid },
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
        <div style={{ backgroundImage: `url(${backkids})`, backgroundSize: "cover", 
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
                }}>KID'S FAVOURITE FRUITS</h1>
                <div style={{ 
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "0 10px"
                }}>
                    {kidsFruits.map((kids, index) => (
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
                            <img src={kids.img} alt={kids.name} style={{
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
                            }}>{kids.name}</h4>
                            <p style={{ 
                                fontWeight: "bold",
                                fontSize: "18px",
                                margin: "5px 0 15px"
                            }}>Price: ₹{kids.price}</p>
                            <div style={{ 
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                marginTop: "auto"
                            }}>
                                <button onClick={() => addToCart(kids.name, kids.price, kids.img)} style={{
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

export default KidsFruit;
