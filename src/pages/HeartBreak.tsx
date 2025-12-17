import { useEffect } from "react";
import { motion } from "framer-motion";
import { HeartbreakFill } from "react-bootstrap-icons";
import '../css/HeartBreak.css'

import {Link} from 'react-router-dom';


export default function BrokenHeartPage() {


  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 position-relative overflow-hidden  p-3  bg "

    >
   
    


  <HeartbreakFill className="text-white" size={80}  />
   



         <div className="card-body text-center position-relative">
         
          <motion.div


            animate={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mb-3"
          >
            <HeartbreakFill className="text-white" size={80} />


          </motion.div> 



          <h3 className="fw-bold">
            I promise you will love it
          </h3>
      

          <div className="d-flex  mt-5 justify-content-center">
            
         

                 <Link  to='/home'    className="btn hurt rounded-5 normal text-light  px-4"
            >TRY AGAIN</Link>

           

          </div>
        </div>

        <HeartbreakFill className="text-white" size={80}  />

     
    </div>
  );
}
