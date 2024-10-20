import NavBar from '../../src/components/AboutUs/navbar';
import Footer from './Home/footer';
import './Privacy-policy.css';

function PrivacyPolicy() {
  return (
    <div>
      <NavBar /> 
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>

        <div className="table-of-contents">
          <h2>Table of Contents</h2>
          <ul>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#info-we-collect">Information We Collect</a></li>
            <li><a href="#how-we-use">How We Use Your Information</a></li>
            <li><a href="#sharing">Sharing Your Information</a></li>
            <li><a href="#data-security">Data Security</a></li>
            <li><a href="#changes">Changes to This Policy</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            Welcome to Neighborly. We are committed to protecting your privacy
            and ensuring that your personal information is handled in a safe
            and responsible manner. This Privacy Policy outlines how we
            collect, use, and protect your information.
          </p>
        </section>

        <section id="info-we-collect">
          <h2>Information We Collect</h2>
          <ul>
            <li>
              <strong>Personal Information</strong>: When you sign up, we may
              collect personal details such as your name, email address, phone
              number, date of birth, and location.
            </li>
            <li>
              <strong>Usage Data</strong>: Information about how you use our
              app, such as interactions with other users, groups, posts, and
              events.
            </li>
            <li>
              <strong>Device Information</strong>: Information about the device
              you use to access Neighborly, including the device type, operating
              system, and unique device identifiers.
            </li>
          </ul>
        </section>

        <section id="how-we-use">
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services.</li>
            <li>Personalize your experience on Neighborly.</li>
            <li>
              Communicate with you, including sending you updates, security
              alerts, and support messages.
            </li>
            <li>
              Monitor and analyze usage and trends to improve user experience.
            </li>
            <li>
              Ensure the safety and security of our users by monitoring for
              fraudulent or illegal activity.
            </li>
          </ul>
        </section>

        <section id="sharing">
          <h2>Sharing Your Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>
              <strong>Service Providers</strong>: Companies that perform
              services on our behalf, such as hosting and analytics.
            </li>
            <li>
              <strong>Legal Requirements</strong>: If required by law, we may
              disclose your information to law enforcement or other authorities.
            </li>
          </ul>
        </section>

        <section id="data-security">
          <h2>Data Security</h2>
          <p>
            We implement a variety of security measures to protect your personal
            information. However, no method of transmission over the internet or
            method of electronic storage is completely secure, so we cannot
            guarantee absolute security.
          </p>
        </section>

        <section id="changes">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by posting the new policy on our app
            and updating the date at the top of this policy.
          </p>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{' '}
            <a href="mailto:tech.support@neighborly.in">
              tech.support@neighborly.in
            </a>
            .
          </p>
        </section>
      </div>
      <Footer /> {/* Reusing the existing Footer */}
    </div>
  );
}

export default PrivacyPolicy;
