import React, { useState } from 'react';
import orangejuice from "../assets/orangejuice.jpeg";
import waterjuice from "../assets/waterjuice.jpeg";
import pinejuice from "../assets/pinejuice.jpeg";
import applejuice from "../assets/applejuice.jpeg";
import guavajuice from "../assets/guavajuice.jpeg";
import pomejuice from "../assets/pomejuice.jpeg";
import grapejuice from "../assets/grapejuice.jpeg";
import lemonjuice from "../assets/lemonjuice.jpeg";
import mangojuice from "../assets/mangojuice.jpeg";
import kiwijuice from "../assets/kiwijuice.jpeg";
import papayajuice from "../assets/papayajuice.jpeg";
import strawjuice from "../assets/strawjuice.jpg";
import backjuice from "../assets/backjuice.jpeg";
import { useNavigate } from 'react-router-dom';

function JuiceFruit() {
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

    const juiceFruits = [
        { name: "Orange", price: 115, img: orangejuice },
        { name: "Watermelon", price: 100, img: waterjuice },
        { name: "Pineapple", price: 110, img: pinejuice },
        { name: "Apple", price: 150, img: applejuice },
        { name: "Guava", price: 180, img: guavajuice },
        { name: "Pomegranate", price: 200, img: pomejuice },
        { name: "Grapes", price: 140, img: grapejuice },
        { name: "Lemon", price: 170, img: lemonjuice },
        { name: "Mango", price: 110, img: mangojuice },
        { name: "Kiwi", price: 250, img: kiwijuice },
        { name: "Papaya", price: 130, img: papayajuice },
        { name: "Strawberry", price: 190, img: strawjuice }
    ];

    return (
        <div>
            <div style={{ backgroundImage: `url(${backjuice})`, backgroundSize: "cover", backgroundPosition: "center", height: "100%", paddingBottom: "40px" }}>
                <div style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "40px", fontWeight: "bold", color: "black", paddingTop: "20px", fontFamily: "cursive" }}>JUICING FRUITS</p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                        {juiceFruits.map((juice, index) => (
                            <div className='card' key={index}>
                                <img src={juice.img} alt={juice.name} />
                                <h4 style={{ fontWeight: "900" }}>{juice.name}</h4>
                                <p><b>Price:</b> ₹{juice.price}</p>
                                <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "-40px" }}>
                                <button onClick={() => addToCart(juice.name, juice.price, juice.img)}>Add to Cart</button>
                                    <button style={{backgroundColor: "green",color: "white",border: "none",padding: "5px 10px",borderRadius: "5px"}}onClick={handleNavigation}>Order Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JuiceFruit;
