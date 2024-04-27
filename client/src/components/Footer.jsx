import "../assets/styles/Footer.css";
import TafeLogo from "../assets/images/TAFE-logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-footer">
          <p>This site has been developed by</p>
          <img src={TafeLogo} alt="" />
          <p>© TAFE NSW 2060</p>
          <p>
            Please note this is a fictitious organisation and has been created
            for educational purposes only
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
