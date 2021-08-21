import React, { useState } from "react";

const App = () => {
  const [nome, setNome] = useState("");
  const [pacientes, setPacientes] = useState([]);

  const handleNome = e => {
    setNome(e.target.value);
  }

  const handleAdd = e => {
    e.preventDefault();

    if (nome.trim().length <= 2) {
      alert("Informe o nome completo do paciente");
      return;
    }

    // spread operator (junta os pacientes da lista, com o novo paciente)
    setPacientes([...pacientes, nome]);

    // limpa o nome (ou seja, o campo do form)
    setNome("");
  }

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-sm-4">
          <img src="dentista.jpg" alt="Dentista" className="img-fluid" />
        </div>
        <div className="col-sm-8">
          <h3>Centro Odontológico Avenida</h3>
          <form onSubmit={handleAdd}>
            <div className="form-group">
              <label htmlFor="nome">Nome do Paciente:</label>
              <input type="text" className="form-control" id="nome"
                     value={nome}
                     onChange={handleNome} />
            </div>
            <input
              type="submit"
              className="btn btn-primary"
              value="Adicionar"
            />
          </form>
          <h4 className="mt-3">Lista de Pacientes na Fila:</h4>
          <ol className="text-primary font-weight-bold">
            {
              pacientes.map(paciente => {
                return <li key={paciente}>{paciente}</li>
              })  
            }
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;
