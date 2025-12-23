

import "../css/Message.css";
import { Link } from "react-router-dom";



export default function Msg() {
  return (
    <div className="container ">
      <h2 className="text-center mt-4">CHRISTMAS MESSAGE</h2>

      <div className="d-flex justify-content-center align-items-center">
        <svg
          className="love-svg"
          viewBox="0 0 460 380" 
          width="100%"         
          style={{ maxWidth: "600px" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7a0c10" />
              <stop offset="100%" stopColor="#a31218" />
            </linearGradient>

            <filter id="carvedShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
              <feOffset dx="8" dy="10" result="offsetblur" />
              <feColorMatrix
                in="offsetblur"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
              />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d={SCALLOP_PATH}
            transform="translate(10 12)"
            fill="#4b080b"
            opacity="0.45"
          />

          <path
            d={SCALLOP_PATH}
            fill="url(#cardGrad)"
            filter="url(#carvedShadow)"
          />

        
          <foreignObject x="60" y="60" width="340" height="220">
            <div className="svg-content text-center">
              <div className="scroll-container">
               


                <h2>Merry Chrismas baby ♡</h2>


              <p>               You are truly the best thing that has ever happened to me.
               Loving you has changed my life in the most beautiful ways,
               and every day with you reminds me how lucky I am. You bring so much light,calm and joy into my world and just being with you makes everything feel right.
            </p>
             <p>
               I wish you most beautiful birthday filled with love,laughter,peace and all the little moments that make your heart happy.
               May this new year bring you everything you deserve and more. I am grateful for you today and always.
             </p> 

          

            <h3>I LOVE YOU</h3> 
                
             
              
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>

     
        <Link to="/gifts" className="position-fixed btn btn-light text-danger fw-bolder">
          <i className="bi bi-arrow-left-short me-2"></i>
          Back
        </Link>
    
    </div>
  );
}




const SCALLOP_PATH = `
M25 15
Q35 5 45 15
Q55 25 65 15
Q75 5 85 15
Q95 25 105 15
Q115 5 125 15
Q135 25 145 15
Q155 5 165 15
Q175 25 185 15
Q195 5 205 15
Q215 25 225 15
Q235 5 245 15
Q255 25 265 15
Q275 5 285 15
Q295 25 305 15
Q315 5 325 15
Q335 25 345 15
Q355 5 365 15
Q375 25 385 15
Q395 5 405 15
Q415 25 425 15

L445 30

Q455 40 445 50
Q435 60 445 70
Q455 80 445 90
Q435 100 445 110
Q455 120 445 130
Q435 140 445 150
Q455 160 445 170
Q435 180 445 190
Q455 200 445 210
Q435 220 445 230
Q455 240 445 250
Q435 260 445 270

L425 295

Q415 305 405 295
Q395 285 385 295
Q375 305 365 295
Q355 285 345 295
Q335 305 325 295
Q315 285 305 295
Q295 305 285 295
Q275 285 265 295
Q255 305 245 295
Q235 285 225 295
Q215 305 205 295
Q195 285 185 295
Q175 305 165 295
Q155 285 145 295
Q135 305 125 295
Q115 285 105 295
Q95 305 85 295
Q75 285 65 295
Q55 305 45 295
Q35 285 25 295

L15 270

Q5 260 15 250
Q25 240 15 230
Q5 220 15 210
Q25 200 15 190
Q5 180 15 170
Q25 160 15 150
Q5 140 15 130
Q25 120 15 110
Q5 100 15 90
Q25 80 15 70
Q5 60 15 50
Q25 40 15 30
Z
`;
