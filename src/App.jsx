import "./App.css";
import Menu from "./components/Menu";
import Forms from "./components/Forms";
import Conteudo from "./components/Conteudo";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Menu />
      </div>
      <Conteudo />
    </div>
  );
}

export default App;
