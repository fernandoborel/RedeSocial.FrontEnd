//declaração do componente
const Feed = () => {
  //bloco para renderizar o conteudo HTML
  //exibido pelo componente no navegador
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <button
            className="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#janelaPublicacao"
          >
            Criar publicação
          </button>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-2">
              <img
                src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
                className="img-fluid"
                width={50}
              />
            </div>
            <div className="col-md-10">
              <div>
                <strong>Nome da pessoa</strong>
              </div>
              <div>
                <small>Data da publicação: dd/MM/yyyy</small>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-12">
              <button className="btn btn-sm btn-outline-primary me-2">
                Curtir
              </button>
              <button className="btn btn-sm btn-outline-primary">
                Comentar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Janela modal para criar publicações */}
      <div
        className="modal fade"
        id="janelaPublicacao"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Criar publicação
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label>Escreva sua publicação:</label>
                  <textarea className="form-control"></textarea>
                </div>
                <div className="mb-3 d-grid">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Enviar publicação"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//tornando o componente público
export default Feed;
