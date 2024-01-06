//declaração do componente
const Friends = () => {
  //bloco para renderizar o conteudo HTML
  //exibido pelo componente no navegador
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row mb-2">
            <div className="col-md-3">
              <img
                src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
                className="img-fluid"
                width={50}
              />
            </div>
            <div className="col-md-9">
              <div className="mt-2">
                <strong>Nome da pessoa</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//tornando o componente público
export default Friends;
