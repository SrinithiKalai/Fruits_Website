import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backberry from "../assets/backberry.jpg";
import strawfruit from "../assets/strawfruit.jpeg";
import blueberry from "../assets/blueberry.jpg";
import raspberry from "../assets/raspberry.jpg";
import blackberry from "../assets/blackberry.jpg";
import cranberry from "../assets/cranberry.jpg";
import gojiberry from "../assets/gojiberry.jpeg";
import boysenberry from "../assets/boysenberry.jpg";
import elderberry from "../assets/elderberry.jpg";
import mulberry from "../assets/mulberry.jpeg";
import gooseberry from "../assets/gooseberry.jpg";
import lingonberry from "../assets/lingonberry.jpg";
import cloudberry from "../assets/cloudberry.jpg";

function Berries() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

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

    const berriesData = [
        { name: "Strawberry", price: 200, img: strawfruit },
        { name: "Blueberry", price: 150, img: blueberry },
        { name: "Raspberry", price: 120, img: raspberry },
        { name: "Blackberry", price: 140, img: blackberry },
        { name: "Cranberry", price: 190, img: cranberry },
        { name: "Goji berry", price: 250, img: gojiberry },
        { name: "Boysenberry", price: 170, img: boysenberry },
        { name: "Elderberry", price: 210, img: elderberry },
        { name: "Mulberry", price: 160, img: mulberry },
        { name: "Gooseberry", price: 120, img: gooseberry },
        { name: "Lingonberry", price: 200, img: lingonberry },
        { name: "Cloudberry", price: 230, img: cloudberry }
    ];

    return (
        <div style={{ 
            backgroundImage: `url(${backberry})`, 
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
                }}>BERRIES</h1>
                <div style={{ 
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "0 10px"
                }}>
                    {berriesData.map((berry, index) => (
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
                                src={berry.img} 
                                alt={berry.name} 
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
                            }}>{berry.name}</h4>
                            <p style={{ 
                                fontWeight: "bold",
                                fontSize: "18px",
                                margin: "5px 0 15px"
                            }}>Price: ₹{berry.price}</p>
                            <div style={{ 
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                marginTop: "auto"
                            }}>
                                <button 
                                    onClick={() => addToCart(berry.name, berry.price, berry.img)}
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

export default Berries;