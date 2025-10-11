import React, { useState, useEffect } from 'react';

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    tickets: 1,
    agree: false,
  });

  const [validity, setValidity] = useState({
    fullName: false,
    email: false,
    phone: false,
    eventType: false,
    agree: false,
  });

  const [emailLoading, setEmailLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [thankYouName, setThankYouName] = useState('');

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        return value.trim().length > 2;
      case 'email':
        return /^\S+@\S+\.\S+$/.test(value);
      case 'phone':
        return /^\d{10}$/.test(value);
      case 'eventType':
        return value !== '';
      case 'agree':
        return value === true;
      default:
        return false;
    }
  };

  useEffect(() => {
    const newValidity = { ...validity };
    Object.keys(formData).forEach((key) => {
      if (key === 'email') {
        setEmailLoading(true);
        setTimeout(() => {
          newValidity.email = validateField('email', formData.email);
          setValidity(newValidity);
          setEmailLoading(false);
        }, 1000);
      } else {
        newValidity[key] = validateField(key, formData[key]);
        setValidity(newValidity);
      }
    });
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleTickets = (delta) => {
    setFormData((prev) => ({
      ...prev,
      tickets: Math.max(1, prev.tickets + delta),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });
    setThankYouName(formData.fullName);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      eventType: '',
      tickets: 1,
      agree: false,
    });
    setValidity({
      fullName: false,
      email: false,
      phone: false,
      eventType: false,
      agree: false,
    });
    setSubmitted(false);
    setThankYouName('');
  };

  const totalValid = Object.values(validity).filter(Boolean).length;
  const allValid = totalValid === Object.keys(validity).length;

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Event Registration</h2>

      {submitted ? (
        <div className="text-center space-y-4">
          <p className="text-green-600 font-semibold">Thank you, {thankYouName}, for registering!</p>
          <button onClick={resetForm} className="bg-blue-600 text-white px-4 py-2 rounded">
            Clear Form
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full p-2 border ${
              validity.fullName ? 'border-green-500' : 'border-red-500'
            } rounded`}
          />

          <div className="relative">
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border ${
                validity.email ? 'border-green-500' : 'border-red-500'
              } rounded`}
            />
            {emailLoading && (
              <div className="absolute right-2 top-2 animate-spin h-5 w-5 border-2 border-t-blue-500 border-gray-300 rounded-full"></div>
            )}
          </div>

          <input
            name="phone"
            placeholder="Phone (10 digits)"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-2 border ${
              validity.phone ? 'border-green-500' : 'border-red-500'
            } rounded`}
          />

          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className={`w-full p-2 border ${
              validity.eventType ? 'border-green-500' : 'border-red-500'
            } rounded`}
          >
            <option value="">Select Event Type</option>
            <option value="Workshop">Workshop</option>
            <option value="Seminar">Seminar</option>
            <option value="Concert">Concert</option>
          </select>

          <div className="flex items-center gap-4">
            <label className="font-medium">Tickets:</label>
            <button type="button" onClick={() => handleTickets(-1)} className="px-2 py-1 bg-gray-200 rounded">
              -
            </button>
            <span>{formData.tickets}</span>
            <button type="button" onClick={() => handleTickets(1)} className="px-2 py-1 bg-gray-200 rounded">
              +
            </button>
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className={`accent-blue-600 ${
                validity.agree ? 'outline-green-500' : 'outline-red-500'
              }`}
            />
            I agree to the terms
          </label>

          <p className="text-sm text-gray-600">Form Progress: {totalValid} of 5 fields valid</p>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={allValid}
              className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Register
            </button>
            <button type="button" onClick={resetForm} className="bg-gray-300 px-4 py-2 rounded">
              Clear Form
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EventRegistrationForm;
