import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";
import Navbar from "../../Shared/Navbar";
import EstateCard from "../Home/EstateCard";
import LeftSideNavbar from "../../Shared/LeftSideNavbar";
import RightSideNavbar from "../../Shared/RightSideNavbar";

const Home = () => {
  const estates = useLoaderData();
  console.log(estates);

  return (
    <div className="text-center">
      <Navbar></Navbar>
      <Header></Header>
      <h2 className="mt-8 mb-4 text-3xl font-bold">About Us</h2>
      <p className="text-center font-Poppins my-4">
      CitySquare designed for people to live in, such as single-family homes, apartments, condominiums, and townhouses. The value of residential real estate is often influenced by factors like neighborhood quality, proximity to amenities, school districts, and overall economic conditions.
      </p>

      <h2 className="mt-8 mb-4 text-3xl font-bold">Explore</h2>

      {/* main section */}
      <div className="md:grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <LeftSideNavbar />
        </div>

        {/* Main container */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {estates.map((estate) => (
            <EstateCard key={estate.id} estate={estate} />
          ))}
        </div>

        {/* Uncomment this if you need the right side navbar */}
        {/* <div>
           <RightSideNavbar />
         </div> */}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
