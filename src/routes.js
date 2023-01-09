import ScrollToTop from "componentes/ScrollToTop";
import CadastroProduto from "Paginas/CadastroProduto";
import PrimeiraEtapa from "Paginas/FazerCadastro/PrimeiraEtapa";
import SegundaEtapa from "Paginas/FazerCadastro/SegundaEtapa";
import TerceiraEtapa from "Paginas/FazerCadastro/TerceiraEtapa";
import Login from "Paginas/Login";
import PaginaDeErro from "Paginas/PaginaDeErro";
import PaginaDoProduto from "Paginas/PaginaDoProduto";
import PaginaInicial from "Paginas/PaginaInicial";
import PaginaPadrao from "Paginas/PaginaPdrao";
import TodosOsPorodutos from "Paginas/TodosOsProdutos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/estilosGlobais.scss';

function AppRoutes () {
  return (
      <BrowserRouter>
      <ScrollToTop />
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
                <Route index element={<PaginaInicial />} />
                <Route path="/login" element={<Login />} />
                <Route path="produto/:id" element={<PaginaDoProduto />} />
                <Route path="/todos-produtos" element={<TodosOsPorodutos />} />
                <Route path="/adicionar-produto" element={<CadastroProduto />} />
                <Route path="/cadastro/etapaa" element={<PrimeiraEtapa />} />
                <Route path="/etapab" element={<SegundaEtapa />} />
                <Route path="/etapac" element={<TerceiraEtapa />} />
                <Route path="*" element={<PaginaDeErro />} />
            </Route>
         
          </Routes>
          
      </BrowserRouter>
      
  );
}

export default AppRoutes;
