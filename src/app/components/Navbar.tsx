import { Link } from "react-router-dom";


//declaração do componente
const Navbar = () => {
  //bloco para renderizar o conteudo HTML
  //exibido pelo componente no navegador
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <strong>Projeto Rede Social</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* Link para a página de login */}
              <Link to="/" className="nav-link text-white">
                Acessar Conta
              </Link>
            </li>


            <li className="nav-item">
              {/* Link para a página de cadastro */}
              <Link to="/register" className="nav-link text-white">
                Crie sua Conta
              </Link>
            </li>


            <li className="nav-item">
              {/* Link para a página principal */}
              <Link to="/principal" className="nav-link text-white">
                Página Principal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


//tornando o componente público
export default Navbar;