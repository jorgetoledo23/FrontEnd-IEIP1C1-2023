export default function Sede({sede}) {
   return <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {sede.Sede}
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <p>Direccion: <strong>{sede.Direccion}</strong></p>
            <p>Telefono: <strong>{sede.Telefono}</strong></p>
            <p>Correo: <strong>{sede.Email}</strong></p>

            {sede.Carreras.map(C => <div>
                <p>{C.Name}</p>
                <p>Duracion : {C.Duracion}</p>
            </div>)}


         </div>
      </div>
    </div>


};
