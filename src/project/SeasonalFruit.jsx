import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import backseason from "../assets/backseason.jpeg";
import strawimage from "../assets/strawimage.jpeg";
import cherryfruit from "../assets/cherryfruit.jpeg";
import apricotfruit from "../assets/apricotfruit.jpeg";
import pinefruit from "../assets/pinefruit.jpg";
import waterfruit from "../assets/waterfruit.jpg";
import mangofruit from "../assets/mangofruit.jpg";
import peaches from "../assets/peaches.jpg";
import litchi from "../assets/litchi.jpg";
import redapple from "../assets/redapple.jpeg";
import pomegranate from "../assets/pomegranate.jpg";
import pears from "../assets/pears.jpg";
import figfruit from "../assets/figfruit.jpg";
import oranges from "../assets/oranges.jpg";
import persimmon from "../assets/persimmon.jpeg";
import kiwi from "../assets/kiwi.jpg";
import grapeorange from "../assets/grapeorange.jpeg";

function SeasonalFruit() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    const handleNavigation = () => {
        navigate('/bill');
    };

    const addToCart = (fruitName, price, fruitImg) => {
        const item = { name: fruitName, price: price, image: fruitImg };
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...existingCart, item];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
        alert(`${fruitName} added to cart!`);
    };

    const FruitCard = ({ image, name, price }) => (
        <div className='card'>
            <img src={image} alt={name} />
            <h4 style={{ fontWeight: "900" }}>{name}</h4>
            <p><b>Price:</b> ₹{price}</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "-40px" }}>
                <button onClick={() => addToCart(name, price)}>Add to Cart</button>
                <button
                    onClick={handleNavigation}
                    style={{ backgroundColor: "green", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px" }}
                >
                    Order Now
                </button>
            </div>
        </div>
    );

    const seasonalFruits = {
        "Spring Fruits": [
            { image: strawimage, name: "Strawberry", price: 115 },
            { image: cherryfruit, name: "Cherries", price: 100 },
            { image: apricotfruit, name: "Apricot", price: 110 },
            { image: pinefruit, name: "Pineapple", price: 150 },
        ],
        "Summer Fruits": [
            { image: waterfruit, name: "Watermelon", price: 180 },
            { image: mangofruit, name: "Mango", price: 200 },
            { image: peaches, name: "Peaches", price: 140 },
            { image: litchi, name: "Lychee", price: 170 },
        ],
        "Autumn Fruits": [
            { image: redapple, name: "Apples", price: 110 },
            { image: pomegranate, name: "Pomegranates", price: 250 },
            { image: pears, name: "Pears", price: 130 },
            { image: figfruit, name: "Figs", price: 190 },
        ],
        "Winter Fruits": [
            { image: oranges, name: "Oranges", price: 190 },
            { image: persimmon, name: "Persimmons", price: 190 },
            { image: kiwi, name: "Kiwi", price: 190 },
            { image: grapeorange, name: "Grapefruits", price: 190 },
        ]
    };

    return (
        <div style={{ backgroundImage: `url(${backseason})`, backgroundSize: "cover", backgroundPosition: "center", paddingBottom: "40px" }}>
            <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "40px", fontWeight: "bold", color: "black", paddingTop: "20px", fontFamily: "cursive" }}>SEASONAL FRUITS</p>
                {Object.entries(seasonalFruits).map(([season, fruits]) => (
                    <div key={season} style={{ width: "100%" }}>
                        <p style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold", color: "#4B0082", margin: "30px 0 10px 0", fontFamily: "cursive" }}>{season}</p>
                        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                            {fruits.map((fruit, idx) => (
                                <FruitCard key={idx} image={fruit.image} name={fruit.name} price={fruit.price} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SeasonalFruit;
