import "../assets/styles/Header.css";
import GELogo from '../assets/images/GE-logo.svg'
const HeaderComp = () => {
  return (
    <>
      <div className="main-header">
        <a href="/"><img src={GELogo} alt="" /></a>
      </div>
      <div className="grey-bar"></div>
      <div className="green-bar"></div>
      <div className="blue-bar"></div>
    </>
  );
};

export default HeaderComp;
