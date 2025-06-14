import { useLocation } from "react-router-dom"
import { useState } from "react"
import './Contact.css'

export default function Contact() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name") || "User"
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div>
      <h2>Hey {name}, Contact Us</h2>
      <p>We'd love to hear from you! Send us a message and we'll get back to you as soon as possible.</p>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>📧 Email:</strong> info@ourapp.com</p>
          <p><strong>📞 Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>📍 Address:</strong> 123 Tech Street, Digital City, DC 12345</p>
          <p><strong>🕒 Hours:</strong> Monday - Friday, 9 AM - 6 PM</p>
        </div>

        <div className="contact-form">
          <h3>Send us a Message</h3>
          
          {submitted ? (
            <div className="success-message">
              <h4>Thank you!</h4>
              <p>Your message has been sent successfully!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}