import logo from "../assets/logo.svg";
import "../styles/sidenav.scss";

function SideNav({ title = "" }) {
  const arr = title.toUpperCase().split("");
  return (
    <div className="sidenav">
      <img src={logo} alt="BluePond" />
      <div className="side-title">
        {arr.map((letter, index) => (
          <h1 key={index}>{letter}</h1>
        ))}
      </div>
    </div>
  );
}
export default SideNav;
