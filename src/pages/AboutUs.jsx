import Footer from '../components/AboutUs/footer';
import JoinUs from '../components/AboutUs/joinus';
import Mission from '../components/AboutUs/mission';
import Navbar from '../components/AboutUs/navbar';
import Offer from '../components/AboutUs/offer';
import Team from '../components/AboutUs/team';

function AboutUs() {
  return (
    <div>
      <Navbar/>
      <Mission/>
      <Offer/>
      <Team/>
      <JoinUs/>
      <Footer/>
    </div>
    
  );
}

export default AboutUs;