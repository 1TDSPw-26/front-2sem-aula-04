import Cabecalho from "./components/Cabecalho/cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";

export default function app(){

  return(
    <div>
      <Cabecalho/>
      <Conteudo/>
      <Rodape/>
    </div>
  );
}