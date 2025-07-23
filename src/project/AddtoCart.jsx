import React, { useEffect, useState } from 'react';

function AddtoCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    try {
      const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(storedItems);
    } catch (error) {
      setCartItems([]);
    }
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ fontFamily: "cursive", fontSize: "35px" }}>🛒 Your Cart</h2>
      
      {cartItems.length === 0 ? (
        <p style={{ fontSize: "18px", marginTop: "20px" }}>No items in cart.</p>
      ) : (
        <>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            {cartItems.map((item, index) => (
              <div key={index} className="card" style={{ width: "220px", padding: "10px", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                <img src={item.img} alt={item.name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}/>
                <h4 style={{ fontWeight: "900", marginTop: "10px" }}>{item.name}</h4>
                <p><b>Price:</b> ₹{item.price}</p>
                <button onClick={() => handleRemove(index)} style={{marginTop: "10px",background: "#ff4d4d",border: "none",color: "white",padding: "6px 12px",borderRadius: "5px",cursor: "pointer"}}>Remove</button>
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: "30px", fontSize: "24px" }}>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default AddtoCart;
