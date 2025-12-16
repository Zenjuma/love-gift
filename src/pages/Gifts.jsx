import "../css/Gifts.css"



export default function Gifts(){
    return (
        <div className="container gifts text-center home align-content-center" >
            <h1 className="title">THESE ARE FOR YOU</h1>
            <p>Click to open</p>

    <div className="mb-3  d-flex justify-content-evenly cards">

    <div className="card  " >
  
  <div className="card-body">
    <h5>Light card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
  </div>

  <div className="card " >

   <div className="card-body">
    <h5>Light card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
  </div>

  <div className="card " >

   <div className="card-body">
    <h5>Light card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
</div>



        </div>
    )
}