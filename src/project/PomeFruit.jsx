import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import applefruit from "../assets/applefruit.jpeg";
import pear from "../assets/pear.jpg";
import quince from "../assets/quince.jpg";
import loquat from "../assets/loquat.jpg";
import medlar from "../assets/medlar.jpg";
import nashi from "../assets/nashi.jpeg";
import crabapple from "../assets/crabapple.jpg";
import mayhaw from "../assets/mayhaw.jpg";
import rowan from "../assets/rowan.jpg";
import serviceberry from "../assets/serviceberry.jpg";
import hawthorn from "../assets/hawthorn.jpg";
import chokeberry from "../assets/chokeberry.jpg";
import backpome from "../assets/backpome.jpeg";

function PomeFruit() {
    const navigate = useNavigate();
    const handleNavigation = () => navigate('/bill');
    const pomeData = [
        { name: "Apple", price: 115, img: applefruit },
        { name: "Pear", price: 100, img: pear },
        { name: "Quince", price: 110, img: quince },
        { name: "Loquat", price: 150, img: loquat },
        { name: "Medlar", price: 180, img: medlar },
        { name: "Asian Pear (Nashi Pear)", price: 200, img: nashi },
        { name: "Crabapple", price: 140, img: crabapple },
        { name: "Mayhaw", price: 170, img: mayhaw },
        { name: "Rowan Berry (Mountain Ash)", price: 110, img: rowan },
        { name: "Serviceberry", price: 250, img: serviceberry },
        { name: "Hawthorn Fruit", price: 130, img: hawthorn },
        { name: "Chokeberry", price: 190, img: chokeberry },
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
        <div style={{ backgroundImage: `url(${backpome})`, backgroundSize: "cover", backgroundPosition: "center", paddingBottom: "40px" }}>
            <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "40px", fontWeight: "bold", color: "black", paddingTop: "20px", fontFamily: "cursive" }}>POME FRUITS</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                    {pomeData.map((pome, index) => (
                        <div className='card' key={index}>
                            <img src={pome.img} alt={pome.name} />
                            <h4 style={{ fontWeight: "900" }}>{pome.name}</h4>
                            <p><b>Price:</b> ₹{pome.price}</p>
                            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "-40px" }}>
                                <button onClick={() => addToCart(pome.name, pome.price, pome.img)}>Add to Cart</button>
                                <button style={{ backgroundColor: "green", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px" }} onClick={handleNavigation}>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PomeFruit;
