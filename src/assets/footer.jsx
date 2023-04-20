import React from 'react'

export default function Footerbar() {
  return (
    <div className="section">
      <div className="contact-form">
        {/*heading */}
        <h3 className="contact-text">Contact Us For More Quotes</h3>
        {/* form */}
        <form action="https://formspree.io/f/mbjeqgal" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="name"
              className="form-control"
            ></input>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="form-control"
            ></input>
            <textarea
              name="message"
              className="form-control"
              rows={5}
              placeholder="message"
            ></textarea>
          </div>
          <button type="submit" className="btn submit-btn">
            submit here
          </button>
          {/*  */}
          <a href="#footer"></a>
        </form>
      </div>
      <div className="footer-last">
        <h3 className="head">Follow Us</h3>
        <div className="social-links">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-quora"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
