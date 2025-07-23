import React, { useState } from 'react';
import backkids from "../assets/backkids.jpg";
import bananakid from "../assets/bananakid.jpeg";
import mangokid from "../assets/mangokid.jpeg";
import strawkid from "../assets/strawkid.jpeg";
import waterkid from "../assets/waterkid.jpeg";
import grapekid from "../assets/grapekid.jpeg";
import bluekid from "../assets/bluekid.jpeg";
import pinekid from "../assets/pinekid.jpeg";
import applekid from "../assets/applekid.jpeg";
import orangekid from "../assets/orangekid.jpeg";
import peachkid from "../assets/peachkid.jpeg";
import cherrykid from "../assets/cherrykid.jpeg";
import papayakid from "../assets/papayakid.jpeg";
import { useNavigate } from 'react-router-dom';

function KidsFruit() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/bill');
    };

    const kidsFruits = [
        { name: "Banana", price: 115, img: bananakid },
        { name: "Mango", price: 100, img: mangokid },
        { name: "Strawberry", price: 110, img: strawkid },
        { name: "Watermelon", price: 150, img: waterkid },
        { name: "Grapes", price: 180, img: grapekid },
        { name: "Blueberries", price: 200, img: bluekid },
        { name: "Pineapple", price: 140, img: pinekid },
        { name: "Apple", price: 170, img: applekid },
        { name: "Orange", price: 110, img: orangekid },
        { name: "Peach", price: 250, img: peachkid },
        { name: "Cherry", price: 130, img: cherrykid },
        { name: "Papaya", price: 190, img: papayakid },
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
        <div style={{ backgroundImage: `url(${backkids})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh", paddingBottom: "40px" }}>
            <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "40px", fontWeight: "bold", color: "black", paddingTop: "20px", fontFamily: "cursive" }}>KID'S FAVOURITE FRUITS</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                    {kidsFruits.map((kids, index) => (
                        <div className="card" key={index}>
                            <img src={kids.img} alt={kids.name} />
                            <h4 style={{ fontWeight: "900" }}>{kids.name}</h4>
                            <p><b>Price:</b> ₹{kids.price}</p>
                            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "-40px" }}>
                                <button onClick={() => addToCart(kids.name, kids.price, kids.img)}>Add to Cart</button>
                                <button style={{ backgroundColor: "green", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px" }} onClick={handleNavigation}>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default KidsFruit;
