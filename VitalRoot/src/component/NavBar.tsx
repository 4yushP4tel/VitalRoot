import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const NavBar = () => {
    return (
<header className="bg-[#487748] p-4 flex justify-between items-center shadow-lg font-sans">
  <Link to={"/"} className="text-white text-3xl font-semibold hover:text-green-200 transition duration-300">
    <h1>VitalRoot</h1>
  </Link>
  <div className="flex space-x-6">
    <Link to={"/AI"} className="text-white text-xl hover:text-green-200 transition duration-300">
      <h2>AI Assistance</h2>
    </Link>
    <Link to={"/graphs"} className="text-white text-xl hover:text-green-200 transition duration-300">
      <h2>Crop Monitoring</h2>
    </Link>
  </div>
</header>);

}

export default NavBar;