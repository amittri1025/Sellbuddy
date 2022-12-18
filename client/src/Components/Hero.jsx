import deal from "../images/deal.jpg";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Hero() {
  return (
    <>
      <div class="container-fluid">
        <div className="text-container p-5">
          <h1>Sell Your Stuff on Chat | In real time</h1>
          <p>
            It could be anything from furnitures to Devices to Pets, ANYTHING
            !!!
          </p>
          <h2>And find potential customers in your area</h2>
          <img src={deal} alt="" />
          <Link className="text-white d-block py-5" to="/messages">
            <button type="button" class="btn btn-primary btn-lg">
              Start Selling
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
