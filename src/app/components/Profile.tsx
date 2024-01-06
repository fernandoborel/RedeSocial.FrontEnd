//declaração do componente
const Profile = () => {
  //bloco para renderizar o conteudo HTML
  //exibido pelo componente no navegador
  return (
    <div className="card">
      <div className="card-body text-center">
        <img
          src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
          className="img-fluid"
        />
        <div className="mt-3">
          <h4>Nome do usuário</h4>
          <p>Email do usuário</p>
        </div>
        <div className="mt-3 mb-3">
          <button className="btn btn-outline-secondary">Sair do Sistema</button>
        </div>
      </div>
    </div>
  );
};

//tornando o componente público
export default Profile;
