import Button from "../components/Button";
import "../css/Jarcontents.css";

export default function JarContents() {
  return (
    <div className="jar-page">
      <h1 className="title">JAR OF LOVE</h1>
      <h4 className="normal">Four Reasons Why I Love You</h4>

      <div className="jar-layout text-danger">
        <div className="text-column">
          <div className="reason">You feel like home</div>
          <div className="reason">You love me gently</div>
        </div>

        <div className="jar-column">
          <img src="/assets/jar file.png" alt="Love Jar" className="jar" />
        </div>

        <div className="text-column">
          <div className="reason">You show up consistently</div>
          <div className="reason">You see me fully</div>
        </div>
      </div>

      <Button route= {"/gifts"}/>
    </div>
  );
}
