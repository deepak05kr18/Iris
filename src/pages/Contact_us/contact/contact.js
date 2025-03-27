import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className='contact-page-sec'>
      <div className='container'>
        <div className='row'>
          {/* Address Section */}
          <div className='col-md-4'>
            <div className='contact-info'>
              <div className='contact-info-item'>
                <div className='contact-info-icon'>
                  <i className='fas fa-map-marked'></i>
                </div>
                <div className='contact-info-text'>
                  <h2>Address</h2>
                  <span>1215 Lorem Ipsum, Ch 176080</span>
                  <span>Chandigarh, INDIA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className='col-md-4'>
            <div className='contact-info'>
              <div className='contact-info-item'>
                <div className='contact-info-icon'>
                  <i className='fas fa-envelope'></i>
                </div>
                <div className='contact-info-text'>
                  <h2>E-mail</h2>
                  <span>info@LoremIpsum.com</span>
                  <span>yourmail@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours Section */}
          <div className='col-md-4'>
            <div className='contact-info'>
              <div className='contact-info-item'>
                <div className='contact-info-icon'>
                  <i className='fas fa-clock'></i>
                </div>
                <div className='contact-info-text'>
                  <h2>Office Time</h2>
                  <span>Mon - Thu 9:00 am - 4:00 pm</span>
                  <span>Thu - Mon 10:00 pm - 5:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className='row'>
          <div className='col-md-8'>
            <div className='contact-page-form'>
              <h2>Get in Touch</h2>
              <form action='contact-mail.php' method='post'>
                <div className='form-grid'>
                  {/* First Row: Name & Email */}
                  <div className='input-group'>
                    <input
                      type='text'
                      placeholder='Your Name'
                      name='name'
                      required
                    />
                    <input
                      type='email'
                      placeholder='E-mail'
                      name='email'
                      required
                    />
                  </div>

                  {/* Second Row: Phone & Subject */}
                  <div className='input-group'>
                    <input
                      type='text'
                      placeholder='Phone Number'
                      name='phone'
                    />
                    <input type='text' placeholder='Subject' name='subject' />
                  </div>

                  {/* Message Field */}
                  <div className='single-input-field'>
                    <textarea
                      placeholder='Write Your Message'
                      name='message'
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className='single-input-fieldsbtn'>
                    <input type='submit' value='Send Now' />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className='col-md-4'>
            <div className='contact-page-map'>
              <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7294365065104!2d77.10170597549993!3d28.607892575678104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b007ae0c719%3A0x3414319f2b69e494!2sIris%20Aerial%20Innovations%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1740598665809!5m2!1sen!2sin"                width='100%'
                height='450'
                frameBorder='0'
                style={{ border: 0 }}
                allowFullScreen
                title='Google Map'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
