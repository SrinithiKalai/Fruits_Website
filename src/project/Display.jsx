import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSearch } from '@fortawesome/free-solid-svg-icons';
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

    const handleImageClick = (id) => {
        setOpenId(id);
    };
    const navigate = useNavigate();
    const handleNavigation1 = () => {
        navigate('/citrusfruit');
    };
    const handleNavigation2 = () => {
        navigate('/berries');
    };
    const handleNavigation3 = () => {
        navigate('/stonefruit');
    };
    const handleNavigation4 = () => {
        navigate('/trophicalfruit');
    };
    const handleNavigation5 = () => {
        navigate('/melons');
    };
    const handleNavigation6 = () => {
        navigate('/pomefruit');
    };
    const handleNavigation7 = () => {
        navigate('/exoticfruit');
    };
    const handleNavigation8 = () => {
        navigate('/driedfruit');
    };
    const handleNavigation9 = () => {
        navigate('/seasonalfruit');
    };
    const handleNavigation10 = () => {
        navigate('/organicfruit');
    };
    const handleNavigation11 = () => {
        navigate('/rarefruit');
    };
    const handleNavigation12 = () => {
        navigate('/budgetfruit');
    };
    const handleNavigation13 = () => {
        navigate('/luxuryfruit');
    };
    const handleNavigation14 = () => {
        navigate('/juicefruit');
    };
    const handleNavigation15 = () => {
        navigate('/kidsfruit');
    };
    const handleNavigation16 = () => {
        navigate('/bestsell');
    };
    const handleNavigation17 = () => {
        navigate('/bill');
    };
    const handleNavigation18 = () => {
        navigate('/cart');
    };
    const navbarItems = [
        { id: 1, title: "Home" },
        { id: 2, title: "About" },
        { id: 3, title: "Products" },
        { id: 4, title: "Shop" },
        { id: 5, title: "Contact" }
    ];
    const scrollToMenu1 = () => {
        const menuSection1 = document.getElementById('demo');
        if (menuSection1) {
            menuSection1.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToMenu2 = () => {
        const menuSection2 = document.getElementById('health');
        if (menuSection2) {
            menuSection2.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToMenu3 = () => {
        const menuSection3 = document.getElementById('ourmenu');
        if (menuSection3) {
            menuSection3.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToMenu4 = () => {
        const menuSection4 = document.getElementById('request');
        if (menuSection4) {
            menuSection4.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToMenu5 = () => {
        const menuSection5 = document.getElementById('royal');
        if (menuSection5) {
            menuSection5.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div>
            <nav style={{ backgroundColor: "black", padding: "10px" }} className='fixed-top'>
                <div className='container d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <p style={{ color: "orange", fontSize: "30px", fontWeight: "500", margin: 0 }}>Royal</p>
                        <p style={{ color: "red", fontSize: "30px", fontWeight: "500", margin: 0 }} className='ms-2'>Fruits</p>
                        <FontAwesomeIcon icon={faLeaf} size="2x" className="ms-2 mt-2" style={{ color: "greenyellow" }} />
                    </div>
                    <div className="d-flex align-items-center" style={{ backgroundColor: "white", padding: "5px 10px", borderRadius: "5px", width: "350px" }}>
                        <FontAwesomeIcon icon={faSearch} style={{ color: "gray", marginRight: "5px" }} />
                        <input type="text" placeholder="Search here" style={{ border: "none", outline: "none", width: "100%" }} />
                    </div>
                    <ul style={{ listStyle: "none", display: "flex", gap: "40px", margin: 0, padding: 0 }}>
                        {navbarItems.map((menu, index) => (
                            <li key={index} style={{ display: "inline", cursor: "pointer" }}>
                                <a
                                    style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
                                    onClick={() => {
                                        if (menu.title === "Home") {
                                            scrollToMenu1();
                                        }
                                        if (menu.title === "About") {
                                            scrollToMenu2();
                                        }
                                        if (menu.title === "Products") {
                                            scrollToMenu3();
                                        }
                                        if (menu.title === "Shop") {
                                            scrollToMenu4();
                                        }
                                        if (menu.title === "Contact") {
                                            scrollToMenu5();
                                        }
                                    }}
                                >
                                    {menu.title}
                                </a>
                            </li>
                        ))}
                        <div className="ms-3" style={{ color: "white", cursor: "pointer" }}>
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" onClick={handleNavigation18}/>
                        </div>
                    </ul>
                </div>
            </nav>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={strawberry} alt="strawberry" className="d-block" style={{ width: "100%" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={fruit1} alt="fruit1" className="d-block" style={{ width: "100%" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={grapes} alt="grapes" className="d-block" style={{ width: "100%" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={apple} alt="apple" className="d-block" style={{ width: "100%" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={newfruit} alt="newfruit" className="d-block" style={{ width: "100%" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={pineapple} alt="pineapple" className="d-block" style={{ width: "100%" }} />
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>
            <div id='health' className="d-flex align-items-center justify-content-end" style={{ backgroundImage: `url(${fruits})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh", width: "100%" }}>
                <div style={{ marginRight: "150px" }}>
                    <h3 style={{ fontSize: "40px", fontWeight: "bold", textShadow: "2px 2px 5px rgba(0,0,0,0.5)", color: "orange", fontFamily: "cursive" }}>
                        Healthy Fresh Fruits!
                    </h3>
                    <p style={{ fontSize: "20px" }}>Get the best quality fresh fruits delivered to your home.</p>
                    <button className='btn btn-danger' onClick={handleNavigation17}>Order Now</button>
                </div>
            </div>
            <div id="ourmenu" style={{ backgroundImage: `url(${backimage})`, backgroundSize: "cover", backgroundPosition: "center", height: "100%", paddingBottom: "40px" }}>
                <div style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "40px", fontWeight: "bold", color: "black", paddingTop: "20px", fontFamily: "cursive" }}>OUR MENU</p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                        <div className='card'>
                            <img src={citrus} onClick={() => handleImageClick(1)} />
                            <h4>Citrus Fruits</h4>
                            <button onClick={handleNavigation1}>click here</button>
                        </div>
                        <div className='card'>
                            <img src={berries} onClick={() => handleImageClick(2)} />
                            <h4>Berries</h4>
                            <button onClick={handleNavigation2}>click here</button>
                        </div>
                        <div className='card'>
                            <img src={stonefruit} onClick={() => handleImageClick(3)} />
                            <h4>Stone Fruits</h4>
                            <button onClick={handleNavigation3}>click here</button>
                        </div>
                        <div className='card'>
                            <img src={trophicalfruit} onClick={() => handleImageClick(4)} />
                            <h4>Trophical Fruits</h4>
                            <button onClick={handleNavigation4}>click here</button>
                        </div>
                        <div className='card'>
                            <img src={melons} onClick={() => handleImageClick(5)} />
                            <h4>Melons</h4>
                            <button onClick={handleNavigation5}>click here</button>
                        </div>
                        <div className='card'>
                            <img src={pomefruit} onClick={() => handleImageClick(6)} />
                            <h4>Pome Fruits</h4>
                            <button onClick={handleNavigation6}>click here</button>
                        </div>
                        <div className='card'>
                            <img src={exoticfruit} onClick={() => handleImageClick(7)} />
                            <h4>Exotic Fruits</h4>
                            <button onClick={handleNavigation7}>click here</button>
                        </div>
                        <div className='card'>
                            <img src={driedfruit} onClick={() => handleImageClick(8)} />
                            <h4>Dried Fruits</h4>
                            <button onClick={handleNavigation8}>click here</button>
                        </div>
                        <div className='card'>
                            <img src={seasonalfruit} onClick={() => handleImageClick(9)} />
                            <h4>Seasonal Fruits</h4>
                            <button onClick={handleNavigation9}>click here</button>
                        </div>
                        <div className='card'>
                            <img src={organicfruit} onClick={() => handleImageClick(10)} />
                            <h4>Organic Fruits</h4>
                            <button onClick={handleNavigation10}>click here</button>
                        </div>
                        <div className='card'>
                            <img src={rarefruit} onClick={() => handleImageClick(11)} />
                            <h4>Rare and specialty Fruits</h4>
                            <button onClick={handleNavigation11}>click here</button>
                        </div>
                        <div className='card'>
                            <img src={budgetfruit} onClick={() => handleImageClick(12)} />
                            <h4>Budget-Friendly Fruits</h4>
                            <button onClick={handleNavigation12}>click here</button>
                        </div>
                        <div className='card'>
                            <img src={luxuryfruit} onClick={() => handleImageClick(13)} />
                            <h4>Luxury Fruits</h4>
                            <button onClick={handleNavigation13}>click here</button>
                        </div>
                        <div className='card'>
                            <img src={juicefruit} onClick={() => handleImageClick(14)} />
                            <h4>Juicing Fruits</h4>
                            <button onClick={handleNavigation14}>click here</button>
                        </div>
                        <div className='card'>
                            <img src={kidsfruit} onClick={() => handleImageClick(15)} />
                            <h4>Kid's Favourite Fruits</h4>
                            <button onClick={handleNavigation15}>click here</button>
                        </div>
                        <div className='card'>
                            <img src={bestfruit} onClick={() => handleImageClick(16)} />
                            <h4>Best Sellers</h4>
                            <button onClick={handleNavigation16}>click here</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id='request' className='text-center'>
                <h1 className='mt-5'>Request a Call Back</h1>
                <div className='d-flex justify-content-center align-items-stretch' style={{ gap: "40px", padding: "20px" }}>
                    <div className="form-container" style={{ flex: 1, padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", justifyContent: "center", height: "400px" }}>
                        <input type='text' name='fname' placeholder='FULL NAME' className="input-field" />
                        <input type='email' name='uemail' placeholder='EMAIL' className="input-field" />
                        <input type='number' name='phone' placeholder='PHONE NUMBER' className="input-field" />
                        <textarea name='msg' placeholder='MESSAGE' className="input-field message-box"></textarea>
                        <button className="submit-btn">SEND</button>
                    </div>

                    <div className="map_container" style={{ flex: 0.6, borderRadius: "10px", overflow: "hidden", boxShadow: "0 0 10px rgba(0,0,0,0.1)", height: "400px" }}>
                        <div className="map-responsive" style={{ height: "100%" }}>
                            <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="100%" height="100%" style={{ border: "0", borderRadius: "10px" }}></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div id='royal' style={{ background: "#222", color: "#fff", padding: "90px", marginTop: "10px", textAlign: "center" }}>
                <h1 style={{ fontFamily: "cursive", fontWeight: "900", marginBottom: "50px" }}>ROYAL FRUITS</h1>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1000px", margin: "auto", marginBottom: "50px" }}>
                    <div>
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "10px", fontSize: "20px" }} />Tamil Nadu
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} /> Call : +91 2334567890
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} /> teddy123@gmail.com
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "25px" }}>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                        <input type="email" placeholder="Enter your email" style={{ width: "500px", border: "none", height: "40px", paddingLeft: "5px" }} />
                        <button style={{ background: "#F89C1C", color: "#fff", border: "none", height: "40px", width: "170px" }}>SUBSCRIBE</button>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "20px" }}>
                        <a href='https://www.facebook.com/login.php/'>
                            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "24px" }} />
                        </a>
                        <a href='https://x.com/i/flow/login'>
                            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "24px" }} />
                        </a>
                        <a href='https://www.linkedin.com/home'>
                            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "24px" }} />
                        </a>
                        <a href='https://www.instagram.com/?flo=true'>
                            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "24px" }} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <p style={{ fontSize: "19px", textAlign: "center" }}>© 2025 All Rights Reserved. Design by Free Html Templates</p>
            </div>
            <SourCard openId={openId} setOpenId={setOpenId} />
        </div>



    );
}

export default Display;