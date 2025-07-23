import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backstone from "../assets/backstone.jpg";
import peachfruit from "../assets/peachfruit.jpg";
import plumfruit from "../assets/plumfruit.jpg";
import cherry from "../assets/cherry.jpg";
import apricot from "../assets/apricot.jpg";
import nectarine from "../assets/nectarine.jpg";
import mango from "../assets/mango.jpg";
import lychee from "../assets/lychee.jpg";
import olive from "../assets/olive.jpg";
import dates from "../assets/dates.jpeg";
import blackfruit from "../assets/blackfruit.jpg";
import coconut from "../assets/coconut.jpeg";
import jujube from "../assets/jujube.jpg";

function Stonefruit() {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/bill');
    };
    const [cart, setCart] = useState([]);

    const addToCart = (fruitName, price, fruitImg ) => {
        const item = { name: fruitName, price: price, img: fruitImg };
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...existingCart, item];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);

        alert(`${fruitName} added to cart!`);
    };

    const stoneFruit = [
        { name: "Peach", price: 115, img: peachfruit },
        { name: "Plum", price: 100, img: plumfruit },
        { name: "Cherry", price: 110, img: cherry },
        { name: "Apricot", price: 150, img: apricot },
        { name: "Nectarine", price: 180, img: nectarine },
        { name: "Mango", price: 200, img: mango },
        { name: "Lychee", price: 140, img: lychee },
        { name: "Olive", price: 170, img: olive },
        { name: "Dates", price: 110, img: dates },
        { name: "Black Sapote", price: 250, img: blackfruit },
        { name: "Coconut", price: 130, img: coconut },
        { name: "Jujube", price: 190, img: jujube },
    ];

    return (
        <div style={{ backgroundImage: `url(${backstone})`, backgroundSize: "cover", backgroundPosition: "center", paddingBottom: "40px" }}>
            <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "40px", fontWeight: "bold", color: "black", paddingTop: "20px", fontFamily: "cursive" }}>STONE FRUITS</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                    {stoneFruit.map((stone, index) => (
                        <div key={index} className="card">
                            <img src={stone.img} alt={stone.name} />
                            <h4 style={{ fontWeight: "900" }}>{stone.name}</h4>
                            <p><b>Price:</b> ₹{stone.price}</p>
                            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "-40px" }}>
                                <button onClick={() => addToCart(stone.name, stone.price, stone.img)}>Add to Cart</button>
                                <button style={{ backgroundColor: "green", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px" }} onClick={handleNavigation}>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Stonefruit;
