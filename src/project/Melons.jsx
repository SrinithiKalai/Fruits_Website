import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importing all melon images
import watermelon from "../assets/watermelon.jpg";
import muskmelon from "../assets/muskmelon.jpeg";
import honeydew from "../assets/honeydew.jpg";
import galiamelon from "../assets/galiamelon.jpeg";
import canarymelon from "../assets/canarymelon.jpg";
import santamelon from "../assets/santamelon.jpg";
import hamimelon from "../assets/hamimelon.jpeg";
import koreanmelon from "../assets/koreanmelon.png";
import crenshaw from "../assets/crenshaw.jpeg";
import casabamelon from "../assets/casabamelon.jpeg";
import charentais from "../assets/charentais.jpg";
import sugarmelon from "../assets/sugarmelon.jpg";
import backmelon from "../assets/backmelon.jpeg";

// Melon data array
const melonData = [
  { name: "Watermelon", price: 115, img: watermelon },
  { name: "Cantaloupe (Muskmelon)", price: 100, img: muskmelon },
  { name: "Honeydew Melon", price: 110, img: honeydew },
  { name: "Galia Melon", price: 150, img: galiamelon },
  { name: "Canary Melon", price: 180, img: canarymelon },
  { name: "Santa Claus Melon", price: 200, img: santamelon },
  { name: "Hami Melon", price: 140, img: hamimelon },
  { name: "Korean Melon", price: 170, img: koreanmelon },
  { name: "Crenshaw Melon", price: 110, img: crenshaw },
  { name: "Casaba Melon", price: 250, img: casabamelon },
  { name: "Charentais Melon", price: 130, img: charentais },
  { name: "Sugar Kiss Melon", price: 190, img: sugarmelon },
];

function Melons() {
  const navigate = useNavigate();
  const handleNavigation = () => navigate('/bill');
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
    <div style={{backgroundImage: `url(${backmelon})`,backgroundSize: "cover", 
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
                }}>MELONS</h1>
        <div style={{ 
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "0 10px"
                }}>
          {melonData.map((melon, index) => (
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
              <img src={melon.img} alt={melon.name} style={{
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
                            }}>{melon.name}</h4>
              <p style={{ 
                                fontWeight: "bold",
                                fontSize: "18px",
                                margin: "5px 0 15px"
                            }}>Price: ₹{melon.price}</p>
              <div style={{ 
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                marginTop: "auto"
                            }}>
              <button onClick={() => addToCart(melon.name, melon.price, melon.img)} style={{
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

export default Melons;
