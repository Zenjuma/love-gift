import "../css/Home.css"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="container text-center bg">
      <h2 className="fs-2 val">Hi Babe ❤️</h2>
      <h1 className="fs-1 title">Happy Valentine</h1>
      <p className="normal">Do you want to open your gift?</p>

      <div className="mt-4 d-flex justify-content-center gap-3">
        <Link to="/gifts" className="btn btn-light">
          🎁 Yes
        </Link>

        <Link to="/heartbreak" className="btn btn-outline-light">
          💔 No
        </Link>
      </div>
    </div>
  )
}

