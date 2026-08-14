import type { Component } from 'react';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Rodape from './componentes/Rodape/Rodape';
import Conteudo from './componentes/Conteudo/Conteudo';

 export default function App(){

  return(
   <div>
     <Cabecalho/>
     <Conteudo/>
     <Rodape/>
   </div>
   );
 }