import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us 📞</h1>
      <p>Have any questions or feedback? Reach out to us!</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
