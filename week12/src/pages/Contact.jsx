import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {submitted ? (
        <p>Thank you for contacting us! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      
      <br />
      <h3>Our Details</h3>
      <p>Email: admin@school.com</p>
      <p>Phone: 123-456-7890</p>
    </div>
  );
};

export default Contact;
