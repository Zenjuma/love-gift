import "../css/Home.css"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="container text-center home align-content-center">
      <h2 className="val mb-3 babe">Hi Baby ❤️</h2>
      <h1 className="normal mb-4 christmas">Merry Christmas </h1>
      <p className="normal quest">Do you want to open your little christmas gifts?</p>

      <div className="mt-5 d-flex justify-content-center gap-3">
        <Link to="/gifts" className="btn btn-danger me-5 rounded-4 normal fw-bold decide">
          🎁 YES PLEASE
        </Link>

        <Link to="/heartbreak" className="btn btn-danger ms-5 rounded-4 normal fw-bold decide">
          💔 NO THANKS
        </Link>
      </div>
    </div>
  )
}

