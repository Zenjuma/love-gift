import { useEffect } from "react";
import { motion } from "framer-motion";
import { HeartbreakFill } from "react-bootstrap-icons";
import '../css/HeartBreak.css'

import {Link} from 'react-router-dom';


export default function BrokenHeartPage() {


  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 position-relative overflow-hidden    bg "

    >
   
    



   
   <img src="/public/assets/lfbr.png" alt=""  className="hurtImoji"/>



         <div className="card-body text-center position-relative">
         
          <motion.div


            animate={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mb-3"
          >
             <img src="/public/assets/cry.png" alt=""  className="cry"/>
          </motion.div> 



          <h3 className="fw-bold">
            I promise you will love it
          </h3>
      

          <div className="d-flex  mt-5 justify-content-center">
            
         

                 <Link  to='/home'    className="btn hurt rounded-5 normal text-light  px-4"
            >TRY AGAIN</Link>

           

          </div>
          <div className="row mt-5 d-flex justify-content-center">

            
            <img src="/public/assets/lfbr.png" alt=""  className="hurtImoji col-6"/>
          <img src="/public/assets/rtbr.png" alt=""  className="hurtImoji col-6"/>


          </div>

         
        </div>

        <img src="/public/assets/rtbr.png" alt=""  className="hurtImoji"/>


     
    </div>



  );
}
