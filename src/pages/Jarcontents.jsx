import Button from "../components/Button";
import "../css/Jarcontents.css"

export default function JarContents() {
  return (
    <div className="container vh-100 text-center d-flex flex-column justify-content-center">
      
      <h1 className="title">JAR OF LOVE</h1>
      <h4 className="normal mb-4">Four Reasons Why I Love You</h4>

      <div className="row align-items-center justify-content-center text-danger fs-5">

    
        <div className="col">
          <div className="bg-light m-3 p-3 rounded-5">
            You feel like home
          </div>
          <div className="bg-light m-3 p-3 rounded-5">
            You love me gently
          </div>
        </div>

    
        <div className="col">
          <img
            src="/assets/jarlove-remove.png"
            alt="Love Jar"
            className="img-fluid text-light jar-image"
          />
        </div>

    
        <div className="col">
          <div className="bg-light m-3 p-3 rounded-5">
            You show up consistently
          </div>
          <div className="bg-light m-3 p-3 rounded-5">
            You see me fully
          </div>
        </div>

      </div>

     
      <div className="mt-4">
        <Button />
      </div>

    </div>
  );
}
