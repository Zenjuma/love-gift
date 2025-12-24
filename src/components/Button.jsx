import { useNavigate } from "react-router-dom";
import "../css/Button.css";

export default function Button() {
  const navigate = useNavigate();

  return (
    <div 
      className="btn btn-light m-5"
      onClick={() => navigate(-1)}
    >
      <i className="bi bi-caret-left back-btn text-danger"></i>
      Back
    </div>
  );
}
