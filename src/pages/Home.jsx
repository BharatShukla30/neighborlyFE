import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);
  // const winSize = window.innerWidth;
  // console.log(winSize)
  // if(winSize < 768){
  //   return <h1>
  //     placeholder
  //   </h1>
  // }
  return (
    <>
      <div className="xl:hidden md:hidden">placeholder</div>
      <div className="sm:hidden "> existing</div>
      <HeroSection />
      {!isAuthenticated && <Footer />}
    </>
  );
};

export default Home;
