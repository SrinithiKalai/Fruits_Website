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
    <div style={{ backgroundImage: `url(${backbill})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}>
      <div style={{ paddingLeft: "350px", paddingRight: "350px", paddingTop: "20px", paddingBottom: "20px" }}>
        <div>
          <h2 className="mb-6 text-center">Delivery & Payment Details</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="mb-3"><b>Full Name</b></label>
              <div className='d-flex gap-4'>
                <input type="text" placeholder="First Name" className="border rounded p-2" style={{ width: "400px" }} />
                <input type="text" placeholder="Last Name" className="border rounded p-2" style={{ width: "400px" }} />
              </div>
            </div>

            <div>
              <label className="mb-3 mt-4"><b>Address</b></label>
              <input type="text" placeholder="Street Address Line 1" className="border rounded p-2" style={{ width: "820px" }} />
              <div className='mt-4'>
                <input type="text" placeholder="Street Address Line 2" className="border rounded p-2" style={{ width: "820px" }} />
              </div>
              <div className='d-flex gap-4 mt-4'>
                <input type="text" placeholder="City" className="border rounded p-2" style={{ width: "400px" }} />
                <input type="text" placeholder="State/Province" className="border rounded p-2" style={{ width: "400px" }} />
              </div>
              <div className='d-flex gap-4 mt-4'>
                <input type="number" placeholder="Postal/Zip Code" className="border rounded p-2" style={{ width: "400px" }} />
                <select className="border rounded p-2" style={{ width: "400px" }}>
                  <option>Please Select Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className='mt-4 d-flex gap-4'>
              <div>
                <label className="mb-3"><b>Phone Number</b></label>
                <input type="number" placeholder="(000) 000-0000" className="border rounded p-2" style={{ width: "400px" }} />
              </div>
              <div>
                <label className="mb-3"><b>E-mail</b></label>
                <input type="email" placeholder="myname123@example.com" className="border rounded p-2" style={{ width: "400px" }} />
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <button type="submit" className='btn btn-success mt-5'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BillingPage;
