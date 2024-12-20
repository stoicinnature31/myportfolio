import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dxc3vw4', // Replace with your EmailJS service ID
        'template_w1esz79', // Replace with your EmailJS template ID
        formRef.current,
        'gu-7OjK1n_UYNwdCv' // Replace with your EmailJS public key
      )
      .then(
        () => {
          toast.success('✅ Message sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
        },
        () => {
          toast.error('❌ An error occurred, please try again.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
          });
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <ToastContainer />
      <div className="skills" id="contact">
        <h1>CONTACT</h1>
      </div>

      <div className="contact">
        <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
          <h1>LET'S WORK TOGETHER!</h1>
          <p>
            I design and code beautifully simple things and I love what I do.
            Just simple like that!
          </p>
          <input type="text" name="user_name" placeholder="FULL NAME" required />
          <input
            type="email"
            name="user_email"
            placeholder="EMAIL ADDRESS"
            required
          />
          <input type="tel" name="user_phone" placeholder="PHONE" required />
          <textarea
            name="message"
            placeholder="MESSAGE"
            rows={5}
            required
          ></textarea>
          <button type="submit">
            SEND MESSAGE<i className="bx bxl-telegram"></i>
          </button>
        </form>

        <div className="contact-info">
          <div className="phone">
            <i className="bx bxs-phone-call"></i>
            <div className="details">
              <h2>PHONE</h2>
              <p>
                <a href="tel:+918583053099">+918583053099</a>
              </p>
            </div>
          </div>
          <div className="email">
            <i className="bx bx-envelope"></i>
            <div className="details">
              <h2>EMAIL</h2>
              <p>rajdippramanik31@gmail.com</p>
            </div>
          </div>
          <div className="address">
            <i className="bx bx-current-location"></i>
            <div className="details">
              <h2>ADDRESS</h2>
              <p>MALLIKPUR, KOLKATA-700145, WEST BENGAL, INDIA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
