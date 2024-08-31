import Footer from './Home/footer';
import Header from './Home/header';
import Section2 from './Home/section2';
import Section3 from './Home/section3';
import Section4 from './Home/section4';
import Section5 from './Home/section5';
import Section6 from './Home/section6';
import Section7 from '../pages/Home/section7';
import NavBar from '../../src/components/AboutUs/navbar'
import FAQS from "../pages/Home/FAQS"

function Home() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <FAQS />
      <Footer/>
      
    </div>
  );
}

export default Home;
