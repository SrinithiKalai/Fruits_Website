import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Display.css';
import fruits from "../assets/fruits.jpg";
import citrus from "../assets/citrus.jpg";
import berries from "../assets/berries.jpeg";
import stonefruit from "../assets/stonefruit.jpg";
import trophicalfruit from "../assets/trophicalfruit.jpg";
import melons from "../assets/melons.jpg";
import pomefruit from "../assets/pomefruit.jpeg";
import exoticfruit from "../assets/exoticfruit.jpeg";
import driedfruit from "../assets/driedfruit.jpg";
import seasonalfruit from "../assets/seasonalfruit.jpg";
import organicfruit from "../assets/organicfruit.jpg";
import rarefruit from "../assets/rarefruit.jpg";
import budgetfruit from "../assets/budgetfruit.jpg";
import luxuryfruit from "../assets/luxuryfruit.jpg";
import juicefruit from "../assets/juicefruit.jpeg";
import kidsfruit from "../assets/kidsfruit.jpg";
import bestfruit from "../assets/bestfruit.jpg";
import backimage from "../assets/backimage.jpg";
import strawberry from "../assets/strawberry.jpg";
import fruit1 from "../assets/fruit1.jpg";
import pineapple from "../assets/pineapple.jpeg";
import apple from "../assets/apple.jpg";
import newfruit from "../assets/newfruit.jpg";
import grapes from "../assets/grapes.jpg";
import { useNavigate } from 'react-router-dom';
import SourCard from './SourCard';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Display() {
    const [openId, setOpenId] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleImageClick = (id) => {
        setOpenId(id);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsMobileMenuOpen(false); // Close mobile menu on navigation
    };

    const navbarItems = [
        { id: 1, title: "Home", action: () => scrollToMenu('demo') },
        { id: 2, title: "About", action: () => scrollToMenu('health') },
        { id: 3, title: "Products", action: () => scrollToMenu('ourmenu') },
        { id: 4, title: "Shop", action: () => scrollToMenu('request') },
        { id: 5, title: "Contact", action: () => scrollToMenu('royal') }
    ];

    const scrollToMenu = (id) => {
        const menuSection = document.getElementById(id);
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            {/* Navigation Bar */}
            <nav style={{ backgroundColor: "black", padding: "10px" }} className='fixed-top'>
                <div className='container d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <p style={{ color: "orange", fontSize: "30px", fontWeight: "500", margin: 0 }}>Royal</p>
                        <p style={{ color: "red", fontSize: "30px", fontWeight: "500", margin: 0 }} className='ms-2'>Fruits</p>
                        <FontAwesomeIcon icon={faLeaf} size="2x" className="ms-2 mt-2" style={{ color: "greenyellow" }} />
                    </div>
                    
                    {/* Search Bar - Hidden on mobile */}
                    <div className="d-none d-md-flex align-items-center" style={{ backgroundColor: "white", padding: "5px 10px", borderRadius: "5px", width: "350px" }}>
                        <FontAwesomeIcon icon={faSearch} style={{ color: "gray", marginRight: "5px" }} />
                        <input type="text" placeholder="Search here" style={{ border: "none", outline: "none", width: "100%" }} />
                    </div>
                    
                    {/* Desktop Menu - Hidden on mobile */}
                    <ul className="d-none d-md-flex" style={{ listStyle: "none", gap: "40px", margin: 0, padding: 0 }}>
                        {navbarItems.map((menu) => (
                            <li key={menu.id} style={{ cursor: "pointer" }}>
                                <a
                                    style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
                                    onClick={menu.action}
                                >
                                    {menu.title}
                                </a>
                            </li>
                        ))}
                        <div className="ms-3" style={{ color: "white", cursor: "pointer" }}>
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" onClick={() => handleNavigation('/cart')}/>
                        </div>
                    </ul>
                    
                    {/* Mobile Menu Toggle Button */}
                    <div className="d-md-none" style={{ color: "white", cursor: "pointer" }}>
                        {isMobileMenuOpen ? (
                            <FontAwesomeIcon icon={faTimes} size="lg" onClick={toggleMobileMenu} />
                        ) : (
                            <FontAwesomeIcon icon={faBars} size="lg" onClick={toggleMobileMenu} />
                        )}
                    </div>
                </div>
                
                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="d-md-none mt-3" style={{ backgroundColor: "#333", padding: "15px" }}>
                        <div className="d-flex align-items-center mb-3" style={{ backgroundColor: "white", padding: "5px 10px", borderRadius: "5px" }}>
                            <FontAwesomeIcon icon={faSearch} style={{ color: "gray", marginRight: "5px" }} />
                            <input type="text" placeholder="Search here" style={{ border: "none", outline: "none", width: "100%" }} />
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {navbarItems.map((menu) => (
                                <li key={menu.id} style={{ marginBottom: "15px" }}>
                                    <a
                                        style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
                                        onClick={menu.action}
                                    >
                                        {menu.title}
                                    </a>
                                </li>
                            ))}
                            <li style={{ marginTop: "15px" }}>
                                <a
                                    style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
                                    onClick={() => handleNavigation('/cart')}
                                >
                                    <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: "10px" }} />
                                    Cart
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>

            {/* Carousel Section */}
            <div id="demo" className="carousel slide" data-bs-ride="carousel" style={{ marginTop: isMobileMenuOpen ? "200px" : "0" }}>
                <div className="carousel-indicators">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                        <button key={index} type="button" data-bs-target="#demo" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {[strawberry, fruit1, grapes, apple, newfruit, pineapple].map((img, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img src={img} alt={`Slide ${index + 1}`} className="d-block w-100" style={{ height: "50vh", objectFit: "cover" }} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            {/* Healthy Fresh Fruits Section */}
            <div id='health' className="d-flex align-items-center justify-content-center justify-content-md-end" 
                style={{ 
        backgroundImage: `url(${fruits})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height: "90vh", // Increased from 50vh to 70vh
        width: "100%",
        padding: "20px"
    }}>
                <div style={{ maxWidth: "500px", textAlign: "center", padding: "20px", borderRadius: "10px" }}>
                    <h3 style={{ fontSize: "clamp(24px, 5vw, 40px)", fontWeight: "bold", color: "orange", fontFamily: "cursive" }}>
                        Healthy Fresh Fruits!
                    </h3>
                    <p style={{ fontSize: "clamp(16px, 3vw, 20px)" }}>Get the best quality fresh fruits delivered to your home.</p>
                    <button className='btn btn-danger' onClick={() => handleNavigation('/bill')}>Order Now</button>
                </div>
            </div>

            {/* Our Menu Section */}
            <div id="ourmenu" style={{ 
                backgroundImage: `url(${backimage})`, 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                padding: "40px 20px"
            }}>
                <div style={{ textAlign: "center" }}>
                    <p style={{ 
                        fontSize: "clamp(28px, 5vw, 40px)", 
                        fontWeight: "bold", 
                        color: "black", 
                        fontFamily: "cursive",
                        marginBottom: "30px"
                    }}>OUR MENU</p>
                    <div style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
                        gap: "20px",
                        maxWidth: "1200px",
                        margin: "0 auto"
                    }}>
                        {[
                            { img: citrus, title: "Citrus Fruits", path: '/citrusfruit' },
                            { img: berries, title: "Berries", path: '/berries' },
                            { img: stonefruit, title: "Stone Fruits", path: '/stonefruit' },
                            { img: trophicalfruit, title: "Tropical Fruits", path: '/trophicalfruit' },
                            { img: melons, title: "Melons", path: '/melons' },
                            { img: pomefruit, title: "Pome Fruits", path: '/pomefruit' },
                            { img: exoticfruit, title: "Exotic Fruits", path: '/exoticfruit' },
                            { img: driedfruit, title: "Dried Fruits", path: '/driedfruit' },
                            { img: seasonalfruit, title: "Seasonal Fruits", path: '/seasonalfruit' },
                            { img: organicfruit, title: "Organic Fruits", path: '/organicfruit' },
                            { img: rarefruit, title: "Rare and specialty Fruits", path: '/rarefruit' },
                            { img: budgetfruit, title: "Budget-Friendly Fruits", path: '/budgetfruit' },
                            { img: luxuryfruit, title: "Luxury Fruits", path: '/luxuryfruit' },
                            { img: juicefruit, title: "Juicing Fruits", path: '/juicefruit' },
                            { img: kidsfruit, title: "Kid's Favourite Fruits", path: '/kidsfruit' },
                            { img: bestfruit, title: "Best Sellers", path: '/bestsell' }
                        ].map((item, index) => (
                            <div key={index} className='card'>
                                <img src={item.img} alt={item.title} onClick={() => handleImageClick(index + 1)} />
                                <h4>{item.title}</h4>
                                <button onClick={() => handleNavigation(item.path)}>click here</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Request a Call Back Section */}
            <div id='request' className='text-center' style={{ padding: "40px 20px" }}>
                <h1 className='mb-4'>Request a Call Back</h1>
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-stretch' style={{ gap: "40px", padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
                    <div className="form-container" style={{ flex: 1, padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
                        <input type='text' name='fname' placeholder='FULL NAME' className="input-field mb-3" />
                        <input type='email' name='uemail' placeholder='EMAIL' className="input-field mb-3" />
                        <input type='number' name='phone' placeholder='PHONE NUMBER' className="input-field mb-3" />
                        <textarea name='msg' placeholder='MESSAGE' className="input-field message-box mb-3"></textarea>
                        <button className="submit-btn">SEND</button>
                    </div>

                    <div className="map_container mt-4 mt-md-0" style={{ flex: 1, borderRadius: "10px", overflow: "hidden", boxShadow: "0 0 10px rgba(0,0,0,0.1)", height: "400px" }}>
                        <div className="map-responsive" style={{ height: "100%" }}>
                            <iframe 
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" 
                                width="100%" 
                                height="100%" 
                                style={{ border: "0", borderRadius: "10px" }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div id='royal' style={{ background: "#222", color: "#fff", padding: "40px 20px", textAlign: "center" }}>
                <h1 style={{ fontFamily: "cursive", fontWeight: "900", marginBottom: "30px" }}>ROYAL FRUITS</h1>
                <div style={{ 
                    display: "flex", 
                    flexDirection: "column",
                    gap: "20px",
                    maxWidth: "1000px", 
                    margin: "auto", 
                    marginBottom: "30px" 
                }}>
                    <div>
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "10px" }} />Tamil Nadu
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} /> Call : +91 2334567890
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} /> teddy123@gmail.com
                    </div>
                </div>
                <div style={{ 
                    display: "flex", 
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "center"
                }}>
                    <div style={{ width: "100%", maxWidth: "500px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                style={{ 
                                    width: "100%", 
                                    border: "none", 
                                    height: "40px", 
                                    padding: "0 10px",
                                    borderRadius: "5px"
                                }} 
                            />
                            <button style={{ 
                                background: "#F89C1C", 
                                color: "#fff", 
                                border: "none", 
                                height: "40px", 
                                width: "100%",
                                borderRadius: "5px"
                            }}>
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                        <a href='https://www.facebook.com/login.php/' style={{ color: "white" }}>
                            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "24px" }} />
                        </a>
                        <a href='https://x.com/i/flow/login' style={{ color: "white" }}>
                            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "24px" }} />
                        </a>
                        <a href='https://www.linkedin.com/home' style={{ color: "white" }}>
                            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "24px" }} />
                        </a>
                        <a href='https://www.instagram.com/?flo=true' style={{ color: "white" }}>
                            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "24px" }} />
                        </a>
                    </div>
                </div>
            </div>
            
            <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#111", color: "#fff" }}>
                <p style={{ fontSize: "16px", margin: 0 }}>© 2025 All Rights Reserved. Design by Free Html Templates</p>
            </div>
            
            <SourCard openId={openId} setOpenId={setOpenId} />
        </div>
    );
}

export default Display;