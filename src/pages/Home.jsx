import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <div className="pt-10 px-4 md:px-7 md:pt-8">
      <HeroSection />
    </div>
  );
};

export default Home;
