import React, { useState } from 'react';
import yubari from "../assets/yubari.jpg";
import ruby from "../assets/ruby.jpg";
import den from "../assets/den.jpg";
import taiyo from "../assets/taiyo.jpg";
import hand from "../assets/hand.jpeg";
import pinkapple from "../assets/pinkapple.jpg";
import white from "../assets/white.jpeg";
import zill from "../assets/zill.jpeg";
import mir from "../assets/mir.jpg";
import dur from "../assets/dur.jpeg";
import man from "../assets/man.jpeg";
import black from "../assets/black.jpeg";
import backlux from "../assets/backlux.jpg";
import { useNavigate } from 'react-router-dom';

function LuxuryFruit() {
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

    const luxuryFruits = [
        { name: "Yubari King Melon", price: 115, img: yubari },
        { name: "Ruby Roman Grapes", price: 100, img: ruby },
        { name: "Densuke Watermelon", price: 110, img: den },
        { name: "Taiyo no Tamago Mango", price: 150, img: taiyo },
        { name: "Buddha’s Hand", price: 180, img: hand },
        { name: "Pink Pearl Apple", price: 200, img: pinkapple },
        { name: "White Strawberry", price: 140, img: white },
        { name: "Zill Mango", price: 170, img: zill },
        { name: "Miracle Fruit", price: 110, img: mir },
        { name: "Durian (Premium Grade)", price: 250, img: dur },
        { name: "Mangosteen", price: 130, img: man },
        { name: "Kyoho Grapes", price: 190, img: black },
    ];

    return (
            <div style={{backgroundImage: `url(${backlux})`,backgroundSize: "cover",backgroundPosition: "center",minHeight: "100vh",paddingBottom: "40px"}}>
                <div style={{ textAlign: "center" }}>
                    <p style={{fontSize: "40px",fontWeight: "bold",color: "black",paddingTop: "20px",fontFamily: "cursive"}}>LUXURY FRUITS</p>
                        <div style={{display: "flex",justifyContent: "center",gap: "20px",flexWrap: "wrap",padding: "20px"}}>
                        {luxuryFruits.map((luxury, index) => (
                            <div className="card" key={index}>
                                <img src={luxury.img} alt={luxury.name}/>
                                <h4 style={{ fontWeight: "900"}}>{luxury.name}</h4>
                                <p><b>Price:</b> ₹{luxury.price}</p>
                                <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "-40px" }}>
                                <button onClick={() => addToCart(luxury.name, luxury.price, luxury.img)}>Add to Cart</button>
                                    <button style={{backgroundColor: "green",color: "white",border: "none",padding: "5px 10px",borderRadius: "5px"}}onClick={handleNavigation}>Order Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
}

export default LuxuryFruit;
