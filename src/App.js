import "./App.css";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <div className="head">
          <h1 id="online">ONLINE</h1>
          <h1 id="education">EDUCATION</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dicta
            quis perferendis blanditiis dignissimos, ducimus numquam a nam
            repudiandae iusto?
          </p>
          <button>LEARN MORE</button>
        </div>
        <div id="photu">
          <img src="https://media.istockphoto.com/vectors/child-training-basic-language-skills-with-speech-therapist-vector-id1302890895?k=20&m=1302890895&s=612x612&w=0&h=DNrXDSzlauqgfFixus9pko4RAydNyqaZKDeOADU1ItI=" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;
