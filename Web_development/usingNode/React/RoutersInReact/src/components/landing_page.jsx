import { Link } from "react-router-dom";

const Landing = () => (
  <div className="landing">
    <h1>Welcome to CarCo</h1>
    <p>Your destination for quality pre-owned vehicles.</p>
    <Link to={"/inventory"} className={"cta-button"}>
      View Inventory
    </Link>
  </div>
);

export default Landing;
