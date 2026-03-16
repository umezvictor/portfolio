import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <h5>Contact</h5>

        <div>
          <p>Get in touch with me via any of the following channels</p>
        </div>
        <div className="contact-details">
          <p>
            <i className="bi bi-envelope-at"></i> umezvictor123@gmail.com
          </p>

          <p>
            <i className="bi bi-linkedin icon-color"></i>{" "}
            <a href="https://www.linkedin.com/in/victorumezuruike/">
              LinkedIn <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </p>

          <p>
            <i className="bi bi-telephone-fill"></i> +370-66765338
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
