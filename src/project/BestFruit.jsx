import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backbest from "../assets/backbest.jpeg";
import peachbest from "../assets/peachbest.jpg";
import pearbest from "../assets/pearbest.jpg";
import sapotabest from "../assets/sapotabest.jpeg";
import kiwibest from "../assets/kiwibest.jpeg";
import bluebest from "../assets/bluebest.jpeg";
import guavabest from "../assets/guavabest.jpeg";
import dragonbest from "../assets/dragonbest.jpeg";
import jackbest from "../assets/jackbest.jpg";
import avocabest from "../assets/avocabest.jpeg";
import raspbest from "../assets/raspbest.jpeg";
import custardbest from "../assets/custardbest.jpeg";
import plumbest from "../assets/plumbest.jpg";

function BestFruit() {
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

    const fruits = [
        { name: "Peach", price: 115, img: peachbest },
        { name: "Pear", price: 100, img: pearbest },
        { name: "Chikoo (Sapodilla)", price: 110, img: sapotabest },
        { name: "Kiwi", price: 150, img: kiwibest },
        { name: "Blackberries", price: 180, img: bluebest },
        { name: "Guava", price: 200, img: guavabest },
        { name: "Dragon Fruit", price: 140, img: dragonbest },
        { name: "Jackfruit", price: 170, img: jackbest },
        { name: "Avocado", price: 110, img: avocabest },
        { name: "Raspberry", price: 250, img: raspbest },
        { name: "Custard Apple", price: 130, img: custardbest },
        { name: "Plum", price: 190, img: plumbest },
    ];

    return (
        <div>
            <div style={{ backgroundImage: `url(${backbest})`, backgroundSize: "cover", backgroundPosition: "center", height: "100%", paddingBottom: "40px" }}>
                <div style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "40px", fontWeight: "bold", color: "black", paddingTop: "20px", fontFamily: "cursive" }}>BEST SELLERS</p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                        {fruits.map((best, index) => (
                            <div className='card' key={index}>
                                <img src={best.img} alt={best.name} />
                                <h4 style={{ fontWeight: "900" }}>{best.name}</h4>
                                <p><b>Price:</b> ₹{best.price}</p>
                                <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "-40px" }}>
                                    <button onClick={() => addToCart(best.name, best.price, best.img)}>Add to Cart</button>
                                    <button style={{ backgroundColor: "green", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px" }} onClick={handleNavigation}>Order Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestFruit;
