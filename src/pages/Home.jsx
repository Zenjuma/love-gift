import "../css/Home.css"

export default function Home(){

    return(
        <div className="container text-center home align-content-center ">

           
           <h2 className="fs-2 val">Hi Baby</h2>
           <h1 className="fs-1 title">Happy Christmas</h1>
           <p className="normal">Do you want to see your little gift?</p>

           <button type="button"
            className="btn btn-light btn-md me-4 rounded-4"
            onClick={() =>  window.location.href = "/gifts"}>Yes Please</button>
           <button type="button" class="btn btn-light btn-md ms-4 rounded-4">No Thanks</button>
           

        </div>
       
    )
}

