import { Link } from "react-router-dom"
import "../css/Button.css"

export default function Button(){


    return(
        <Link to="/" className="position-fixed btn btn-light text-danger fw-bolder">
        <i className="bi bi-arrow-left-short me-2"></i>
        Back
      </Link>
    )
}