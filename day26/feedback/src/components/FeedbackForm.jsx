import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    message: '',
    screenshot: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [alert, setAlert] = useState('');
  const [preview, setPreview] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (formData.rating === 0) newErrors.rating = 'Rating is required';
    if (formData.screenshot && formData.screenshot.size > 2 * 1024 * 1024)
      newErrors.screenshot = 'File size must be less than 2MB';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'screenshot') {
      const file = files[0];
      setFormData({ ...formData, screenshot: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRating = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const simulateSuccess = Math.random() > 0.5;
    try {
      await new Promise((res) => setTimeout(res, 1500)); // Simulate delay
      if (simulateSuccess) {
        await fetch('/api/feedback', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-Type': 'application/json' },
        });
        setAlert('Feedback submitted successfully!');
        setSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setAlert('Something went wrong. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      rating: 0,
      message: '',
      screenshot: null,
    });
    setErrors({});
    setAlert('');
    setPreview('');
    setSubmitted(false);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>

      {alert && <div className="mb-4 text-center text-sm text-blue-600">{alert}</div>}

      {submitted ? (
        <div className="text-center space-y-4">
          <p className="text-green-600 font-semibold">Thank you for your feedback!</p>
          <button onClick={resetForm} className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit Another Feedback
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <div>
            <label className="block mb-1 font-medium">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRating(star)}
                  className={`cursor-pointer text-2xl ${
                    formData.rating >= star ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
          </div>

          <textarea
            name="message"
            placeholder="Your feedback"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="file"
            name="screenshot"
            onChange={handleChange}
            className={`w-full p-2 border ${errors.screenshot ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {preview && <p className="text-sm text-gray-600 mt-1">Preview: {formData.screenshot?.name}</p>}
          {errors.screenshot && <p className="text-red-500 text-sm">{errors.screenshot}</p>}

          <button
            type="submit"
            disabled={formData.rating === 0}
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
