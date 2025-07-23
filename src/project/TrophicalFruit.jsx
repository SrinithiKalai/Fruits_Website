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
    <div style={{backgroundImage: `url(${backtrop})`,backgroundSize: "cover",backgroundPosition: "center",paddingBottom: "40px"}}>
      <div style={{ textAlign: "center" }}>
        <p style={{fontSize: "40px",fontWeight: "bold",color: "black",paddingTop: "20px",fontFamily: "cursive"}}>TROPHICAL FRUITS</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {tropFruit.map((trophic, index) => (
            <div className='card' key={index}>
              <img src={trophic.img} alt={trophic.name} />
              <h4 style={{ fontWeight: "900" }}>{trophic.name}</h4>
              <p><b>Price:</b> ₹{trophic.price}</p>
              <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "-40px" }}>
              <button onClick={() => addToCart(trophic.name, trophic.price, trophic.img)}>Add to Cart</button>
                <button style={{backgroundColor: "green",color: "white",border: "none",padding: "5px 10px",borderRadius: "5px"}} onClick={handleNavigation}>Order Now</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default TrophicalFruit;
