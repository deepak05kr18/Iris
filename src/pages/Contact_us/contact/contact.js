import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbw8BUiyOJ9PpB1IgGAZ7W7QF6UrAgSZbVlRi9OG5Qx-7nxivWYnRXTOi1udfK9SultXUA/exec';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(() => {
        alert('Thank you! Your form has been submitted successfully.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('Error!', error.message);
        alert('There was an error submitting the form. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact-page-sec">
      <div className="container">
        <div className="contact-info-row">
          {/* Address Section */}
          <div className="contact-info-col">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-map-marked"></i>
                </div>
                <div className="contact-info-text">
                  <h2>Address</h2>
                  <span>B-142, Sector 8, Dwarka 110077, New Delhi, India</span>
                  <span>New Delhi, INDIA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="contact-info-col">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-info-text">
                  <h2>E-mail</h2>
                  <span>info@irisaerial.in</span>
                  <span>global@irisaerial.in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours Section */}
          <div className="contact-info-col">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-info-text">
                  <h2>Office Time</h2>
                  <span>Mon - Fri 10:00 am - 6:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form and Map Section */}
        <div className="contact-content-row">
          {/* Contact Form Section */}
          <div className="contact-form-col">
            <div className="contact-page-form">
              <h2>Get in Touch</h2>
              <form name="contact-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  {/* First Row: Name & Email */}
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      placeholder="E-mail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Second Row: Phone & Subject */}
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message Field */}
                  <div className="single-input-field">
                    <textarea
                      placeholder="Write Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="single-input-fieldsbtn">
                    <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Now'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="contact-map-col">
            <div className="contact-page-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7294365065104!2d77.10170597549993!3d28.607892575678104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b007ae0c719%3A0x3414319f2b69e494!2sIris%20Aerial%20Innovations%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1740598665809!5m2!1sen!2sin"
                width="100%"
                height="550"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;