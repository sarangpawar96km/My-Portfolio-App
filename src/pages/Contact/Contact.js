import React, { useRef } from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
// import Bounce from "react-reveal/Bounce";
// import Zoom from "react-reveal/Zoom";
// import Fade from "react-reveal/Fade";
const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const handleSubmit = (e) => {
    setTimeout(() => {
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    }, 0);
  };
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact-container">
          {/* <Bounce> */}
            <div className="contact-heading">
              <h1>Contact</h1>
            </div>
          {/* </Bounce> */}
          <div className="contact-details">
            {/* <Zoom> */}
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30263.277202792546!2d73.82169990112303!3d18.532984574355336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0791d785177%3A0x20d86a81ca743dc8!2sShivajinagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1687342465834!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            {/* </Zoom> */}
            {/* <Fade right> */}
              <div className="form">
                <div className="social-media">
                  <h2>
                    Contact with{" "}
                    <a
                      href="https://www.linkedin.com/in/sarang-pawar-2502b7234/"
                      target="blank"
                    >
                      <FaLinkedin title="Linkedin" />
                    </a>{" "}
                    <a href="https://github.com/sarangpawar96km" target="blank">
                      <FaGithub title="Github" />
                    </a>{" "}
                    <a
                      href="https://www.instagram.com/sarang96km.sp/"
                      target="blank"
                    >
                      <FaInstagramSquare title="Instagram" />
                    </a>
                  </h2>
                </div>
                <div className="or">
                  <h5>---------- OR ----------</h5>
                </div>
                <div className="form-fields">
                  <form
                    action="https://formspree.io/f/mpwaqlqd"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <div className="field-input">
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        required
                        ref={nameRef}
                      />
                    </div>
                    <div className="field-input">
                      <input
                        type="email"
                        placeholder="Email"
                        className="margin"
                        name="email"
                        required
                        ref={emailRef}
                      />
                    </div>
                    <div className="field-input">
                      <textarea
                        type="text"
                        placeholder="Message"
                        name="message"
                        className="margin"
                        required
                        ref={messageRef}
                        style={{ height: "130px" }}
                      />
                    </div>
                    <div className="field-input">
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            {/* </Fade> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
