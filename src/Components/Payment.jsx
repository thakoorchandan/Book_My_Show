import "./Payment.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import QRCode from "react-qr-code";

const form = {
  name: "",
  card_used: "",
  expiry: "",
  cvv: "",
  street: "",
  city: "",
  state: "",
  zip: "",
};

function Payment({ room, handleClose }) {
  console.log(room);
  const [text, setText] = useState(form);
  const [payment, setPayment] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPayment([text]);
  };

  return (
    <>
      {payment
        ? payment.map((item) => (
            <>
              <div className="container">
                <div className="row">
                  <div className="col-md-6 mx-auto mt-5">
                    <div className="payment">
                      <div className="payment_header">
                        <div className="check"></div>
                      </div>
                      <div className="content">
                        <QRCode value="hey" />
                        <h1 style={{ color: "green" }}>Payment Success !</h1>
                        <h5>
                          {item.name}, You have used
                          <p style={{ color: "green" }}>{item.card_used}</p>
                          this card to buy tickets to watch{" "}
                          <h3 style={{ color: "green" }}>{room.name}</h3> you
                          reside at{" "}
                          <p style={{ color: "green" }}>
                            {item.street} / {item.city} / {item.zip}
                          </p>
                          And the amount paid is{" "}
                          <p style={{ color: "red" }}> {room.price}</p>
                        </h5>
                        <NavLink to="/" exact={true}>
                          Go to Home
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
        : null}
      <div className="container mt-5 px-5">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4">
            <h2>Confirm order and pay</h2>
            <span>
              please make the payment, after that you can enjoy all the features
              and benefits.
            </span>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="card p-3">
                <h6 className="text-uppercase">Payment details</h6>
                <div className="inputbox mt-3">
                  <input
                    type="text"
                    //   name
                    name="name"
                    className="form-control"
                    required={true}
                    onChange={handleChange}
                  />
                  <span>Name on card</span>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      <input
                        //   card_used
                        name="card_used"
                        className="form-control"
                        required={true}
                        maxLength="16"
                        //   pattern="\d"
                        onChange={handleChange}
                      />
                      <i className="fa fa-credit-card"></i>{" "}
                      <span>Card Number</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex flex-row">
                      <div className="inputbox mt-3 mr-2">
                        <input
                          //   Expiry
                          name="expiry"
                          minLength="5"
                          maxLength="5"
                          className="form-control"
                          onChange={handleChange}
                          required={true}
                        />
                        <span>Expiry</span>
                      </div>
                      <div className="inputbox mt-3 mr-2">
                        <input
                          //   CVV
                          name="cvv"
                          minLength="3"
                          maxLength="3"
                          onChange={handleChange}
                          className="form-control"
                          required={true}
                        />
                        <span>CVV</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <h6 className="text-uppercase">Billing Address</h6>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div className="inputbox mt-3 mr-2">
                        <input
                          type="text"
                          //   Street
                          name="street"
                          onChange={handleChange}
                          className="form-control"
                          required={true}
                        />
                        <span>Street Address</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="inputbox mt-3 mr-2">
                        <input
                          type="text"
                          //City
                          name="city"
                          onChange={handleChange}
                          className="form-control"
                          required={true}
                        />
                        <span>City</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <div className="inputbox mt-3 mr-2">
                        <input
                          type="text"
                          //   state
                          name="state"
                          onChange={handleChange}
                          className="form-control"
                          required={true}
                        />
                        <span>State/Province</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="inputbox mt-3 mr-2">
                        <input
                          //   Zip
                          name="zip"
                          minLength="6"
                          maxLength="6"
                          onChange={handleChange}
                          className="form-control"
                          required={true}
                        />
                        <span>Zip code</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-4 d-flex justify-content-between">
                <Button
                  onClick={handleClose}
                  style={{
                    color: "rgb(73,43,196)",
                    border: "1px solid rgb(73,43,196)",
                  }}
                  variant="outlines"
                >
                  Previous step
                </Button>

                <button type="submit" className="btn btn-success px-3">
                  Pay ???{room.price}
                </button>
              </div>
            </div>
            {/* Card Component */}
            <div className="col-md-4">
              <div className="card card-blue p-3 text-white mb-3">
                <span>You have to pay</span>
                <div className="d-flex flex-row align-items-end mb-3">
                  <h1 className="mb-0 yellow">???{room.price}</h1>
                </div>
                <span>
                  Enjoy all the services and perk after you complete the payment
                </span>
                <a href="#" className="yellow decoration">
                  Know all the features
                </a>
                <div className="hightlight">
                  <span>
                    May the good times and treasures of the present become the
                    golden memories of tomorrow.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Payment;
