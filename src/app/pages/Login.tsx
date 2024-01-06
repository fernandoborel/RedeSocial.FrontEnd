import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import config from "../config/config";


const Login = () => {
  //declarando as variáveis do componente
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState([]);


  //função para capturar o SUBMIT do formulário
  const handleSubmit = (e: any) => {
    //anular o comportamento do submit para que
    //a página não seja recarregada
    e.preventDefault();


    //limpar a variavel mensagem
    setErros([]);


    //enviando a requisição POST para a API
    axios
      .post(`${config.apiUrl}/pessoas/autenticar`, { email, senha })
      .then(
        //captura a resposta de sucesso da API
        (result) => {    
         
          console.log(result.data);


          setEmail("");
          setSenha("");
        }
      )
      .catch(
        //captura a resposta de erro da API
        (e) => {


          console.log(e.response);


          //capturar os erros obtidos da API
          //setErros(e.response.data.Errors);
        }
      );
  };


  return (
    <div className="row mt-5">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <div className="text-center">
              <h2>Acessar Conta</h2>
              <p>Entre com suas credenciais de acesso.</p>
            </div>


            <div className="text-danger">
              {erros.map((item: string) => (
                <div>{item}</div>
              ))}
            </div>


            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite aqui"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Digite aqui"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <div className="mb-3 d-grid">
                <button type="submit" className="btn btn-primary">
                  Entrar
                </button>
              </div>
              <div className="mb-3 d-grid">
                <Link to="/register" className="btn btn-light">
                  Não possui conta? <strong>Crie aqui!</strong>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;