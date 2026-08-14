import Cabecalho from "./components/Cabecalho/cabealho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";


export default function App(){

  return(
    <div>
      <Cabecalho/>
      <Rodape/>
      <Conteudo/>
    </div>
  );
}