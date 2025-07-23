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
    <div style={{ padding: "15px", textAlign: "center" }}>
      <h2 style={{
        fontFamily: "cursive",
        fontSize: "clamp(24px, 6vw, 35px)",
        marginBottom: "20px"
      }}>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p style={{ fontSize: "16px", marginTop: "20px" }}>No items in cart.</p>
      ) : (
        <>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "15px",
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto"
          }}>
            {cartItems.map((item, index) => (
              <div key={index} className="card" style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                height: "100%"
              }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                />
                <div style={{ marginTop: "10px", flexGrow: 1 }}>
                  <h4 style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    margin: "5px 0",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  }}>
                    {item.name}
                  </h4>
                  <p style={{ fontSize: "14px", margin: "5px 0" }}>
                    <b>Price:</b> ₹{item.price}
                  </p>
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  style={{
                    marginTop: "10px",
                    background: "#ff4d4d",
                    border: "none",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "14px",
                    width: "100%"
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h3 style={{
            marginTop: "25px",
            fontSize: "20px",
            fontWeight: "bold"
          }}>
            Total: ₹{total}
          </h3>
        </>
      )}
    </div>
  );
}

export default AddtoCart;