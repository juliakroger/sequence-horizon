import React, { useState } from "react";

const SimpleInput = ({
  label,
  id,
  hasError,
  errorMessage,
  value,
  handleChange,
  textArea = false,
}) => {
  return (
    <div className={`form-item ${textArea ? "pt-16" : ""}`}>
      <label className="label" for={id}>
        {label}
      </label>
      {textArea ? (
        <textarea
          className={`input input-text-area ${hasError ? "input-error" : ""}`}
          type="text"
          id={id}
          name={id}
          value={value}
          onChange={(e) => handleChange(e.target.value, id)}
        ></textarea>
      ) : (
        <input
          type="text"
          className={`input ${hasError ? "input-error" : ""}`}
          id={id}
          name={id}
          value={value}
          onChange={(e) => handleChange(e.target.value, id)}
        />
      )}
      {hasError && <span className="error">{errorMessage}</span>}
    </div>
  );
};

const Cards = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    projectWebsite: "",
    aboutProject: "",
  });
  const [hasError, setHasError] = useState(false);
  const [hasSubmited, setHasSubmited] = useState(false);

  const handleChange = (value, id) => {
    setHasError(false);
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (!formValues.email || !formValues.aboutProject) {
      setHasError(true);
      return;
    }

    if (hasSubmited) {
      return;
    }
    // Submit the form here

    setHasSubmited(true);
  };

  return (
    <div id="contact" className="contact-us">
      {hasSubmited ? (
        <div>
          <h2 className="thank-you">Thank You</h2>
        </div>
      ) : (
        <>
          <div className="contact-us-header">
            <h2>We're here to help</h2>
            <p>
              Sequence helps you build the next generation of Internet economies
              and experiences.{" "}
              <a
                href="https://chat.sequence.build"
                target="_blank"
                rel="noreferrer"
              >
                Join our Discord
              </a>{" "}
              to chat with our team.
            </p>
            <p>For additional support, reach out below.</p>
          </div>

          <form className="form" onSubmit={submit}>
            <SimpleInput
              label="Your Email"
              id="email"
              value={formValues.email}
              handleChange={handleChange}
              hasError={hasError}
              errorMessage="Oops! Please try another email"
            />

            <div className="form-row">
              <SimpleInput
                label="First name"
                id="firstName"
                value={formValues.firstName}
                handleChange={handleChange}
              />

              <SimpleInput
                label="Last name"
                id="lastName"
                value={formValues.lastname}
                handleChange={handleChange}
              />
            </div>

            <SimpleInput
              label="Project Website"
              id="projectWebsite"
              value={formValues.projectWebsite}
              handleChange={handleChange}
            />

            <SimpleInput
              textArea
              label="Tell us about your project"
              id="aboutProject"
              value={formValues.aboutProject}
              handleChange={handleChange}
              hasError={hasError}
              errorMessage="Please tell us about your project"
            />

            <div className="button-gradient">
              <button type="submit">Submit</button>
            </div>
          </form>
        </>
      )}

      <div className="footnote">
        <p>We typically respond to inquiries within 48 hours.</p>
        <p>
          You can also email us directly at{" "}
          <a href="mailto:hello@sequence.build">hello@sequence.build </a>
        </p>
      </div>
    </div>
  );
};

export default Cards;
