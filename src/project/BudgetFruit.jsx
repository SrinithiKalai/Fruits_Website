import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bananapic from "../assets/bananapic.jpeg";
import applepic from "../assets/applepic.jpeg";
import papayafruit from "../assets/papayafruit.jpg";
import melonfruit from "../assets/melonfruit.jpeg";
import orangepic from "../assets/orangepic.jpg";
import guavapic from "../assets/guavapic.jpeg";
import musk from "../assets/musk.jpeg";
import sweet from "../assets/sweet.jpeg";
import pinepic from "../assets/pinepic.jpg";
import sapota from "../assets/sapota.jpeg";
import custard from "../assets/custard.jpeg";
import ber from "../assets/ber.jpeg";
import backbadget from "../assets/backbadget.jpg";

function BudgetFruit() {
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
    const budgetFruit = [
        { name: "Banana", price: 115, img: bananapic },
        { name: "Apple", price: 100, img: applepic },
        { name: "Papaya", price: 110, img: papayafruit },
        { name: "Watermelon", price: 150, img: melonfruit },
        { name: "Orange", price: 180, img: orangepic },
        { name: "Guava", price: 200, img: guavapic },
        { name: "Musk Melon", price: 140, img: musk },
        { name: "Sweet Lime (Mosambi)", price: 170, img: sweet },
        { name: "Pineapple", price: 110, img: pinepic },
        { name: "Sapota (Chikoo)", price: 250, img: sapota },
        { name: "Custard Apple", price: 130, img: custard },
        { name: "Ber (Indian Jujube)", price: 190, img: ber },
    ];

    return (
        <div style={{ backgroundImage: `url(${backbadget})`, backgroundSize: "cover", backgroundPosition: "center", paddingBottom: "40px" }}>
            <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "40px", fontWeight: "bold", color: "black", paddingTop: "20px", fontFamily: "cursive" }}>BUDGET-FRIENDLY FRUITS</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                    {budgetFruit.map((budget, index) => (
                        <div className='card' key={index}>
                            <img src={budget.img} alt={budget.name} />
                            <h4 style={{ fontWeight: "900" }}>{budget.name}</h4>
                            <p><b>Price:</b> ₹{budget.price}</p>
                            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "-40px" }}>
                                <button onClick={() => addToCart(budget.name, budget.price, budget.img)}>Add to Cart</button>
                                <button style={{ backgroundColor: "green", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px" }} onClick={handleNavigation}>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BudgetFruit;
