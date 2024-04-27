import "../assets/styles/Footer.css";
import TafeLogo from "../assets/images/TAFE-logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-footer">
          <img src={TafeLogo} alt="" />
          <p>© TAFE NSW 2060</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
