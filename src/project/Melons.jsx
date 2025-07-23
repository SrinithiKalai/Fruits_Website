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
    <div style={{backgroundImage: `url(${backmelon})`,backgroundSize: "cover",backgroundPosition: "center",paddingBottom: "40px"}}>
      <div style={{ textAlign: "center" }}>
        <p style={{fontSize: "40px",fontWeight: "bold",color: "black",paddingTop: "20px",fontFamily: "cursive"}}>MELONS</p>
        <div style={{display: "flex",justifyContent: "center",gap: "20px",flexWrap: "wrap"}}>
          {melonData.map((melon, index) => (
            <div className="card" key={index}>
              <img src={melon.img} alt={melon.name} />
              <h4 style={{ fontWeight: "900" }}>{melon.name}</h4>
              <p><b>Price:</b> ₹{melon.price}</p>
              <div style={{display: "flex",justifyContent: "center",gap: "10px",marginTop: "-40px"}}>
              <button onClick={() => addToCart(melon.name, melon.price, melon.img)}>Add to Cart</button>
                <button style={{backgroundColor: "green",color: "white", border: "none",padding: "5px 10px",borderRadius: "5px"}}onClick={handleNavigation}>Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Melons;
