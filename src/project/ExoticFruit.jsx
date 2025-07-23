import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backexo from "../assets/backexo.jpg";
import dragon from "../assets/dragon.jpeg";
import mangosteen from "../assets/mangosteen.jpeg";
import ramfruit from "../assets/ramfruit.jpeg";
import durian from "../assets/durian.jpeg";
import jack from "../assets/jack.jpeg";
import snakefruit from "../assets/snakefruit.jpeg";
import passion from "../assets/passion.jpeg";
import cupuacu from "../assets/cupuacu.jpg";
import custardapple from "../assets/custardapple.jpg";
import langsat from "../assets/langsat.jpeg";
import sapodilla from "../assets/sapodilla.jpeg";
import jabu from "../assets/jabu.jpg";

function ExoticFruit() {
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
    const exoFruit = [
        { name: "Dragon Fruit", price: 115, img: dragon },
        { name: "Mangosteen", price: 100, img: mangosteen },
        { name: "Rambutan", price: 110, img: ramfruit },
        { name: "Durian", price: 150, img: durian },
        { name: "Jackfruit", price: 180, img: jack },
        { name: "Salak (Snake Fruit)", price: 200, img: snakefruit },
        { name: "Passion Fruit", price: 140, img: passion },
        { name: "Cupuacu", price: 170, img: cupuacu },
        { name: "Cherimoya (Custard Apple)", price: 110, img: custardapple },
        { name: "Langsat", price: 250, img: langsat },
        { name: "Sapodilla", price: 130, img: sapodilla },
        { name: "Jabuticaba", price: 190, img: jabu },
    ];


    return (
        <div style={{ backgroundImage: `url(${backexo})`, backgroundSize: "cover", backgroundPosition: "center", paddingBottom: "40px" }}>
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
                <p style={{ fontSize: "40px", fontWeight: "bold", color: "black", fontFamily: "cursive" }}>EXOTIC FRUITS</p>
                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
                    {exoFruit.map((exotic, index) => (
                        <div className='card' key={index}>
                            <img src={exotic.img} alt={exotic.name} />
                            <h4 style={{ fontWeight: "900" }}>{exotic.name}</h4>
                            <p><b>Price:</b> ₹{exotic.price}</p>
                            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "-40px" }}>
                                <button onClick={() => addToCart(exotic.name, exotic.price, exotic.img)}>Add to Cart</button>
                                <button style={{ backgroundColor: "green", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px" }} onClick={handleNavigation}>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExoticFruit;
