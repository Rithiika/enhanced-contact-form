import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [topic, setTopic] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!topic || !name || !email || !message) {
      alert('Please fill all required fields');
      return;
    }

    try {
      const response = await axios.post('https://contactus-2.onrender.com/api/contact', {
        topic,
        name,
        email,
        phone,
        message,
      });

      console.log('Response from backend:', response.data);
      alert('✅ Your query has been submitted successfully!');

      // Clear form fields
      setTopic('');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting form:', error.response?.data || error.message);
      alert('❌ Failed to submit query. Please try again later.');
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us, We’re Ready to Help!</h2>
      <p>We strive to provide you with the best service and help you find your dream space.</p>

      <div className="contact-details">
        <p>📞 Call Us: +91 9999999999</p>
        <p>💬 Chat with us live 10 AM to 6 PM</p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <select value={topic} onChange={(e) => setTopic(e.target.value)} required>
        <option value="">Select a topic</option>
        <option value="Support">Support</option>
        <option value="Feedback">Feedback</option>
        <option value="Other">Other</option>
        </select>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          placeholder="Your Message..."
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit query</button>
      </form>
    </div>
  );
};

export default ContactForm;
