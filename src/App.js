import logo from './logo.svg';
import './App.css';

function App() {
  function alertar() {
    alert("Vc clickou no titulo")
  }
  return (
    <div className="App">
      <div className='noticia1'>
        <img className='img' src='http://conteudo.imguol.com.br/c/entretenimento/ea/2019/10/28/manoel-gomes-do-hit-caneta-azul-1572288220489_v2_603x600.jpg'></img>
        <div className='conteudo'>
          <h1>Manoel Gomes (Blue Pen) lança novo hit </h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

      </div>
      <div className='noticia1'>
        <img className='img' src='https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2020/07/10/806x444/1_dj_cleiton_rasta_perfil_body_image_1474918939-16274795.jpg'></img>
        <div className='conteudo'>
          <h1>DJ Cleiton Rasta é preso por injuria racial</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
