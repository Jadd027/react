import { useState } from 'react';
import './App.css';


function App() {

  const [valorHora, setvalorHora] = useState(0);
  const [horasT, sethorasT] = useState(0);
  const [nombreU, setnombreU] = useState(" ");
  const [apellidosU, setapellidosU] = useState(" ");

  /* const valorSalario = horasT * valorHora  */
  const usuario = ` ${nombreU}   ${apellidosU}`;

  const valorSalario = (valorHora >= 0 && horasT >= 0)
    ? horasT * valorHora
    : "Datos Inválidos";


  return (
    <div className="App">
      <>
        <div className="alert alert-primary titulo" role="alert">
          <h1>Valor Salario</h1>
        </div>
        <br />

        <div className='container px-4 text-center'>
          <form className="row" >

            <p className='my-3'>Calcular el sueldo de un empleado dando, como datos de entrada:</p>

            {/* ------------ SECCION DE NOMBRE -------------*/}

            <div className="container px-4 text-center">
              <div className="row gx-5">
                <div className="col">
                  <div className="p-3">
                    <label htmlFor="validationCustom01" className="form-label p-2">Nombre </label>

                    <input type="text" onChange={(e) => setnombreU(e.target.value)} value={nombreU} className="form-control p-2" id="validationCustom01" required />
                  </div>
                </div>

                <div className="col">
                  <div className="p-3">
                    <label htmlFor="validationCustom02" className="form-label p-2">Apellidos </label>

                    <input type="text" onChange={(e) => setapellidosU(e.target.value)} value={apellidosU} className="form-control p-2" id="validationCustom02" required />
                  </div>
                </div>
              </div>

              {/* ----------- SECCION DE VALORES -------------*/}

              <div className="row gx-5">
                <div className="col">
                  <div className="p-3">
                    <label htmlFor="validationCustom03" className="form-label p-2">Valor por Hora </label>

                    <input type="number" min="1" pattern="^[0-9]+"
                      onChange={(e) => setvalorHora(e.target.value)} value={valorHora}
                      className="form-control p-2" id="validationCustom03" required />
                  </div>
                </div>

                <div className="col">
                  <div className="p-3">
                    <label htmlFor="validationCustom04" min="1" pattern="^[0-9]+" className="form-label p-2">Horas Trabajadas </label>

                    <input type="number" min="0" onChange={(e) => sethorasT(e.target.value)} value={horasT} className="form-control p-2" id="validationCustom04" required /> </div>
                </div>
              </div>
            </div>

            {/* ----------- SECCION DE BOTON -------------*/}

            <div className="col-12 my-3">
              <p className="d-inline-flex gap-1">
                <button
                  className="btn btn boton "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="true"
                  aria-controls="collapseExample"
                >
                  Calcular Valor
                </button>
              </p>

              {/* ----------- MENSAJE CON RESULTADO -------------*/}

              <div className="collapse hidden" id="collapseExample">
                <div className="card card-body" style={{color: 'black', fontSize: '18px' }}>
                  Señor/a {usuario}, el valor de sus {horasT} hr Trabajadas es de : $  {valorSalario}
                </div>
              </div>


              {/* <div className="collapse hidden" id="collapseExample">
                  <div className="card card-body" style={{ color: 'black', fontSize: '20px' }}>Datos Inválidos Por favor digite los datos correctamente</div>
                </div> */}

            </div>
          </form>
        </div>
      </>
    </div>
  );
}



export default App;
