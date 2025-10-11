import React from 'react';

const Contact = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">
        We'd love to hear from you! Whether you have questions about job listings, feedback on our platform,
        or partnership inquiries, feel free to reach out.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border p-2 rounded h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
