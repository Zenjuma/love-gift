import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../css/Gifts.css";

export default function Gifts() {
  const navigate = useNavigate();
  const cardsRef = useRef(null);
  const wrapperRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const resize = () => {
      if (!cardsRef.current || !wrapperRef.current) return;

      const cardsWidth = cardsRef.current.scrollWidth;
      const availableWidth = wrapperRef.current.clientWidth;

      const newScale = Math.min(1, availableWidth / cardsWidth);
      setScale(newScale);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div
      className="container gifts text-center align-content-center"
      ref={wrapperRef}
    >
      <h1 className="title">THESE ARE FOR YOU</h1>
      <p>Click to open</p>

      <div
        className="cards-wrapper"
        style={{ transform: `scale(${scale})` }}
      >
        <div className="cards" ref={cardsRef}>
          <div className="card" onClick={() => navigate("/jarcontents")}>
            <img src="/lovejar2.png" alt="" className="lovejar-remove" />
          </div>

          <div className="card">
             <Link to="/video">
            <img src="/headphoneicon.png" alt="" className="lovejar-remove" />
            </Link>
          </div>

          <div className="card">
            <img src="/envelope.png" alt="" className="lovejar-remove" />
          </div>
        </div>
      </div>

      <Button />
    </div>
  );
}
