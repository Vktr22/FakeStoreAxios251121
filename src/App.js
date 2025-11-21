
import './App.css';
import TermekekAdmin from './components/admin/TermekekAdmin';


function App() {
  return (
    <div className="App">
      <header className="App-header"> {/*itt kitörölünk egy csomó mindent, meghadjuk a header-t +h1, aztan letreh az article + importok*/}
        <h1>FakeStore</h1>
      </header>
      <article>
       
          <TermekekAdmin/>
      
      </article>
    </div>
  );
}

export default App;
