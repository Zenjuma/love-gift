import { Link } from "react-router-dom";

export function Youtube(){
    return(

        <div className="d-flex justify-content-center container mt-5 vh-100 ">
            <div className="col">
            <h2 className="mb-5 title text-center">THIS SONG REMINDS ME OF YOU</h2>

            <video
            className="h-50"
      controls
    //   preload="metadata"
      poster="/public/assets/video_poster.png"
      width="100%"
      autoPlay
      loop
    >
    
      <source src="/assets/Iyanii_ Unanifaa720.mp4" type="video/mp4" />

      Your browser does not support the video tag.
    </video>
            
        </div>


        <Link to="/gifts" className=" back btn btn-light text-danger fw-bolder " >
        <i className="bi bi-arrow-left-short me-2 "></i>
        Back
        </Link>
        </div>




    );
  
}
