export default function Sede( {sede} ) {
    return <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#"+sede.Cod} aria-expanded="true" aria-controls="collapseOne">
        {sede.Sede}
      </button>
    </h2>
    <div id={sede.Cod} className="accordion-collapse collapse show" >
      <div className="accordion-body">
        <div className="m-2 p-2">
        <p><i class="bi bi-house mx-2"></i>Direccion: <strong>{sede.Direccion}</strong></p>
        <p><i class="bi bi-telephone mx-2"></i>Telefono: <strong>{sede.Telefono}</strong></p>
        <p><i class="bi bi-envelope-at mx-2"></i>Correo: <strong>{sede.Email}</strong></p>
        <img className="d-block mx-auto" width="300" src={sede.ImgUrl}></img>
        

        <p className="m-2 p-2"><strong>Carreras</strong></p>
        <ul> 
            {sede.Carreras.map(C => <li>{C.Name} <p>Duracion : <strong>{C.Duracion}</strong></p></li>)}
        </ul>
        </div>
        </div>
    </div>
  </div>
};
