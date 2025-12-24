import { useNavigate } from "react-router-dom";
import "../css/Button.css";
import { Link } from "react-router-dom";

export default function Button({route}) {

  return (
    <Link to= {route} className=" back btn btn-light text-danger fw-bolder " >
        <i className="bi bi-arrow-left-short me-2 "></i>
        Back
        </Link>
  );
}
