import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="container">
      <h1>Multi-Page React Application</h1>

      <p>
        A multi-page React application typically refers to a Single Page Application (SPA) 
        that uses client-side routing to simulate the experience of multiple pages 
        without a full browser refresh.
        </p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/about">
          <button className="btn">About</button>
        </Link>

        <Link to="/users">
          <button className="btn">Users</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;