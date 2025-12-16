import Button from "../components/Button";
import "../css/Gifts.css"
import { useNavigate } from "react-router-dom";




export default function Gifts(){
    const navigate = useNavigate();

    return (
        <div className="container gifts text-center align-content-center" >
            <h1 className="title">THESE ARE FOR YOU</h1>
            <p>Click to open</p>

    <div className="mb-3  d-flex justify-content-evenly cards">

    <div className="card"
    onClick={() => navigate("/jarcontents")} >
        <img src="/lovejar2.png"
         alt="" 
         className="lovejar-remove"/>
  
  </div>

  <div className="card  " >
        <img src="/headphoneicon.png"
         alt="" 
         className="lovejar-remove"/>
  
  </div>
   <div className="card  " >
        <img src="/envelope.png"
         alt="" 
         className="lovejar-remove"/>
  
 </div>
</div>

<Button/>



        </div>
    )
}