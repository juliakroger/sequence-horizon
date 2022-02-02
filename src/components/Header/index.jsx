import React from "react";
import Logo from "../../images/sequence-logo.png";
import LogoMobile from "../../images/sequence-logo-mobile.png";
import Menu from "../../images/menu.png";
import Close from "../../images/close.png";

const Links = ({ handleClick }) => (
  <div className="desktop-header-links">
    <a href="/" rel="noreferrer" className="link link-disabled" disabled>
      Docs
      <sup>coming soon</sup>
    </a>
    <a
      href="https://github.com/0xsequence"
      target="_blank"
      rel="noreferrer"
      className="link"
    >
      Github
    </a>
    <a
      href="https://chat.sequence.build"
      target="_blank"
      rel="noreferrer"
      className="link"
    >
      Discord
    </a>
    <div onClick={handleClick} className="link">
      Contact
    </div>

    <a
      href="https://sequence.app"
      target="_blank"
      rel="noreferrer"
      className="link-gradient-button"
    >
      <button>Launch Wallet</button>
    </a>
  </div>
);

const Header = ({ mobileHeaderOpen, setMobileHeaderOpen }) => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="desktop-header">
        <div className="logo">
          <img alt="logo" src={Logo} />
        </div>

        <Links handleClick={scrollToContact} />
      </div>

      <div className="mobile-header-trigger">
        <img src={Menu} alt="menu" onClick={() => setMobileHeaderOpen(true)} />
      </div>

      <div
        className={`mobile-header ${
          !mobileHeaderOpen ? "mobile-header-closed" : ""
        }`}
      >
        <div className="row">
          <a href="https://sequence.build" rel="noreferrer" target="_blank">
            <img src={LogoMobile} alt="logo" />
          </a>
          <div>
            <img
              src={Close}
              alt="close"
              onClick={() => setMobileHeaderOpen(false)}
            />
          </div>
        </div>

        <Links handleClick={() => [setMobileHeaderOpen(false), scrollToContact()]} />

        <p className="copyright">
          Copyright © 2021 Horizon Blockchain Games Inc.
        </p>
      </div>
    </>
  );
};

export default Header;
