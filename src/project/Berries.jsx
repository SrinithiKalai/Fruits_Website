import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backberry from "../assets/backberry.jpg";
import strawfruit from "../assets/strawfruit.jpeg";
import blueberry from "../assets/blueberry.jpg";
import raspberry from "../assets/raspberry.jpg";
import blackberry from "../assets/blackberry.jpg";
import cranberry from "../assets/cranberry.jpg";
import gojiberry from "../assets/gojiberry.jpeg";
import boysenberry from "../assets/boysenberry.jpg";
import elderberry from "../assets/elderberry.jpg";
import mulberry from "../assets/mulberry.jpeg";
import gooseberry from "../assets/gooseberry.jpg";
import lingonberry from "../assets/lingonberry.jpg";
import cloudberry from "../assets/cloudberry.jpg";

function Berries() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    const handleNavigation = () => {
        navigate('/bill');
    };

    const addToCart = (fruitName, price, fruitImg) => {
        const item = { name: fruitName, price: price, img: fruitImg  };
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...existingCart, item];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
        alert(`${fruitName} added to cart!`);
    };

    const berriesData = [
        { name: "Strawberry", price: 200, img: strawfruit },
        { name: "Blueberry", price: 150, img: blueberry },
        { name: "Raspberry", price: 120, img: raspberry },
        { name: "Blackberry", price: 140, img: blackberry },
        { name: "Cranberry", price: 190, img: cranberry },
        { name: "Goji berry", price: 250, img: gojiberry },
        { name: "Boysenberry", price: 170, img: boysenberry },
        { name: "Elderberry", price: 210, img: elderberry },
        { name: "Mulberry", price: 160, img: mulberry },
        { name: "Gooseberry", price: 120, img: gooseberry },
        { name: "Lingonberry", price: 200, img: lingonberry },
        { name: "Cloudberry", price: 230, img: cloudberry }
    ];

    return (
        <div style={{ backgroundImage: `url(${backberry})`, backgroundSize: "cover", backgroundPosition: "center", height: "100%", paddingBottom: "40px" }}>
            <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "40px", fontWeight: "bold", color: "black", paddingTop: "20px", fontFamily: "cursive" }}>BERRIES</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                    {berriesData.map((berry, index) => (
                        <div className='card' key={index}>
                            <img src={berry.img} alt={berry.name} />
                            <h4 style={{ fontWeight: "900" }}>{berry.name}</h4>
                            <p><b>Price:</b> ₹{berry.price}</p>
                            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "-40px" }}>
                                <button onClick={() => addToCart(berry.name, berry.price, berry.img)}>Add to Cart</button>
                                <button style={{ backgroundColor: "green", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px" }} onClick={handleNavigation}>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Berries;
