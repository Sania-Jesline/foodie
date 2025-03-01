import "../styles/About.css";
import aboutImage from "../assets/about1.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src={aboutImage} alt="Restaurant" />
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Welcome to <strong>Foodie</strong>, your ultimate destination for delicious food.
            We bring you fresh and tasty meals, prepared with love and quality ingredients.
          </p>
          <p>
            Our journey started with a passion for cooking and serving the best dishes. 
            Join us to experience mouth-watering flavors and a wonderful dining atmosphere!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
