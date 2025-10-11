import React, { useState, useEffect } from "react";

export default function App() {
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [paymentMode, setPaymentMode] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [upiId, setUpiId] = useState("");

  const [errors, setErrors] = useState({});
  const [isEditable, setIsEditable] = useState(true);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // 🔍 Regex Patterns
  const cardRegex = /^[0-9]{16}$/;
  const cvvRegex = /^[0-9]{3}$/;
  const upiRegex = /^[\w.-]+@[\w.-]+$/;
  const pincodeRegex = /^[0-9]{6}$/;

  // 🧠 Validation Function
  const validate = () => {
    let newErrors = {};

    if (!address.name) newErrors.name = "Name is required";
    if (!address.phone) newErrors.phone = "Phone is required";
    if (!address.street) newErrors.street = "Street is required";
    if (!address.city) newErrors.city = "City is required";
    if (!address.state) newErrors.state = "State is required";
    if (!address.pincode) newErrors.pincode = "Pincode is required";
    else if (!pincodeRegex.test(address.pincode))
      newErrors.pincode = "Invalid pincode";

    if (!paymentMode) newErrors.paymentMode = "Select a payment method";

    if (paymentMode === "card") {
      if (!cardRegex.test(cardDetails.cardNumber))
        newErrors.cardNumber = "Invalid card number (16 digits)";
      if (!cvvRegex.test(cardDetails.cvv))
        newErrors.cvv = "Invalid CVV (3 digits)";
    }

    if (paymentMode === "upi" && !upiRegex.test(upiId))
      newErrors.upiId = "Invalid UPI ID";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🧾 Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsEditable(false);

    // Simulate POST /api/checkout
    setTimeout(() => {
      console.log("POST /api/checkout success", { address, paymentMode });
      setOrderPlaced(true);
    }, 1000);
  };

  // ⏳ Reset After 5 seconds
  useEffect(() => {
    if (orderPlaced) {
      const timer = setTimeout(() => {
        setOrderPlaced(false);
        setIsEditable(true);
        setAddress({
          name: "",
          phone: "",
          street: "",
          city: "",
          state: "",
          pincode: "",
        });
        setPaymentMode("");
        setCardDetails({ cardNumber: "", expiry: "", cvv: "" });
        setUpiId("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [orderPlaced]);

  // 🧩 Handle Inputs
  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const handleCardChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        🛒 Checkout Form
      </h1>

      {orderPlaced ? (
        <div className="text-center text-green-600 font-semibold text-lg">
          ✅ Order Placed Successfully! (Resetting in 5s)
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* SHIPPING ADDRESS */}
          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-700">
                Shipping Address
              </h2>
              <button
                type="button"
                onClick={() => setIsEditable((prev) => !prev)}
                className="text-sm text-blue-600 underline"
              >
                {isEditable ? "Lock Address" : "Edit Address"}
              </button>
            </div>

            {["name", "phone", "street", "city", "state", "pincode"].map(
              (field) => (
                <div key={field}>
                  <input
                    type="text"
                    name={field}
                    value={address[field]}
                    onChange={handleAddressChange}
                    placeholder={field[0].toUpperCase() + field.slice(1)}
                    disabled={!isEditable}
                    className="w-full border rounded-md p-2 mb-1"
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-sm">{errors[field]}</p>
                  )}
                </div>
              )
            )}
          </section>

          {/* PAYMENT DETAILS */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Payment Details
            </h2>

            <div className="flex gap-4 mb-3">
              {["card", "upi", "cod"].map((mode) => (
                <label key={mode} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMode"
                    value={mode}
                    checked={paymentMode === mode}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    disabled={!isEditable}
                  />
                  {mode.toUpperCase()}
                </label>
              ))}
            </div>
            {errors.paymentMode && (
              <p className="text-red-500 text-sm">{errors.paymentMode}</p>
            )}

            {/* Conditional Inputs */}
            {paymentMode === "card" && (
              <div className="space-y-2">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={cardDetails.cardNumber}
                  onChange={handleCardChange}
                  disabled={!isEditable}
                  className="w-full border rounded-md p-2"
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-sm">{errors.cardNumber}</p>
                )}

                <div className="flex gap-2">
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={handleCardChange}
                    disabled={!isEditable}
                    className="w-1/2 border rounded-md p-2"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={cardDetails.cvv}
                    onChange={handleCardChange}
                    disabled={!isEditable}
                    className="w-1/2 border rounded-md p-2"
                  />
                </div>
                {errors.cvv && (
                  <p className="text-red-500 text-sm">{errors.cvv}</p>
                )}
              </div>
            )}

            {paymentMode === "upi" && (
              <div>
                <input
                  type="text"
                  placeholder="UPI ID (e.g. name@bank)"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  disabled={!isEditable}
                  className="w-full border rounded-md p-2"
                />
                {errors.upiId && (
                  <p className="text-red-500 text-sm">{errors.upiId}</p>
                )}
              </div>
            )}
          </section>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={!isEditable}
            className={`w-full bg-blue-600 text-white font-semibold py-2 rounded-md transition ${
              !isEditable ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  );
}
