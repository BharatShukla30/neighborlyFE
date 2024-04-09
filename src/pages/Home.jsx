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

  return (
    <>
      <HeroSection />
      {!isAuthenticated && <Footer />}
    </>
  );
};

export default Home;
