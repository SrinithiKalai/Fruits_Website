import React from 'react';
import backbill from "../assets/backbill.jpg";

function BillingPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll("input, select");
    let hasEmpty = false;

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === "" || inputs[i].value === "Please Select Country") {
        hasEmpty = true;
        break;
      }
    }

    if (hasEmpty) {
      alert("Please fill all fields");
    } else {
      alert("Submitted successfully!");
    }
  };

  return (
    <div style={{ 
      backgroundImage: `url(${backbill})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      minHeight: "100vh",
      padding: "20px"
    }}>
      <div style={{ 
        maxWidth: "100%",
        padding: "15px"
      }}>
        <div>
          <h2 className="mb-4 text-center" style={{ fontSize: "1.5rem" }}>Delivery & Payment Details</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="mb-2"><b>Full Name</b></label>
              <div className='d-flex flex-column flex-md-row gap-3'>
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="border rounded p-2" 
                  style={{ width: "100%" }} 
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="border rounded p-2" 
                  style={{ width: "100%" }} 
                />
              </div>
            </div>

            <div>
              <label className="mb-2 mt-3"><b>Address</b></label>
              <input 
                type="text" 
                placeholder="Street Address Line 1" 
                className="border rounded p-2" 
                style={{ width: "100%" }} 
              />
              <div className='mt-3'>
                <input 
                  type="text" 
                  placeholder="Street Address Line 2" 
                  className="border rounded p-2" 
                  style={{ width: "100%" }} 
                />
              </div>
              <div className='d-flex flex-column flex-md-row gap-3 mt-3'>
                <input 
                  type="text" 
                  placeholder="City" 
                  className="border rounded p-2" 
                  style={{ width: "100%" }} 
                />
                <input 
                  type="text" 
                  placeholder="State/Province" 
                  className="border rounded p-2" 
                  style={{ width: "100%" }} 
                />
              </div>
              <div className='d-flex flex-column flex-md-row gap-3 mt-3'>
                <input 
                  type="number" 
                  placeholder="Postal/Zip Code" 
                  className="border rounded p-2" 
                  style={{ width: "100%" }} 
                />
                <select 
                  className="border rounded p-2" 
                  style={{ width: "100%" }}
                >
                  <option>Please Select Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className='mt-3 d-flex flex-column flex-md-row gap-3'>
              <div style={{ width: "100%" }}>
                <label className="mb-2"><b>Phone Number</b></label>
                <input 
                  type="number" 
                  placeholder="(000) 000-0000" 
                  className="border rounded p-2" 
                  style={{ width: "100%" }} 
                />
              </div>
              <div style={{ width: "100%" }}>
                <label className="mb-2"><b>E-mail</b></label>
                <input 
                  type="email" 
                  placeholder="myname123@example.com" 
                  className="border rounded p-2" 
                  style={{ width: "100%" }} 
                />
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <button 
                type="submit" 
                className='btn btn-success mt-4'
                style={{ width: "100%", maxWidth: "300px" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BillingPage;