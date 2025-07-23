import React, { useState } from 'react';
import appleimage from "../assets/appleimage.jpeg";
import bananafruit from "../assets/bananafruit.jpeg";
import strawberries from "../assets/strawberries.jpg";
import blueberries from "../assets/blueberries.jpeg";
import yellowmango from "../assets/yellowmango.jpeg";
import greengrape from "../assets/greengrape.jpeg";
import pineyellow from "../assets/pineyellow.jpeg";
import pomo from "../assets/pomo.jpg";
import orangefruit from "../assets/orangefruit.jpg";
import papayapic from "../assets/papayapic.jpeg";
import waterpic from "../assets/waterpic.jpeg";
import avocado from "../assets/avocado.jpeg";
import backorganic from "../assets/backorganic.jpeg";
import { useNavigate } from 'react-router-dom';

function FruitOrganic() {
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

    const organicData = [
        { name: "Apples", price: 115, img: appleimage },
        { name: "Bananas", price: 100, img: bananafruit },
        { name: "Strawberries", price: 110, img: strawberries },
        { name: "Blueberries", price: 150, img: blueberries },
        { name: "Mangoes", price: 180, img: yellowmango },
        { name: "Grapes", price: 200, img: greengrape },
        { name: "Pineapples", price: 140, img: pineyellow },
        { name: "Pomegranates", price: 170, img: pomo },
        { name: "Oranges", price: 110, img: orangefruit },
        { name: "Papayas", price: 250, img: papayapic },
        { name: "Watermelons", price: 130, img: waterpic },
        { name: "Avocados", price: 190, img: avocado }
    ];

    return (
        <div>
            <div style={{ backgroundImage: `url(${backorganic})`, backgroundSize: "cover", backgroundPosition: "center", height: "100%", paddingBottom: "40px" }}>
                <div style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "40px", fontWeight: "bold", color: "black", paddingTop: "20px", fontFamily: "cursive" }}>ORGANIC FRUITS</p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                        {organicData.map((organic, index) => (
                            <div className='card' key={index}>
                                <img src={organic.img} alt={organic.name} />
                                <h4 style={{ fontWeight: "900" }}>{organic.name}</h4>
                                <p><b>Price:</b> ₹{organic.price}</p>
                                <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "-40px" }}>
                                <button onClick={() => addToCart(organic.name, organic.price, organic.img)}>Add to Cart</button>
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

export default FruitOrganic;
