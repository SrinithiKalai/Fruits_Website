import React, { useState } from 'react';
import backcitrus from "../assets/backcitrus.jpeg";
import orange from "../assets/orange.jpg";
import lemon from "../assets/lemon.jpeg";
import lime from "../assets/lime.jpeg";
import mandarine from "../assets/mandarine.jpg";
import tangerine from "../assets/tangerine.jpeg";
import grapefruit from "../assets/grapefruit.jpeg";
import pomelo from "../assets/pomelo.jpg";
import kumquat from "../assets/kumquat.jpg";
import bergamot from "../assets/bergamot.jpg";
import yuzu from "../assets/yuzu.jpeg";
import calamansi from "../assets/calamansi.jpg";
import sweetlime from "../assets/sweetlime.jpeg";
import { useNavigate } from 'react-router-dom';

function CitrusFruit() {
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
    
    const citrusData = [
        { name: "Orange", price: 115, img: orange },
        { name: "Lemon", price: 100, img: lemon },
        { name: "Lime", price: 110, img: lime },
        { name: "Mandarine", price: 150, img: mandarine },
        { name: "Tangerine", price: 180, img: tangerine },
        { name: "Grapefruit", price: 200, img: grapefruit },
        { name: "Pomelo", price: 140, img: pomelo },
        { name: "Kumquat", price: 170, img: kumquat },
        { name: "Bergamot Orange", price: 110, img: bergamot },
        { name: "Yuzu", price: 250, img: yuzu },
        { name: "Calamansi", price: 130, img: calamansi },
        { name: "Sweet Lime (Mosambi)", price: 190, img: sweetlime }
    ];

    return (
        <div style={{ backgroundImage: `url(${backcitrus})`, backgroundSize: "cover", backgroundPosition: "center", height: "100%", paddingBottom: "40px" }}>
            <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "40px", fontWeight: "bold", color: "black", paddingTop: "20px", fontFamily: "cursive" }}>CITRUS FRUITS</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                    {citrusData.map((citrus, index) => (
                        <div className='card' key={index}>
                            <img src={citrus.img} alt={citrus.name} />
                            <h4 style={{ fontWeight: "900" }}>{citrus.name}</h4>
                            <p><b>Price:</b> ₹{citrus.price}</p>
                            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "-40px" }}>
                                <button onClick={() => addToCart(citrus.name, citrus.price, citrus.img)}>Add to Cart</button>
                                <button style={{ backgroundColor: "green", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px" }} onClick={handleNavigation}>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CitrusFruit;
