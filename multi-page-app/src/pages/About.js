import { Link } from "react-router-dom";
import "../App.css";

function About() {
  return (
    <div className="container">
      <h1>About Page</h1>

      <p>This app demonstrates React Router navigation.</p>

      <Link to="/">
        <button className="btn">Go Home</button>
      </Link>
    </div>
  );
}

export default About;