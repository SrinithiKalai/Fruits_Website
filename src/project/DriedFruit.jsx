import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import raisins from "../assets/raisins.jpeg";
import date from "../assets/date.jpeg";
import prune from "../assets/prune.jpg";
import fig from "../assets/fig.jpeg";
import apri from "../assets/apri.jpg";
import drycran from "../assets/drycran.jpg";
import cherries from "../assets/cherries.jpg";
import dryblue from "../assets/dryblue.jpg";
import goji from "../assets/goji.jpg";
import drymul from "../assets/drymul.jpeg";
import drymango from "../assets/drymango.jpg";
import drypine from "../assets/drypine.jpg";
import backdry from "../assets/backdry.jpg";

function DriedFruit() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/bill');
    };

    const addToCart = (fruitName, price, fruitImg) => {
        const item = { name: fruitName, price: price, img: fruitImg };
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...existingCart, item];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
        alert(`${fruitName} added to cart!`);
    };

    const driedFruits = [
        { name: "Raisins", price: 115, img: raisins },
        { name: "Dates", price: 100, img: date },
        { name: "Prunes", price: 110, img: prune },
        { name: "Fig", price: 150, img: fig },
        { name: "Apricots", price: 180, img: apri },
        { name: "Cranberries", price: 200, img: drycran },
        { name: "Cherries", price: 140, img: cherries },
        { name: "Blueberries", price: 170, img: dryblue },
        { name: "Goji Berries", price: 110, img: goji },
        { name: "Mulberries", price: 250, img: drymul },
        { name: "Dried Mango", price: 130, img: drymango },
        { name: "Dried Pineapple", price: 190, img: drypine }
    ];

    return (
        <div style={{ backgroundImage: `url(${backdry})`, backgroundSize: "cover", backgroundPosition: "center", paddingBottom: "40px" }}>
            <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "40px", fontWeight: "bold", color: "black", paddingTop: "20px", fontFamily: "cursive" }}>DRIED FRUITS</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                    {driedFruits.map((dried, index) => (
                        <div className='card' key={index}>
                            <img src={dried.img} alt={dried.name} />
                            <h4 style={{ fontWeight: "900" }}>{dried.name}</h4>
                            <p><b>Price:</b> ₹{dried.price}</p>
                            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "-40px" }}>
                                <button onClick={() => addToCart(dried.name, dried.price, dried.img)}>Add to Cart</button>
                                <button style={{backgroundColor: "green",color: "white",border: "none",padding: "5px 10px",borderRadius: "5px"}}onClick={handleNavigation}>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DriedFruit;
