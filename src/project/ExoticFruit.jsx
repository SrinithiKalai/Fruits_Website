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
        <div style={{
            backgroundImage: `url(${backexo})`, backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            padding: "20px 10px 40px"
        }}>
            <div style={{
                textAlign: "center", maxWidth: "1200px",
                margin: "0 auto"
            }}>
                <p style={{
                    fontSize: "clamp(28px, 5vw, 40px)",
                    fontWeight: "bold",
                    color: "black",
                    padding: "20px 0",
                    fontFamily: "cursive",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
                }}>EXOTIC FRUITS</p>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    padding: "0 10px"
                }}>
                    {exoFruit.map((exotic, index) => (
                        <div key={index} style={{
                            background: "white",
                            borderRadius: "10px",
                            padding: "15px",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            transition: "transform 0.3s ease",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <img src={exotic.img} alt={exotic.name} style={{
                                width: "100%",
                                height: "180px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                marginBottom: "15px"
                            }} />
                            <h4 style={{
                                fontWeight: "900",
                                fontSize: "clamp(16px, 3vw, 20px)",
                                margin: "5px 0",
                                textAlign: "center"
                            }}>{exotic.name}</h4>
                            <p style={{
                                fontWeight: "bold",
                                fontSize: "18px",
                                margin: "5px 0 15px"
                            }}>Price: ₹{exotic.price}</p>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                marginTop: "auto"
                            }}>
                                <button onClick={() => addToCart(exotic.name, exotic.price, exotic.img)} style={{
                                    backgroundColor: "#ff6b6b",
                                    color: "white",
                                    border: "none",
                                    padding: "8px 15px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                    flex: 1
                                }}>Add to Cart</button>
                                <button style={{
                                    backgroundColor: "green",
                                    color: "white",
                                    border: "none",
                                    padding: "8px 15px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                    flex: 1
                                }} onClick={handleNavigation}>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExoticFruit;
