import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import mangoes from "../assets/mangoes.jpeg";
import pine from "../assets/pine.jpg";
import papaya from "../assets/papaya.jpg";
import banana from "../assets/banana.jpg";
import coco from "../assets/coco.jpeg";
import guava from "../assets/guava.jpg";
import passionfruit from "../assets/passionfruit.jpeg";
import dragonfruit from "../assets/dragonfruit.jpeg";
import lycheefruit from "../assets/lycheefruit.jpeg";
import rambutan from "../assets/rambutan.jpg";
import starfruit from "../assets/starfruit.jpg";
import jackfruit from "../assets/jackfruit.jpeg";
import backtrop from "../assets/backtrop.jpeg";

function TrophicalFruit() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/bill');
  };
  const tropFruit = [
    { name: "Mango", price: 115, img: mangoes },
    { name: "Pine Apple", price: 100, img: pine },
    { name: "Papaya", price: 110, img: papaya },
    { name: "Banana", price: 150, img: banana },
    { name: "Coconut", price: 180, img: coco },
    { name: "Guava", price: 200, img: guava },
    { name: "Passion Fruit", price: 140, img: passionfruit },
    { name: "Dragon Fruit (Pitaya)", price: 170, img: dragonfruit },
    { name: "Lychee", price: 110, img: lycheefruit },
    { name: "Rambutan", price: 250, img: rambutan },
    { name: "Star Fruit (Carambola)", price: 130, img: starfruit },
    { name: "Jackfruit", price: 190, img: jackfruit },
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
    <div style={{backgroundImage: `url(${backtrop})`,backgroundSize: "cover", 
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
                }}>TROPHICAL FRUITS</h1>
        <div style={{ 
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "0 10px"
                }}>
          {tropFruit.map((trophic, index) => (
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
              <img src={trophic.img} alt={trophic.name} style={{
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
                            }}>{trophic.name}</h4>
              <p style={{ 
                                fontWeight: "bold",
                                fontSize: "18px",
                                margin: "5px 0 15px"
                            }}>Price: ₹{trophic.price}</p>
              <div style={{ 
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                marginTop: "auto"
                            }}>
              <button onClick={() => addToCart(trophic.name, trophic.price, trophic.img)} style={{
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

export default TrophicalFruit;
