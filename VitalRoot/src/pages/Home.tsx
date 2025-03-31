import { Link } from "react-router-dom";

const Home = () => {
    return (
<div className="bg-gray-100 text-green-700 h-screen flex flex-col justify-center items-center">
  <h2 className="text-3xl font-semibold mb-4">Welcome to VitalRoot</h2>
  <p className="text-xl mb-2">Check your crops health and monitor growth</p>
  <p className="text-xl mb-6">Get AI-driven advice to grow your garden efficiently</p>

  <div className="flex space-x-6">
    <Link to={"/AI"}>
      <button className="bg-[#80EF80] text-black py-2 px-6 rounded-md hover:bg-green-500 transition duration-300">
        Get Started With Our AI-Driven
      </button>
    </Link>
    <Link to={"/graphs"}>
      <button className="bg-[#80EF80] text-black py-2 px-6 rounded-md hover:bg-green-500 transition duration-300">
        Track the Health of Your Crops
      </button>
    </Link>
  </div>
</div>
    );
}

export default Home;