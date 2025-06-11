import React, { useState } from 'react';
import axios from 'axios';

const HomeContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !message) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('https://contactus-2.onrender.com/api/contact', {
        email,
        message,
      });

      console.log('Response from backend:', response.data);
      alert('✅ Message sent successfully!');

      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Submission error:', error.response?.data || error.message);
      alert('❌ Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="home-contact-container">
      <h2>Get in Touch</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default HomeContactSection;
